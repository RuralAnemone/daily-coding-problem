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
		let diffChars: string[] = [s[i]];
		let str: string = "";
		for (let i = 0; diffChars.length <= k; i++) {
			const char = s[i];
			if (diffChars.includes(char)) {
				str += char;
				continue;
			} else {
				diffChars.push(char);
			}
		}
		candidates.push(str);
	}

	return candidates.sort((a, b) => b.length - a.length)[0];
}

export { longestSubstring };