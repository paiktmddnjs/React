import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
// AuthContext에서 사용자 정보를 가져오기 위해 useAuth를 import 해야 합니다.
import { useAuth } from './AuthContext'; 

export const BoardContext = createContext();

export const useBoard = () => useContext(BoardContext);

// 내부 로컬 스토리지 키 (기존 'likes'와 충돌 방지)
const ALL_LIKES_STORAGE_KEY = "multiUserLikesData";

export const BoardProvider = ({ children }) => {
  // useAuth를 통해 현재 로그인된 사용자 정보와 ID를 가져옵니다.
  const { user } = useAuth();
  // 사용자가 없으면 'anonymous'로 처리합니다.
  const currentUserId = user ? user.id : 'anonymous'; 
  
  // 1. 게시글 목록 상태 (이전과 동일)
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

    useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  // ⭐️ 2. 전체 사용자 좋아요 상태 (내부 관리): { userId: { postId: true, ... }, ... }
  const [allUserLikes, setAllUserLikes] = useState(() => {
    const savedAllLikes = localStorage.getItem(ALL_LIKES_STORAGE_KEY);
    return savedAllLikes ? JSON.parse(savedAllLikes) : {};
  });

  // ⭐️ 3. 현재 사용자의 좋아요 상태 (컴포넌트에 노출): { postId: true, ... }
  // allUserLikes에서 currentUserId에 해당하는 데이터만 가져옵니다.
  const [likes, setLikes] = useState(allUserLikes[currentUserId] || {});

  // ⭐️ 4. 모든 게시글의 총 좋아요 수를 계산하는 로직 추가
  const postLikeCounts = useMemo(() => {
    const counts = {};
    
    // allUserLikes를 순회하며 각 게시글 ID별 좋아요 수를 집계
    Object.keys(allUserLikes).forEach(userId => {
      const userLikes = allUserLikes[userId];
      Object.keys(userLikes).forEach(postId => {
        // 해당 게시글에 좋아요가 눌려있으면 카운트 증가
        if (userLikes[postId]) {
          counts[postId] = (counts[postId] || 0) + 1;
        }
      });
    });
    
    return counts;
  }, [allUserLikes]); // allUserLikes가 변경될 때마다 재계산

  // 5. posts 상태 변경 시 localStorage에 저장 (이전과 동일)

  // ⭐️ 6. allUserLikes가 변경될 때마다 localStorage에 저장하고, 현재 사용자의 likes 상태도 업데이트합니다.
  useEffect(() => {
    localStorage.setItem(ALL_LIKES_STORAGE_KEY, JSON.stringify(allUserLikes));
    
    // 현재 로그인된 사용자의 좋아요 상태를 업데이트하여 likes 변수에 반영
    setLikes(allUserLikes[currentUserId] || {}); 
    
  }, [allUserLikes, currentUserId]); // currentUserId가 변경될 때도 likes를 새로고침해야 합니다.

  
  // 게시글 추가
  const addBoard = (category, score, title, content, author, date, image) => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      userId: currentUserId, // 작성자 ID
      score,
      author,
      title,
      content,
      category,
      date,
      image
    };

    setPosts(prev => [...prev, newPost]);
  };

  // 게시글 수정 (로직 생략)
  const updateBoard = (id, title, content) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, title, content } : post
      )
    );
  };

  // 게시글 삭제
  const deleteBoard = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
    
    // ⭐️ 게시글 삭제 시 모든 사용자의 좋아요 상태에서 해당 게시글 ID 제거
    setAllUserLikes(prevAll => {
      const newAllLikes = { ...prevAll };
      
      // 모든 사용자 ID를 순회하며 해당 postId를 삭제
      Object.keys(newAllLikes).forEach(userId => {
        if (newAllLikes[userId] && newAllLikes[userId][id]) {
          delete newAllLikes[userId][id];
        }
      });
      return newAllLikes;
    });
  };

  // ⭐️ 사용자별 좋아요 토글 함수 구현( 사용자가 게시글에 대해 좋아요를 설정하거나 취소하는 기능)
  const togglePostLike = (postId) => {
    // 1. 전체 좋아요 맵 업데이트
    setAllUserLikes(prevAll => {
      // 현재 사용자의 기존 좋아요 상태를 가져오거나 없으면 빈 객체를 사용
      const currentUserLikes = prevAll[currentUserId] || {};
      const isCurrentlyLiked = !!currentUserLikes[postId]; // 완전 boolean 형태로 만들기 위해 !를 2번 사용

      // 현재 사용자의 좋아요 목록을 복사 후 업데이트
      const updatedUserLikes = { ...currentUserLikes };
      if (isCurrentlyLiked) {
        delete updatedUserLikes[postId]; // 좋아요 취소
      } else {
        updatedUserLikes[postId] = true; // 좋아요 설정
      }

      return {
        ...prevAll,
        [currentUserId]: updatedUserLikes, // 전체 맵에 현재 사용자 데이터 덮어쓰기
      };
    });
  };


  return (
    <BoardContext.Provider value={{ 
      posts, 
      addBoard, 
      updateBoard, 
      deleteBoard, 
      likes, 
      togglePostLike,
      postLikeCounts, // ⭐️ 계산된 좋아요 수를 Context에 추가
    }}>
      {children}
    </BoardContext.Provider>
  );
};