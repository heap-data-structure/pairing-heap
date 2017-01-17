
export class FakeNode {
	constructor () {
		this.next = null;
	}
}

export default class Node {

	constructor ( value ) {
		this.value = value ;
		this.prev = null;
		this.next = null;
		this.children = new FakeNode();
		this.lastchild = this.children;
	}

}
