import merge from './merge' ;
import mergepairs from './mergepairs' ;
import decreasekey from './decreasekey' ;
import Node from './Node' ;

export default class PairingHeap {

	constructor (compare) {
		this.compare = compare ;
		this.min = null ;
	}

	/**
	 * find-min: simply return the top element of the heap.
	 */
	head () {
		if ( this.min === null ) return undefined;
		return this.min.value;
	}


	headreference () {
		return this.min;
	}

	/**
	 * delete-min: remove the root and merge its subtrees. Various strategies
	 * are employed.
	 */
	pop () {
		if (this.min === null ) return undefined;
		const min = this.min;
		this.min = mergepairs(this.compare, min.children);
		return min.value;
	}

	popreference () {
		if (this.min === null ) return null;
		const min = this.min;
		this.min = mergepairs(this.compare, min.children);
		return min;
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
		this.min = merge( this.compare , this.min , ref ) ;
		return ref;
	}


	merge ( other ) {
		this.pushreference( other.min ) ;
	}


	update ( ref , value ) {

		const d = this.compare(value, ref.value) ;

		if      ( d < 0 ) this.decreasekey(ref, value) ;
		else if ( d > 0 ) this.increasekey(ref, value) ;
		else              ref.value = value ;

	}

	decreasekey ( ref , value ) {
		this.min = decreasekey( this.compare , this.min , ref , value ) ;
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
		ref.children.next = null ;
		ref.lastchild = ref.children ;

		this.pushreference( ref ) ;
	}

	delete ( ref ) {

		if ( ref === this.min ) return this.pop() ;

		const successor = mergepairs(this.compare, ref.children);

		successor.prev = ref.prev ;
		successor.next = ref.next ;
		successor.prev.next = successor.next.prev = successor ;

	}


}

