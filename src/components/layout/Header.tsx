import Logo from "../Logo";
import PageHeading from "../PageHeading";
import PostForm from "../posts/PostForm";
// import Pattern from "../Pattern";



export default function Header({ handleSubmitPost }: { handleSubmitPost: (post: string) => void }) {
    return (
        <header>
            {/* <Pattern /> */}
            <Logo />
            <PageHeading />
            <PostForm handleSubmitPost={handleSubmitPost} />
        </header>
    )
}

