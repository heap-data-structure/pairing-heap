import merge from './merge' ;
import mergepairs from './mergepairs' ;
import decreasekey from './decreasekey' ;
import Node from './Node' ;

export default class PairingHeap {

	constructor (compare) {
		this.compare = compare ; // comparison function
		this.min = null ;        // root node, must have .prev = .next = null at all times
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
		const min = this.popreference();
		return min === null ? undefined : min.value ;
	}

	/**
	 * min.prev and min.next get reset to null
	 * min.children.next = null
	 */
	popreference () {
		if (this.min === null ) return null;
		const min = this.min;
		this.min = mergepairs(this.compare, min.children);
		min.prev = null;
		min.next = null;
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

	/**
	 * /!\ ref.next = ref.prev = null
	 * which means all references that get out of the tree must reset .next and
	 * .prev and one must not call PairingHeap#pushreference with a reference
	 * from inside this tree or another, except the root of another tree.
	 */
	pushreference ( ref ) {
		this.min = merge( this.compare , this.min , ref ) ;
		return ref;
	}


	/**
	 * We can call pushreference since other.min.next = other.min.prev = null.
	 */
	merge ( other ) {
		this.pushreference( other.min ) ;
	}


	update ( ref , value ) {

		const d = this.compare(value, ref.value) ;

		if      ( d < 0 ) this.decreasekey(ref, value) ;
		else if ( d > 0 ) this.increasekey(ref, value) ;
		else              ref.value = value ;

	}

	/**
	 * ref must be internal
	 *
	 */
	decreasekey ( ref , value ) {
		if (ref === this.min) ref.value = value ;
		else this.min = decreasekey( this.compare , this.min , ref , value ) ;
	}

	/**
	 * increase-key: remove the item at the key to be decreased, replace
	 * the key with a smaller key, then merge the result back into the heap.
	 *
	 * ref must be internal
	 *
	 */
	increasekey ( ref , value ) {

		this.delete(ref);

		ref.value = value;

		this.pushreference( ref ) ;

	}

	/**
	 * ref must be internal
	 * ref.prev and ref.next get reset to null
	 * ref.children.next = null
	 */
	delete ( ref ) {

		if ( ref === this.min ) {
			this.pop() ;
			return ;
		}

		const successor = mergepairs(this.compare, ref.children);

		// ref might be a leaf node
		if (successor === null) {
			ref.prev = null;
			ref.next = null;
			return;
		}

		successor.prev = ref.prev ; // must be !== null because of FakeNode
		successor.next = ref.next ;
		successor.prev.next = successor ;
		if (successor.next !== null) successor.next.prev = successor ;

		ref.prev = null;
		ref.next = null;

	}


}

