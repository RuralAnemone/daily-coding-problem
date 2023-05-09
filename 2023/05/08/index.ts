/**
 * Given the root to a binary tree, implement serialize(root), which serializes the tree
 * into a string, and deserialize(s), which deserializes the string back into the tree.
 *
 * For example, given the following Node class
 *
 * ```py
 * class Node:
 *     def __init__(self, val, left=None, right=None):
 *         self.val = val
 *         self.left = left
 *         self.right = right
 * ```
 * The following test should pass:
 *
 * ```py
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 * ```
 */
class NodeTest {
	private val: any;
	private left: any;
	private right: any;

	constructor(val: any, left: any, right: any) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}


// I'm going to assume that val, left, and right are the only variables becauise I can't think of any other good way to do this

function serialize(root: NodeTest): string {
	return JSON.stringify(root);
}

type Data = {
	val: any,
	left: any,
	right: any,
}

function deserialize(s: string): NodeTest {
	const deserialized: Data = JSON.parse(s);
	return new NodeTest(deserialized.val, deserialized.left, deserialized.right);
}

console.log(serialize(new NodeTest("val", "left", "right")));