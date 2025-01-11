import { PostListPropsType } from "./types";
import { Post as PostType } from "./types";
import EditPostForm from "./EditPostForm";
import Post from "./Post";

export default function PostsList (props: PostListPropsType) {
    return (
    <>
        {props.posts.map((post: PostType, postIndex: number) => 
              props.editPostFormOpen && post.id === props.editingPostId 
              ? <EditPostForm key={post.id} post={post} posts={props.posts} editingPostIndex={props.editingPostIndex} 
              setEditPostFormOpen={props.setEditPostFormOpen} setPosts={props.setPosts} /> 
              : <Post key={post.id} post={post} posts={props.posts} postIndex={postIndex} setEditingPostId={props.setEditingPostId} 
              setEditingPostIndex={props.setEditingPostIndex} setEditPostFormOpen={props.setEditPostFormOpen} 
              setPosts={props.setPosts} clearPosts={props.clearPosts}/>
              )}
    </>
    )
}