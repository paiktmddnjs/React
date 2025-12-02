import React, { createContext, useContext, useEffect, useState } from 'react';

export const BoardContext = createContext();

export const useBoard = () => useContext(BoardContext);

export const BoardProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // 게시글 추가
  const addBoard = (title, content) => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    setPosts(prev => [...prev, newPost]);
  };

  // 게시글 수정
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
  };

  return (
    <BoardContext.Provider value={{ posts, addBoard, updateBoard, deleteBoard }}>
      {children}
    </BoardContext.Provider>
  );
};
