import { useRouter } from 'next/router';
import React from 'react';

const CommentDetails = () => {

    const router = useRouter()

    const {blogId, commentId} = router.query;

    console.log('Blog Id', blogId, 'Comment Id', commentId)
    return (
        <div>
            <h1>{commentId} Comment for blog {blogId}</h1>
        </div>
    );
};

export default CommentDetails;