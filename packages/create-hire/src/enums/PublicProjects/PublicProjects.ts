import chalk from 'chalk';

export enum PublicProjects {
	MicroFe = (chalk`{magenta.bold @micro-fe} - A powerful set of NPM initializers for micro-frontend architectures` as unknown) as PublicProjects,
	Packages = (chalk`{magenta.bold @rob.hameetman} - An open fleet of personal NPM packages (including this script)` as unknown) as PublicProjects,
	ShadowUI = (chalk`{magenta.bold ShadowUI} - A robust and modern library of 100+ Web Components with Storybook` as unknown) as PublicProjects,
}
