export default function HashtagList({
    hashTagList, handleTopicSelect
}: {
    hashTagList: string[], handleTopicSelect: (topic: string) => void;
}) {
    return (
        <ul className={`hashtags`}>
            {hashTagList.map((hashTag) => (
                <li key={hashTag} >
                    <button onClick={() => (handleTopicSelect(hashTag))} >#{hashTag}</button>
                </li>
            ))}
        </ul>
    );
}
