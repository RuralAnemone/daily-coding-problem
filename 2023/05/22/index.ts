/**
 * This problem was asked by Google.
 * 
 * Suppose we represent our file system by a string in the following manner:
 * 
 * The string "`dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"` represents:
 * 
 * ```python ew
 * dir
 * 	subdir1
 * 	subdir2
 * 		file.ext
 * ```
 * The directory `dir` contains an empty sub-directory `subdir1` and a sub-directory `subdir2` containing a file `file.ext`.
 * 
 * The string `"dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"` represents:
 * 
 * ```python ew
 * dir
 * 	subdir1
 *		 file1.ext
 *		 subsubdir1
 * 	subdir2
 *		 subsubdir2
 *			 file2.ext
 * ```
 * The directory `dir` contains two sub-directories `subdir1` and `subdir2`.
 * `subdir1` contains a file `file1.ext` and an empty second-level sub-directory `subsubdir1`.
 * `subdir2` contains a second-level sub-directory `subsubdir2` containing a file `file2.ext`.
 * 
 * We are interested in finding the longest (number of characters) absolute path to a file within our file system.
 * For example, in the second example above, the longest absolute path is `"dir/subdir2/subsubdir2/file2.ext"`, and
 * its length is 32 (not including the double quotes).
 * 
 * Given a string representing the file system in the above format, return the length of the
 * longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.
 * 
 * Note:
 * 
 * The name of a file contains at least a period and an extension.
 * 
 * The name of a directory or sub-directory will not contain a period.
 */

class Tree {
	#children: Tree[];
	#value: any;

	constructor(value?: any, children?: Tree[]) {
		this.#value = value;
		this.#children = children ?? [];
	}

	public get children(): Tree[] {
		return this.#children;
	}

	public set children(children: Tree[]) {
		this.#children = children;
	}

	public get value(): any {
		return this.#value;
	}

	public set value(value: any) {
		this.#value = value;
	}
}

/**
 * rough idea:
 * - split on \n
 * - count depth via tabs
 * - if depth ever decreases, pop off stack
 * - if depth increases, push onto stack
 * 
 * yeah
 * something like that
 * 
 * @param dirString directory string formatted in nasty python style
 * @returns a tree representing the directory structure
 */
function buildPath(dirString: string): Tree {
	const dirArray = dirString.split('\n');
	const root = new Tree(dirArray[0]);
	const stack = [root];
	let depth = 0;
	for (let i = 1; i < dirArray.length; i++) {
		const currentDir = dirArray[i];
		const currentDepth = currentDir.split('\t').length - 1;
		const currentNode = new Tree(currentDir);
		// man I really want to do the recursive
		// ugh
		// anyways depth check
		if (currentDepth > depth) {
			// push onto stack
			stack.push(currentNode);
		} else if (currentDepth < depth) {
			// pop off stack
			stack.pop();
		}
		// add to parent
		stack[stack.length - 1].children.push(currentNode);
		// update depth
		depth = currentDepth;
	}

	return root;
}

/**
 * 
 * @param dirString directory string formatted in nasty python style
 * @returns the longest pathname in that directory structure
 */
function longestPath(dirString: string): string {
	const tree = buildPath(dirString);
	let longestPath = '';
	let longestLength = 0;
	const stack = [tree];
	while (stack.length > 0) {
		const currentNode = stack.pop();
		const currentPath = currentNode?.value;
		const currentLength = currentPath.length;
		if (currentLength > longestLength) {
			longestPath = currentPath;
			longestLength = currentLength;
		}
		currentNode && stack.push(...currentNode.children);
		// "succinct and readable if statement"
	}
	return longestPath;
}

export { longestPath, Tree };