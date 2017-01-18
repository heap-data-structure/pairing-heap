
export default class Node {

	constructor ( value ) {
		this.value = value; // key
		this.prev = null;   // pointer to previous sibling
		this.next = null;   // pointer to next sibling
		this.children = new Beginning(); // pointer to children list
		                                // first child is this.children.next
	}

}

/**
 * Avoids if-then-else logic when manipulating child nodes
 */
export class Beginning {
	constructor () {
		this.next = null;
	}
}

//export class End {
	//constructor (prev) {
		//this.prev = prev;
	//}
//}
