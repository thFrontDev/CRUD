import { PostPropType } from "./types";
import React from "react";

const Post = React.memo((props: PostPropType) => {
    const deletePost = (postIdToDelte: string) => {
        if (props.posts.length === 1) {
            props.clearPosts();
            return;
        }
        const newPosts = [...props.posts].filter((post) => post.id !== postIdToDelte);
        props.setPosts(newPosts);
    }
    return (
    <>
    {props.post &&
    <article className="post">
        <section className="actions-and-title-container">
            <h3 className="post-title">{props.post.title}</h3>
            <section className="actions">
                <button className="action" onClick={() => {
                        props.setEditingPostId(props.post.id);
                        props.setEditPostFormOpen(true);
                        props.setEditingPostIndex(props.postIndex);
                }}><img className="btn-svg" src="./edit-3-svgrepo-com.svg" alt="edit-btn"></img></button>
                <button className="action" onClick={() => deletePost(props.post.id)}><img className="btn-svg" src="./delete-2-svgrepo-com.svg" alt="delete-btn"></img></button></section>
        </section>
        <section className="post-credentials-container">
            <div className="post-author-container">
                <p className="post-author">By: {props.post.author}</p>
            </div>
        <p className="post-date">{props.post.edited? "Edited at:" : "Posted at:"} {props.post.createDate}</p>
        </section>
        <section className="post-content-container">
            <p className="post-content">{props.post.content}</p>
        </section>
    </article>
}</>
    );
})
export default Post;