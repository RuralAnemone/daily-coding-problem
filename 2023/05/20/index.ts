/** This problem was asked by Facebook.
 * 
 * Given a stream of elements too large to store in memory,
 * pick a random element from the stream with uniform probability.
 */
function getRandomElement<T>(stream: T[]): T {
	let randomElement: T = stream[stream.length - 1];
	for (let i = 0; i < stream.length; i++) {
		if (Math.random() < 1 / (i + 1)) {
			randomElement = stream[i];
		}
	}

	return randomElement ?? stream[stream.length - 1];
}

export { getRandomElement };