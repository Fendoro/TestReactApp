import { connect } from "react-redux";
import CommentBoxComponent from "../components/comment_box";
import * as actions from "../actions";

class CommentBox extends CommentBoxComponent{
    handleSubmit(event){
        this.props.saveComment(this.state.comment);
        super.handleSubmit(event);
    }
}

export default connect(null, actions)(CommentBox);