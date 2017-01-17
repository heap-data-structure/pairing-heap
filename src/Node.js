
export class FakeNode {
	constructor () {
		this.next = null;
	}
}

export class Node {

	constructor ( value ) {
		this.value = value ;
		this.prev = null;
		this.next = null;
		this.head = this.tail = new FakeNode();
	}

}
