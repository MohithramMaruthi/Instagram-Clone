import React, { useEffect, useState } from 'react'
import Comment from "./Comment";

function Post() {

  const [posts ,setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [showHeart, setShowHeart] = useState({});

  useEffect(()=>{

      getPosts();

  },[]);

    const handleLike = (id) => {
      setLikedPosts(prev => ({
          ...prev,
          [id]: !prev[id]
      }));
    }
    const handleSave = (id) => {
      setSavedPosts(prev => ({
          ...prev,
          [id]: !prev[id]
      }))
    }
    const handleDoubleClick = (id) => {
      if(!likedPosts[id]){
          setLikedPosts(prev => ({
              ...prev,
              [id]: true
          }));
      }
      setShowHeart(prev => ({
          ...prev,
          [id]: true
      }));
      setTimeout(() => {
          setShowHeart(prev => ({
              ...prev,
              [id]: false
          }));
      },700);
    }

    const getPosts = () => {
    fetch("https://instagram-backend-vtkk.onrender.com/posts")
    .then(res=>res.json())
    .then(data=>setPosts(data));
}

  return (
    
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className='my-3' key={post.id}>
                  <div className="d-flex align-items-center mb-2">
                    <img className="rounded-circle dp" src={post.user.profile_pic} alt="Profile Picture" />
                    <h5 className="mb-0">{post.user.username}</h5>
                  </div>
                  <div className="post-card">
                    <div className="image-container">
                        <img
                            className="image"
                            src={post.image}
                            alt="post"
                            onDoubleClick={() => handleDoubleClick(post.id)}
                        />
                        {showHeart[post.id] && (
                            <i className="bi bi-heart-fill heart-animation"></i>
                        )}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                  <i
                      className={
                          likedPosts[post.id]
                          ? "bi bi-heart-fill text-danger fs-4 me-3"
                          : "bi bi-heart fs-4 me-3"
                      }
                      onClick={() => handleLike(post.id)}
                      style={{cursor:"pointer"}}
                  ></i>
                  <i className="bi bi-chat fs-4 me-3"></i>
                  <i className="bi bi-send fs-4"></i>
                  <i
                      className={
                          savedPosts[post.id]
                          ? "bi bi-bookmark-fill fs-4 ms-auto"
                          : "bi bi-bookmark fs-4 ms-auto"
                      }
                      onClick={() => handleSave(post.id)}
                      style={{cursor:"pointer"}}
                  ></i>
                  </div>
                  <div> 
                    <b>{likedPosts[post.id] ? post.likes + 1:post.likes}Likes</b>
                  </div>
                    <Comment post={post}refresh={getPosts}/>
            </div>
          ))}
        </div>
      ):(
        <div>
          Loading Posts
        </div>
      )}
    </div>
  )
}

export default Post 