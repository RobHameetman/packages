import { createPromptModule } from 'inquirer';

export const nativePrompts = Object.keys(createPromptModule().prompts);
