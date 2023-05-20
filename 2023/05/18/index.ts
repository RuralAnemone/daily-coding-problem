/**
 * This problem was asked by Amazon.
 * 
 * Given an integer k and a string s, find the length of the longest
 * substring that contains at most k distinct characters.
 * 
 * For example, given s = "abcba" and k = 2, the longest substring
 * with k distinct characters is "bcb".
 */
function longestSubstring(k: number, s: string): string {
	let candidates: string[] = [];

	for (let i = 0; i < s.length; i++) {
		let distinctChars = 0;
		let substring = "";

		for (const e of s.slice(i + 1)) {
			if (!substring.includes(e)) distinctChars++;
			if (distinctChars > k) break;
			substring += e;
		}

		candidates.push(substring);
	}

	return candidates.sort((a, b) => b.length - a.length)[0];
}

export { longestSubstring };