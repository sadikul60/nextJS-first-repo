import { useRouter } from "next/router";



const BlogDetails = () => {

    const router = useRouter();
    const blog = router.query.blogId;

    console.log(blog);

    return (
        <>
        <div>
            <h1>This is blog page id no: {blog}</h1>
            <h1>This is blog page id no: {blog}</h1>
            <h1>This is blog page id no: {blog}</h1>
        </div>
        </>
    );
};

export default BlogDetails;