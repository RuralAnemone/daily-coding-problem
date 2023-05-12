/**
 * An XOR linked list is a more memory efficient doubly linked list.
 * Instead of each node holding `next` and `prev` fields, it holds a field named `both`,
 * which is an XOR of the next node and the previous node.
 * Implement an XOR linked list; it has an `add(element)` which adds the element to the end,
 * and a `get(index)` which returns the node at index.
 *
 * If using a language that has no pointers (such as Python), you can assume you have
 * access to `get_pointer` and `dereference_pointer` functions that converts between
 * nodes and memory addresses.
 */
class XORLinkedList {
	private length: number;
	private stuff: any[];

	constructor(...stuff: any[]) {
		this.length = stuff.length;
		this.stuff = stuff;
	}
	
	add(element: any): void {
		this.stuff.push(element);
		this.length++;
	}

	get(index: number): any {
		return this.stuff[index];
	}

	// just assume the contents can be XORd idk
	getBoth(index: number) {
		if (index < 1 || index > this.stuff.length - 1)
		{
			throw new Error(`${index} is out of the bounds of 1 - ${this.stuff.length - 1}`);
			return null;
		}

		return this.stuff[index - 1] ^ this.stuff[index + 1];
	}
}