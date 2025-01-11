import { useCallback, useEffect, useState } from 'react';
import './App.css';
import CreatePostForm from './components/CreatePostForm';
import { Post as PostType } from './components/types';
import PostsList from './components/PostsList';
function App() {
  const [ posts, setPosts ] = useState<PostType[]>([]);
  const [ postsChangedOnFirstLoad, setPostsChangedOnFirstLoad ] = useState<boolean>(false);
  const [ editingPostId, setEditingPostId ] = useState<string | null>(null);
  const [ editingPostIndex, setEditingPostIndex ] = useState<number | null>(null);
  const [ createPostFormIsOpen, setPostFormIsOpen ] = useState<boolean>(false);
  const [ editPostFormOpen, setEditPostFormOpen ] = useState<boolean>(false);

  const clearPosts = useCallback(() => {
    setPosts([]);
    localStorage.removeItem("crud-posts");
  }, []);
  useEffect(() => {
    const existingPosts = localStorage.getItem("crud-posts");
    if (existingPosts) {
      setPosts(JSON.parse(existingPosts));
    }
    setPostsChangedOnFirstLoad(true);
  }, []);

  useEffect(() => {
    if (postsChangedOnFirstLoad && posts.length > 0) {
      const stringifiedPosts = JSON.stringify(posts);
      localStorage.setItem("crud-posts", stringifiedPosts);
    }
  }, [posts, postsChangedOnFirstLoad]);
  
  return (
    <>
    <div className='
news-feed'>
      <div className='page-header-container'>
        <h1 className='page-header'>CRUD with local storage</h1>
        <h1 className='page-header'>Manage your news feed easily</h1>
      </div>
      {posts.length > 1 && <button className='kill-posts-btn' onClick={() => clearPosts()}>Delete all posts<img className="btn-svg-kill-posts" src="./cross-svgrepo-com.svg" alt="delete all posts"></img></button>}
      {createPostFormIsOpen && <CreatePostForm setPostFormIsOpen={setPostFormIsOpen} posts={posts} setPosts={setPosts}/>}
      {!createPostFormIsOpen &&
      <div className='create-new-post-btn-container'>
        <button className='create-new-post-btn' onClick={() => setPostFormIsOpen(true)}>Create a new post<img className='create-new-post-btn-img' src='./file-new-svgrepo-com.svg' alt='create-new-post-btn'></img></button>
      </div>
      }
      <PostsList posts={posts} editingPostIndex={editingPostIndex} 
      editPostFormOpen={editPostFormOpen} editingPostId={editingPostId} 
      setEditPostFormOpen={setEditPostFormOpen} setPosts={setPosts} 
      setEditingPostId={setEditingPostId} setEditingPostIndex={setEditingPostIndex} 
      clearPosts={clearPosts} />
    </div>
    </>
  )
}

export default App;
