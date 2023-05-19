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
	// yeah this is just standard string manipulation x sliding window
	let longest = '';
	let current = '';
	let distinct = 0;
	let i = 0;
	let j = 0;
	while (j < s.length) {
		if (distinct <= k) {
			if (current.indexOf(s[j]) === -1) {
				distinct++;
			}
			current += s[j];
			j++;
		} else {
			if (current.length > longest.length) {
				longest = current;
			}
			current = '';
			distinct = 0;
			i++;
			j = i;
		}
	}
	if (current.length > longest.length) {
		longest = current;
	}
	return longest;
}

export { longestSubstring };