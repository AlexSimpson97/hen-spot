import { UserPost } from "../../lib/types";
import PostItem from "./PostItem";


export default function PostList({ userPosts }: { userPosts: UserPost[] }) {
    // const posts = userPosts;
    return (
        <ol className={`post-list`}>
            {userPosts.map(
                ({ id, initial, topic, content, votes, timeSincePost }) => (
                    <PostItem
                        key={id}
                        initial={initial}
                        topic={topic}
                        content={content}
                        votes={votes}
                        timeSincePost={timeSincePost}
                    />
                )
            )}
        </ol>
    );
}
