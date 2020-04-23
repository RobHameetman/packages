import { DistinctQuestion } from 'inquirer';
import { isInquiryType } from '../../enums';
import { DecisionTree } from '../DecisionTree';

// export interface Inquiry {
//   question: DistinctQuestion;
//   inquire(): Promise<Answers>;
// }

export type Inquiry<
	T extends DistinctQuestion<DecisionTree> = DistinctQuestion<DecisionTree>
> = () => T;

export const isInquiry = (value: unknown): value is Inquiry => {
	return typeof value === 'function' && isInquiryType(value().type);
};
