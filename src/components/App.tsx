import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserPost } from "../lib/types";
import HashtagList from "./hashtag/HashtagList";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import { useMemo, useEffect, useState } from "react";

function App() {
    // const [userPosts, setUserPosts] = useState([]);
    const [userPosts, setUserPosts] = useState<UserPost[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selelctedTopic, setSelectedTopic] = useState<string>("");

    const filteredPosts = useMemo(() => selelctedTopic ? userPosts.filter((post) => post.topic === selelctedTopic) : userPosts, [selelctedTopic, userPosts]);

    const topicList = useMemo(() => userPosts.map((post) => post.topic).filter((topic, index, array) => array.indexOf(topic) === index), [userPosts]);

    const  handleSubmitPost = async (post: string) => {
        const splitPost = post.split("#");
        if (splitPost.length > 1) {
            const postTopic = splitPost[1].split(" ")[0];
            const newPost: UserPost = {
                id: new Date().getTime(),
                initial: post?.split("name:")[1]?.trim()?.charAt(0),
                topic: postTopic,
                content: post,
                votes: 0,
                timeSincePost: 0,
            };

            console.log(newPost.initial);

            if (newPost.initial && newPost.initial.length > 0) {
              setUserPosts((prevPosts: UserPost[]) => [newPost, ...prevPosts]);
              // try {
              //   await fetch("https://henshall-spot.vercel.app/api/posts", {
              //     method: "POST",
              //     headers: {
              //       "Content-Type": "application/json",
              //     },
              //     body: JSON.stringify(newPost),
              //   });
              // } catch (error) {
              //   console.error("Failed to send the post to the server:", error);
              // }
            } else {
              toast.error("Please add your name:<FirstName> to the end of your post. 👇🏾");
            }
        } else {
          toast.error("Please include a hashtag in your post. 👇🏾");
        }
    }

    function handleTopicSelect(topic: string) {
        setSelectedTopic((prevTopic) => (prevTopic === topic ? "" : topic));
    }

    useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const res = await fetch("https://henshall-spot.vercel.app/api/posts");
                if (!res.ok) {
                    throw new Error();
                }
                const data = await res.json();
                setUserPosts(data.posts);
                setIsLoading(false);
            } catch (err) {
                setErrorMessage(
                    //network error, server error, or any other error
                    "Something went wrong. Please try again later."
                );
                setIsLoading(false);
            }
        };
        fetchPosts();
        // setIsLoading(true);
        // fetch("https://henshall-spot.vercel.app/api/posts")
        //     .then((res) => {
        //         if (!res.ok) {
        //             throw new Error();
        //         }
        //         return res.json();
        //     })
        //     .then((data) => {
        //         setUserPosts(data.posts);
        //         setIsLoading(false);
        //     })
        //     .catch(() => {
        //         setErrorMessage(
        //             //network error, server error, or any other error
        //             "Something went wrong. Please try again later."
        //         );
        //         setIsLoading(false);
        //     });
    }, []);
  return (
    <div className={`app`} >
      <Footer />

      <Container isLoading={isLoading}  errorMessage={errorMessage} handleSubmitPost={handleSubmitPost} userPosts={filteredPosts} />
      <ToastContainer position="top-center" autoClose={2000} transition={Slide} />

      <HashtagList hashTagList={topicList} handleTopicSelect={handleTopicSelect} />
    </div>
  )
}

export default App
