import { TriangleUpIcon, TriangleDownIcon } from "@radix-ui/react-icons";
import { UserPost } from "../../lib/types";
import { useState } from 'react';


export default function FeedbackItem({ initial, topic, content, votes, timeSincePost }: UserPost) {
    const [isOpen, setIsOpen] = useState(false);
    const [voteCount, setVoteCount] = useState(votes);

    function handleUserVote(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setVoteCount((prevCount) => (prevCount + 1));
        event.currentTarget.disabled = true;
        event.stopPropagation();
    }

    return (
        <li onClick={() => (setIsOpen((prev) => (!prev)))} className={`post ${isOpen ?  "post--expand" : ""}`}>
            <button onClick={handleUserVote}>
                <TriangleUpIcon />
                <span>{voteCount}</span>
                <TriangleDownIcon />
            </button>

            <div>
                <p>{initial}</p>
            </div>

            <div>
                <p>{topic}</p>
                <p>{content}</p>
            </div>

            <p>{timeSincePost === 0 ? `NEW` : `${timeSincePost}d`}</p>
        </li>
    );
}


// { initial, topic, content, votes }