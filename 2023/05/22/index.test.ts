import 'jest'
import { longestPath, Tree } from '.'

describe('given test(s)', () => {
	test('"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext" => 32', () => {
		const INPUT = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
		const EXPECTED = 32;
		expect(longestPath(INPUT)).toBe(EXPECTED);
	})
})