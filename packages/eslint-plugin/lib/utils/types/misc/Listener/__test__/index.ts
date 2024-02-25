import { faker } from '@faker-js/faker';
import { fakeArrayExpressionListener } from './fakeArrayExpressionListener';
import { fakeArrayPatternListener } from './fakeArrayPatternListener';
import { fakeArrowFunctionExpressionListener } from './fakeArrowFunctionExpressionListener';
import { fakeAssignmentExpressionListener } from './fakeAssignmentExpressionListener';
import { fakeAssignmentPatternListener } from './fakeAssignmentPatternListener';
import { fakeAwaitExpressionListener } from './fakeAwaitExpressionListener';
import { fakeBinaryExpressionListener } from './fakeBinaryExpressionListener';
import { fakeBlockStatementListener } from './fakeBlockStatementListener';
import { fakeBreakStatementListener } from './fakeBreakStatementListener';
import { fakeCallExpressionListener } from './fakeCallExpressionListener';
import { fakeCatchClauseListener } from './fakeCatchClauseListener';
import { fakeChainExpressionListener } from './fakeChainExpressionListener';
import { fakeClassBodyListener } from './fakeClassBodyListener';
import { fakeClassDeclarationListener } from './fakeClassDeclarationListener';
import { fakeClassExpressionListener } from './fakeClassExpressionListener';
import { fakeConditionalExpressionListener } from './fakeConditionalExpressionListener';
import { fakeContinueStatementListener } from './fakeContinueStatementListener';
import { fakeDebuggerStatementListener } from './fakeDebuggerStatementListener';
import { fakeDoWhileStatementListener } from './fakeDoWhileStatementListener';
import { fakeEmptyStatementListener } from './fakeEmptyStatementListener';
import { fakeExportAllDeclarationListener } from './fakeExportAllDeclarationListener';
import { fakeExportDefaultDeclarationListener } from './fakeExportDefaultDeclarationListener';
import { fakeExportNamedDeclarationListener } from './fakeExportNamedDeclarationListener';
import { fakeExportSpecifierListener } from './fakeExportSpecifierListener';
import { fakeExpressionStatementListener } from './fakeExpressionStatementListener';
import { fakeForInStatementListener } from './fakeForInStatementListener';
import { fakeForOfStatementListener } from './fakeForOfStatementListener';
import { fakeForStatementListener } from './fakeForStatementListener';
import { fakeFunctionDeclarationListener } from './fakeFunctionDeclarationListener';
import { fakeFunctionExpressionListener } from './fakeFunctionExpressionListener';
import { fakeIdentifierListener } from './fakeIdentifierListener';
import { fakeIfStatementListener } from './fakeIfStatementListener';
import { fakeImportDeclarationListener } from './fakeImportDeclarationListener';
import { fakeImportDefaultSpecifierListener } from './fakeImportDefaultSpecifierListener';
import { fakeImportExpressionListener } from './fakeImportExpressionListener';
import { fakeImportNamespaceSpecifierListener } from './fakeImportNamespaceSpecifierListener';
import { fakeImportSpecifierListener } from './fakeImportSpecifierListener';
import { fakeLabeledStatementListener } from './fakeLabeledStatementListener';
import { fakeLiteralListener } from './fakeLiteralListener';
import { fakeLogicalExpressionListener } from './fakeLogicalExpressionListener';
import { fakeMemberExpressionListener } from './fakeMemberExpressionListener';
import { fakeMetaPropertyListener } from './fakeMetaPropertyListener';
import { fakeMethodDefinitionListener } from './fakeMethodDefinitionListener';
import { fakeNewExpressionListener } from './fakeNewExpressionListener';
import { fakeObjectExpressionListener } from './fakeObjectExpressionListener';
import { fakeObjectPatternListener } from './fakeObjectPatternListener';
import { fakeProgramListener } from './fakeProgramListener';
import { fakePropertyListener } from './fakePropertyListener';
import { fakeRestElementListener } from './fakeRestElementListener';
import { fakeReturnStatementListener } from './fakeReturnStatementListener';
import { fakeSequenceExpressionListener } from './fakeSequenceExpressionListener';
import { fakeSpreadElementListener } from './fakeSpreadElementListener';
import { fakeSuperListener } from './fakeSuperListener';
import { fakeSwitchCaseListener } from './fakeSwitchCaseListener';
import { fakeSwitchStatementListener } from './fakeSwitchStatementListener';
import { fakeTaggedTemplateExpressionListener } from './fakeTaggedTemplateExpressionListener';
import { fakeTemplateElementListener } from './fakeTemplateElementListener';
import { fakeTemplateLiteralListener } from './fakeTemplateLiteralListener';
import { fakeThisExpressionListener } from './fakeThisExpressionListener';
import { fakeThrowStatementListener } from './fakeThrowStatementListener';
import { fakeTryStatementListener } from './fakeTryStatementListener';
import { fakeUnaryExpressionListener } from './fakeUnaryExpressionListener';
import { fakeUpdateExpressionListener } from './fakeUpdateExpressionListener';
import { fakeVariableDeclarationListener } from './fakeVariableDeclarationListener';
import { fakeVariableDeclaratorListener } from './fakeVariableDeclaratorListener';
import { fakeWhileStatementListener } from './fakeWhileStatementListener';
import { fakeWithStatementListener } from './fakeWithStatementListener';
import { fakeYieldExpressionListener } from './fakeYieldExpressionListener';

