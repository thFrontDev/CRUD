import { useForm, SubmitHandler } from "react-hook-form";
import { CreatePostFormPropsType, Post } from "./types";
import getCurrentFormatedDate from "../helpers/getDate";

export default function CreatePostForm (props: CreatePostFormPropsType) {
    const {
        register,
        handleSubmit,
        formState: { isValid },
      } = useForm<Post>({
        mode: 'onChange',
        defaultValues: {
            id: "",
            createDate: "",
            author: "",
            title: "",
            content: "",
            edited: false
        },
      });
    const onSubmit: SubmitHandler<Post> = (data) => {
        const newPosts = [...props.posts];
        const currentDate = getCurrentFormatedDate();
        const postId = Date.now().toString();
        const newPost = {...data, id: postId, createDate: currentDate};
        newPosts.push(newPost);
        props.setPosts(newPosts);
        props.setPostFormIsOpen(false);
    }
    return (
    <>
        <section className="create-post-form">
            <div className="controls-container">
                <button className="cancel-create-btn" onClick={() => {props.setPostFormIsOpen(false)}}>Cancel post creation<img className="btn-svg" src="./cross-svgrepo-com.svg"></img></button>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <section className="form-post-input">
                    <p className="form-section-name">Title:</p>
                    <textarea className="title-input" cols={40} rows={5} {...register('title', {
                        required: true,
                    })}></textarea>
                </section>
                <section className="form-post-input">
                    <p className="form-section-name">Author:</p>
                    <textarea className="author-input" cols={40} rows={2} {...register('author', {
                        required: true,
                    })}></textarea>
                </section>
                <section className="form-post-input">
                    <p className="form-section-name">Content:</p>
                    <textarea className="content-input" cols={40} rows={10} {...register('content', {
                        required: true,
                    })}></textarea>
                </section>
                <div className="create-post-form-btn-container"><button className="create-post-form-btn" disabled={!isValid} type="submit">Create post</button></div>
            </form>
        </section>
    </>
    )
}