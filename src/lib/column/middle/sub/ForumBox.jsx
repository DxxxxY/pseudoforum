import ForumPost from "./ForumPost.jsx"

function ForumBox({ posts, deletePost }) {
    return (
        <fieldset id="forum-box">
            <legend>Forum Posts</legend>
            {
                posts.length > 0 && posts.map((post, i) => {
                    return (<ForumPost key={i} post={post} deletePost={deletePost} />)
                })
            }
        </fieldset>
    )
}

export default ForumBox