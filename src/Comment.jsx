import React, { useState } from "react";
import axios from "axios";

function Comment({ post, refresh }) {
    const [text, setText] = useState("");

    const addComment = async () => {
        if (text.trim() === "") return;
        const updatedPost = {
            ...post,
            comments: [
                ...post.comments,
                {
                    id: Date.now(),
                    username: "You",
                    text: text
                }
            ]
        };
        await axios.put(
            `https://instagram-backend-vtkk.onrender.com/posts/${post.id}`,
            updatedPost
        );
        setText("");
        refresh();
    };

    const deleteComment = async (id) => {
        const updatedPost = {
            ...post,
            comments: post.comments.filter(c => c.id !== id)
        };
        await axios.put(
            `https://instagram-backend-vtkk.onrender.com/posts/${post.id}`,
            updatedPost
        );
        refresh();
    };

    return (
        <div>
            <p>
                <b>{post.comments.length}</b> comments
            </p>
            {post.comments.map(comment => (
                <div
                    key={comment.id}
                    className="d-flex mb-2"
                >
                    <div>
                        <b>{comment.username}</b> {comment.text}
                    </div>

                    <button
                        className="btn btn-sm btn-danger ms-auto"
                        onClick={() => deleteComment(comment.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            <div className="d-flex mt-2">
                <input
                    className="form-control"
                    value={text}
                    placeholder="Add a comment..."
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    className="btn btn-primary ms-2"
                    onClick={addComment}
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default Comment;