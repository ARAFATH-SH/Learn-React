export default function Post({post}){
    const {userId, id, title, body} = post;
    return(
        <div className="card">
            <h3>User ID: {userId}</h3>
            <h3>ID: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Body: {body}</h3>

        </div>
    )
}