export default class Node {
	constructor(value) {
		this.value = value; // Key
		this.prev = null; // Pointer to previous sibling
		this.next = null; // Pointer to next sibling
		this.children = new Beginning(); // Pointer to children list
		// first child is this.children.next
	}
}

/**
 * Avoids if-then-else logic when manipulating child nodes
 */
export class Beginning {
	constructor() {
		this.next = null;
	}
}

// Export class End {
// constructor (prev) {
// this.prev = prev;
// }
// }
