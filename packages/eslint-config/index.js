module.exports = {
	extends: [
		'./dist/index.js',
	].map(require.resolve),
};
