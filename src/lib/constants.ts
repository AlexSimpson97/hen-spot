export const USERTEXT_MAX_CHARACTERS: number = 280;

type userPost = {
    id: number;
    initial: string;
    topic: string;
    content: string;
    votes: number;
    timeSincePost: string,
};

export const initialPosts: userPost[] = [
    {
        id: 1,
        initial: `T`,
        topic: `Kitchen Sink`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, quam iusto ab suscipit fugiat`,
        votes: 626,
        timeSincePost: `1d`
    },
    {
        id: 2,
        initial: `C`,
        topic: `Lights`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, quam iusto ab suscipit fugiat`,
        votes: 747,
        timeSincePost: `1d`
    },
    {
        id: 3,
        initial: `K`,
        topic: `Bathroom`,
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, quam iusto ab suscipit fugiat`,
        votes: 911,
        timeSincePost: `1d`
    },
];
