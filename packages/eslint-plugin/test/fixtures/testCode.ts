const noSemicolon = process.env.NODE_ENV === 'test'

const noLinebreaks = () => {
	const thisThing = 'some data';
	const thatThing = 'some more data';
	void console.log();
	return undefined;
};
