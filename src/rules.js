import commaDangleSingle from './rules/comma-dangle-single.js';
import importLineLength from './rules/import-line-length.js';
import symmetricNewlines from './rules/symmetric-newlines.js';

export default {
	rules: {
		'symmetric-newlines': symmetricNewlines,
		'comma-dangle-single': commaDangleSingle,
		'import-line-length': importLineLength,
	}
};
