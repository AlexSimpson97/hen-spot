import { useState } from "react";
import { USERTEXT_MAX_CHARACTERS } from "../../lib/constants";

export default function PostForm({ handleSubmitPost }: { handleSubmitPost: (post: string) => void }) {
    const [userText, setUserText] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
    const charNum =  USERTEXT_MAX_CHARACTERS - userText.length;

    function handleUserInput(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const updatedText : string = event.target.value;
        userText.length < USERTEXT_MAX_CHARACTERS ? setUserText(updatedText) : setUserText((currentText) => (currentText.slice(0, -1)));
        return;
    }

    function handleNewPost(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(userText.includes("- name:") && userText.includes("#")) {
            setShowValidIndicator(true);
            setTimeout(() => setShowValidIndicator(false), 2000);
        } else {
            setShowInvalidIndicator(true);
            setTimeout(() => setShowInvalidIndicator(false), 2000);
        }

        handleSubmitPost(userText);
        setUserText("");
    }

    return (
        <form className={`form ${showValidIndicator ? "form--valid" : ""} ${showInvalidIndicator ? "form--invalid" : ""}`} onSubmit={(event) => (handleNewPost(event))} >
            <textarea
                value={userText}
                onChange={handleUserInput}
                placeholder=""
                id={`post-textarea`}
                spellCheck={false}
            />
            <label htmlFor={`post-textarea`}>
                <p>What's going on in the yard?</p>
                <p>Remember to <span className={`u-bold`} >#hashtag</span> your topic and end your post with <span className={`u-bold`} >- name:FirstName</span>.</p>
            </label>
            <div>
                <p className={`u-italic`}>{charNum}</p>
                <button type="submit">
                    <span>Submit</span>
                </button>
            </div>
        </form>
    );
}


// onSubmit={handleSubmitPost}