/**
 * Avoids if-then-else logic when manipulating child nodes
 */
export class FakeNode {
	constructor () {
		this.next = null;
	}
}

export default class Node {

	constructor ( value ) {
		this.value = value; // key
		this.prev = null;   // pointer to previous sibling
		this.next = null;   // pointer to next sibling
		this.children = new FakeNode(); // pointer to children list
		                                // first child is this.children.next
		this.lastchild = this.children; // pointer to last child in list
	}

}
