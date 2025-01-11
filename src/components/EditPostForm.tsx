import { useForm, SubmitHandler } from "react-hook-form";
import { EditFormPropsType, Post } from "./types";
import { useEffect } from "react";
import getCurrentFormatedDate from "../helpers/getDate";
export default function EditPostForm (props: EditFormPropsType) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid, isDirty },
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
    useEffect(() => reset(props.post), []);
    const onSubmit: SubmitHandler<Post> = (data) => {
       if (props.editingPostIndex !== null) {
        const newPosts = [...props.posts];
        const currentDate = getCurrentFormatedDate();
        const postId = Date.now().toString();
        const newPost = {...data, edited: true, id: postId, createDate: currentDate}
        newPosts[props.editingPostIndex] = newPost;
        props.setPosts(newPosts);
        props.setEditPostFormOpen(false);
       }
    }
    return (
    <>
        <section className="create-post-form edit-post-form">
            <div className="controls-container">
                <button className="cancel-create-btn" onClick={() => {props.setEditPostFormOpen(false)}}>Cancel post editing<img className="btn-svg" src="./cross-svgrepo-com.svg" alt="cancel post edition"></img></button>
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
                <div className="create-post-form-btn-container"><button className="create-post-form-btn" disabled={!isDirty || !isValid} type="submit">Edit post</button></div>
            </form>
        </section>
    </>
    )
}