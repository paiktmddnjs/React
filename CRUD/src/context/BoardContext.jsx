import React, { createContext, useContext, useEffect, useState } from 'react'
import { createContext, useState } from "react";


export const BoardContext = createContext();


export const useBoard = () =>{
    const context = useContext(BoardContext);
    return context;
}

export const BoardProvider = ({ children }) => {

 const [posts, setPosts] = useState([]);

 const addBoard = (memberId) => {
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setPosts(prev => [...prev, newPost]);
    setTitle("");
    setContent("");

    // 글 작성 후 목록 페이지로 이동
    navigate("/board");
  };


  
  const deleteBoard = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  
  const editBoard = (post) => {
    setEditingId(post.id);
    setTitle(post.title);
    setContent(post.content);
    // 편집 시 현재 페이지 유지
  };

  const handleUpdate = () => {
    setPosts(prev =>
      prev.map(post =>
        post.id === editingId
          ? { ...post, title, content }
          : post
      )
    );

    setEditingId(null);
    setTitle("");
    setContent("");

    // 수정 완료 후 목록 페이지로 이동
    navigate("/board");
  };



  return (
    <BoardContext.Provider value={{ posts, setPosts }}>
      {children}
    </BoardContext.Provider>
  );
};
