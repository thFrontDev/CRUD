export interface Post {
    id: string;
    createDate: string;
    author: string;
    title: string;
    content: string;
    edited: boolean;
}

interface PostActions {
    setEditPostFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    setEditingPostId: React.Dispatch<React.SetStateAction<string | null>>;
    setEditingPostIndex: React.Dispatch<React.SetStateAction<number | null>>;
    clearPosts: () => void;
}

export type PostListPropsType = {
    posts: Post[];  
    editingPostIndex: number | null; 
    editPostFormOpen: boolean;
    editingPostId: string | null;
} & PostActions

export type PostPropType =  {
    post: Post;
    postIndex: number;
    posts: Post[];
} & PostActions



export interface CreatePostFormPropsType {
    setPostFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export interface EditFormPropsType {
    post: Post;
    editingPostIndex: number | null;
    setEditPostFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

