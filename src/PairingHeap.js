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
	 */
	popreference () {
		if (this.min === null ) return null;
		const min = this.min;
		this.min = mergepairs(this.compare, min.children); // min.children.next = null
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
	 * /!\ ref.next = ref.prev = null which means all references that are
	 * external to the tree must reset .next and .prev and one must not call
	 * PairingHeap#pushreference with an internal reference from this tree or
	 * another, except the root of another tree.
	 */
	pushreference ( ref ) {
		if (this.min === null) this.min = ref;
		else {
			// this.min != null != ref
			this.min = merge( this.compare , this.min , ref ) ;
		}
		return ref;
	}


	/**
	 * Supposes the same comparison function is used in both trees.
	 * We can call pushreference since other.min.next = other.min.prev = null.
	 */
	merge ( other ) {
		const ref = other.min ;
		if (ref !== null) this.pushreference( ref ) ;
	}


	/**
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
	 */
	update ( ref , value ) {

		const d = this.compare(value, ref.value) ;

		if      ( d < 0 ) this.decreasekey(ref, value) ;
		else if ( d > 0 ) this.increasekey(ref, value) ;
		else              ref.value = value ;

	}

	/**
	 * decrease-key
	 *
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
	 */
	decreasekey ( ref , value ) {
		if (ref === this.min) ref.value = value ;
		else {
			// this.min != null, ref != null
			this.min = decreasekey( this.compare , this.min , ref , value ) ;
		}
	}

	/**
	 * increase-key: remove the item at the key to be increased, replace
	 * the key with a larger key, then push the result back into the heap.
	 *
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
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
	 */
	delete ( ref ) {

		if ( ref === this.min ) {
			this.popreference() ;
			return ;
		}

		const successor = mergepairs(this.compare, ref.children); // ref.children.next = null

		// ref has no children
		if (successor === null) {

			//  _       _       _
			// | | --> | | --> | |
			// |_| <-- |_| <-- |_|
			//  P       R       N

			// detach ref and link ref.prev to ref.next
			//
			//  _               _
			// | | ----------> | |
			// |_| <    _   -> |_|
			//  P   \  | | /  / N
			//       - |_| <-/
			//          R
			//
			ref.prev.next = ref.next ; // must be != null because ref != min

			if (ref.next !== null) {
				//
				//  _               _
				// | | ----------> | |
				// |_| <---------- |_|
				//  P       _       N
				//  ^      | | -----^
				//  |----- |_|
				//          R
				//
				ref.next.prev = ref.prev ;
				//
				//  _               _
				// | | ----------> | |
				// |_| <---------- |_|
				//  P       _       N
				//  ^      | |
				//  |----- |_|
				//          R
				//
				ref.next = null;
			}

			//
			//  _               _
			// | | ----------> | |
			// |_| <---------- |_|
			//  P       _       N
			//         | |
			//         |_|
			//          R
			//
			ref.prev = null;

			return;

		}

		successor.prev = ref.prev ; // must be != null because ref != min
		successor.prev.next = successor ;
		ref.prev = null;

		if (ref.next !== null) {
			successor.next = ref.next ; // might be null
			successor.next.prev = successor ;
			ref.next = null;
		}

	}


}
