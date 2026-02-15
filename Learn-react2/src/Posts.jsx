import Post from './Post';
import { use } from 'react';
export default function Posts({postPromise}){
    const posts = use(postPromise);
    console.log(posts);
    return(
        <div className="card">
            <h1>Posts: {posts.length}</h1>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)

            }
        </div>
    )
}