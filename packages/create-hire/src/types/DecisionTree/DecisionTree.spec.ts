import chalk from "chalk";
import { createDecisionTree, isDecisionTree } from "./DecisionTree";
import {
	TYPED_DEFAULT_DECISION_TREE,
	invalidDecisionTree,
	validDecisionTree,
} from "./__test__";

describe(chalk`createDecisionTree()`, (): void => {
	describe(chalk`given {grey nothing}`, (): void => {
		it(chalk`should return default project options`, (): void => {
			expect(createDecisionTree()).toEqual(TYPED_DEFAULT_DECISION_TREE);
		});
	});
});

describe(chalk`isDecisionTree()`, (): void => {
	describe(chalk`given {blue createDecisionTree()}`, (): void => {
		it(chalk`should be {magenta true}`, (): void => {
			expect(isDecisionTree(createDecisionTree())).toBe(true);
		});
	});

	describe(chalk`given {green valid} {blue DecisionTree}`, (): void => {
		it(chalk`should be {magenta true}`, (): void => {
			expect(isDecisionTree(validDecisionTree)).toBe(true);
		});
	});

	describe(chalk`given {red invalid} {blue DecisionTree}`, (): void => {
		it(chalk`should be {magenta false}`, (): void => {
			expect(isDecisionTree(invalidDecisionTree)).toBe(false);
		});
	});
});
