try {
	module.exports = require('./bin/plugin.min.js');
} catch (e) {
	console.error(e);
	process.exit(1);
}
