/**
 * The area of a circle is defined as $$\pi r^2$$. Estimate $$\pi$$ to 3 decimal places using a Monte Carlo method.
 *
 * Hint: The basic equation of a circle is $$x^2 + y^2 = r^2$$.
 *
 * ---
 *
 * @link see https://www.desmos.com/calculator/slzffm0nn6
 */
function monteCarloPi(iterations: number): number {
	let pointsInCircle = 0;
	for (let i = 0; i < iterations; i++) {
		const x = Math.random();
		const y = Math.random();
		if ((x - 1/2) ** 2 + (y - 1/2) ** 2 < (1/2) ** 2) {
			pointsInCircle++;
		}
	}

	return pointsInCircle / iterations;
}

export { monteCarloPi };