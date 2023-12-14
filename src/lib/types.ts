export type UserPost = {
    id: number;
    initial: string;
    topic: string;
    content: string;
    votes: number;
    timeSincePost: number,
};

export type UserPosts = UserPosts[];