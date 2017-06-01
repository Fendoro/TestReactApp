import { expect } from "../test_helper";
import CommentsReducer from "../../src/reducers/comments";
import { SAVE_COMMENT } from "../../src/actions/types";

describe("Comments Reducer", () => {
    it("handles action with unknown type", () => {
        expect(CommentsReducer(undefined, {})).to.eql([]);
    });

    it("handles action of type SAVE_COMMENT", () => {
        const comment = "new comment";
        const action = {
            type: SAVE_COMMENT,
            payload: comment
        };
        expect(CommentsReducer([], action)).to.eql([comment]);
    });
});