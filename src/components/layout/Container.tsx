import Spinner from "../Spinner";
import PostList from "../posts/PostList";
import Header from "./Header";
import ErrorMessage from "../ErrorMessage";
import { UserPost } from "../../lib/types";

export default function Container({ isLoading, errorMessage, handleSubmitPost, userPosts}: { isLoading: boolean, errorMessage: string, handleSubmitPost: (post: string) => void, userPosts: UserPost[] }) {


    return (
        <main className="container">
            {isLoading && <Spinner />}
            {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
            <Header handleSubmitPost={handleSubmitPost} />
            <PostList userPosts={userPosts} />
        </main>
    );
}