export const fakeListener = () => faker.helpers.arrayElement([
	fakeArrayExpressionListener,
	fakeArrayPatternListener,
	fakeArrowFunctionExpressionListener,
	fakeAssignmentExpressionListener,
	fakeAssignmentPatternListener,
	fakeAwaitExpressionListener,
	fakeBinaryExpressionListener,
	fakeBlockStatementListener,
	fakeBreakStatementListener,
	fakeCallExpressionListener,
	fakeCatchClauseListener,
	fakeChainExpressionListener,
	fakeClassBodyListener,
	fakeClassDeclarationListener,
	fakeClassExpressionListener,
	fakeConditionalExpressionListener,
	fakeContinueStatementListener,
	fakeDebuggerStatementListener,
	fakeDoWhileStatementListener,
	fakeEmptyStatementListener,
	fakeExportAllDeclarationListener,
	fakeExportDefaultDeclarationListener,
	fakeExportNamedDeclarationListener,
	fakeExportSpecifierListener,
	fakeExpressionStatementListener,
	fakeForInStatementListener,
	fakeForOfStatementListener,
	fakeForStatementListener,
	fakeFunctionDeclarationListener,
	fakeFunctionExpressionListener,
	fakeIdentifierListener,
	fakeIfStatementListener,
	fakeImportDeclarationListener,
	fakeImportDefaultSpecifierListener,
	fakeImportExpressionListener,
	fakeImportNamespaceSpecifierListener,
	fakeImportSpecifierListener,
	fakeLabeledStatementListener,
	fakeLiteralListener,
	fakeLogicalExpressionListener,
	fakeMemberExpressionListener,
	fakeMetaPropertyListener,
	fakeMethodDefinitionListener,
	fakeNewExpressionListener,
	fakeObjectExpressionListener,
	fakeObjectPatternListener,
	fakeProgramListener,
	fakePropertyListener,
	fakeRestElementListener,
	fakeReturnStatementListener,
	fakeSequenceExpressionListener,
	fakeSpreadElementListener,
	fakeSuperListener,
	fakeSwitchCaseListener,
	fakeSwitchStatementListener,
	fakeTaggedTemplateExpressionListener,
	fakeTemplateElementListener,
	fakeTemplateLiteralListener,
	fakeThisExpressionListener,
	fakeThrowStatementListener,
	fakeTryStatementListener,
	fakeUnaryExpressionListener,
	fakeUpdateExpressionListener,
	fakeVariableDeclarationListener,
	fakeVariableDeclaratorListener,
	fakeWhileStatementListener,
	fakeWithStatementListener,
	fakeYieldExpressionListener,
])();
