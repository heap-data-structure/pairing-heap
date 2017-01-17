import { merge } from './merge' ;
import { mergepairs } from './mergepairs' ;
import { decreasekey } from './decreasekey' ;
import { Node } from './Node' ;

export class PairingHeap {

	constructor (compare) {
		this.compare = compare ;
		this.head = null ;
	}

	/**
	 * find-min: simply return the top element of the heap.
	 */
	head () {
		if ( this.head === null ) return undefined;
		return this.head.value;
	}


	headreference () {
		return this.head;
	}

	/**
	 * delete-min: remove the root and merge its subtrees. Various strategies
	 * are employed.
	 */
	pop () {
		if (this.head === null ) return undefined;
		const ref = this.head;
		this.head = mergepairs(this.compare, ref.head);
		return ref.value;
	}

	popreference () {
		if (this.head === null ) return null;
		const ref = this.head;
		this.head = mergepairs(this.compare, ref.head);
		return ref;
	}

	/**
	 * insert: create a new heap for the inserted element and merge into the
	 * original heap.
	 */
	push ( value ) {
		const node = new Node(value) ;
		return this.pushreference(node);
	}

	pushreference ( ref ) {
		this.head = merge( this.compare , this.head , ref ) ;
		return ref;
	}


	merge ( other ) {
		this.pushreference( other.head ) ;
	}


	update ( ref , value ) {

		const d = compare(value, ref.value) ;

		if      ( d < 0 ) this.decreasekey(ref, value) ;
		else if ( d > 0 ) this.increasekey(ref, value) ;
		else              ref.value = value ;

	}

	decreasekey ( ref , value ) {
		this.head = decreasekey( this.head , ref , value ) ;
	}

	/**
	 * increase-key: remove the item at the key to be decreased, replace
	 * the key with a smaller key, then merge the result back into the heap.
	 */
	increasekey ( ref , value ) {

		this.delete(ref);
		ref.value = value;
		ref.prev = null;
		ref.next = null;
		ref.head.next = null ;
		ref.tail = ref.head;

		this.pushreference( ref ) ;
	}

	delete ( ref ) {

		if ( ref === this.head ) return this.pop() ;

		const head = mergepairs(this.compare, ref.head);

		head.prev = ref.prev ;
		head.next = ref.next ;
		head.prev.next = head.next.prev = head ;

	}


}

