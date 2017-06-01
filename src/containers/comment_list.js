import { connect } from "react-redux";
import CommentList from "../components/comment_list";

function MapStateToProps({ comments }) {
    return { comments };
}

export default connect(MapStateToProps)(CommentList);