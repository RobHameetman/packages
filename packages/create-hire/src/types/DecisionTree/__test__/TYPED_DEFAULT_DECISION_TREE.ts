import { DEFAULT_DECISION_TREE } from "../DecisionTree";

export const TYPED_DEFAULT_DECISION_TREE = Object.freeze({
	...DEFAULT_DECISION_TREE,
	["__type"]: "DecisionTree",
});
