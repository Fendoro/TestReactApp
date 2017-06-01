import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/containers/comment_list";

describe("CommentList", () => {
    let component;
    const PROPS = {
        comments: [
            "qwerty",
            "New Comment",
            "Other New Comment"
        ]
    };

    beforeEach(() => {
        component = renderComponent(CommentList, null, PROPS);
    });

    it("shows an LI for each comment", () => {
        expect(component.find("li").length).to.equal(PROPS.comments.length);
    });

    it("shows each comment that is provided", () => {
        PROPS.comments.forEach((comment)=>{
            expect(component).to.contain(comment);
        });
    });
});