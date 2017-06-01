import React from "react";

const CommentList = (props) => {
    const list = props.comments.map((comment) => {
        return (
            <li key={comment}>
                {comment}
            </li>
        );
    });
    return (
        <ul className="comment-list">
            {list}
        </ul>
    );
};

export default CommentList;