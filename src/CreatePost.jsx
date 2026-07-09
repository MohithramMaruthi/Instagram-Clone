import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const navigate = useNavigate();

    const [image, setImage] = useState("");
    const [caption, setCaption] = useState("");

    const handleUpload = async () => {
        if (image === "" || caption === "") {
            alert("Fill all fields");
            return;
        }

        const post = {
            user: {
                username: "mohith",
                "profile_pic" : "/images/profile.jpg"
            },
            image: image,
            caption: caption,
            likes: 0,
            comments: []
        };

        await axios.post(
            "https://instagram-backend-vtkk.onrender.com/posts",
            post
        );

        alert("Post Uploaded");
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Create Post</h2>

            <input
                className="form-control my-3"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

            {image!=="" && <img src={image}className="preview"alt="preview"/>}

            <textarea
                className="form-control my-3"
                rows="5"
                placeholder="Caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={handleUpload}
            >
                Share
            </button>
        </div>
    );
}

export default CreatePost;