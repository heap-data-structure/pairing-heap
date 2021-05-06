import merge from './merge.js';
import mergepairs from './mergepairs.js';
import decreasekey from './decreasekey.js';
import Node from './Node.js';

export default class PairingHeap {
	constructor(compare) {
		this.compare = compare; // Comparison function
		this.min = null; // Root node, must have .prev = .next = null at all times
	}

	/**
	 * Find-min: simply return the top element of the heap.
	 */
	head() {
		if (this.min === null) return undefined;
		return this.min.value;
	}

	headreference() {
		return this.min;
	}

	/**
	 * Delete-min: remove the root and merge its subtrees. Various strategies
	 * are employed.
	 */
	pop() {
		const min = this.popreference();
		return min === null ? undefined : min.value;
	}

	/**
	 */
	popreference() {
		if (this.min === null) return null;
		const min = this.min;
		this.min = mergepairs(this.compare, min.children); // Min.children.next = null
		return min;
	}

	/**
	 * Insert: create a new heap for the inserted element and merge into the
	 * original heap.
	 */
	push(value) {
		const node = new Node(value);
		return this.pushreference(node);
	}

	/**
	 * /!\ ref.next = ref.prev = null which means all references that are
	 * external to the tree must reset .next and .prev and one must not call
	 * PairingHeap#pushreference with an internal reference from this tree or
	 * another, except the root of another tree.
	 */
	pushreference(ref) {
		this.min = this.min === null ? ref : merge(this.compare, this.min, ref); // This.min != null != ref
		return ref;
	}

	/**
	 * Supposes the same comparison function is used in both trees.
	 * We can call pushreference since other.min.next = other.min.prev = null.
	 */
	merge(other) {
		const ref = other.min;
		if (ref !== null) this.pushreference(ref);
	}

	/**
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
	 */
	update(ref, value) {
		const d = this.compare(value, ref.value);

		if (d < 0) this.decreasekey(ref, value);
		else if (d > 0) this.increasekey(ref, value);
		else ref.value = value;
	}

	/**
	 * Decrease-key
	 *
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
	 */
	decreasekey(ref, value) {
		if (ref === this.min) ref.value = value;
		else {
			// This.min != null, ref != null
			this.min = decreasekey(this.compare, this.min, ref, value);
		}
	}

	/**
	 * Increase-key: remove the item at the key to be increased, replace
	 * the key with a larger key, then push the result back into the heap.
	 *
	 * @param {Node} ref Non-null internal node object.
	 * @param {Object} value The new value for ref.
	 *
	 */
	increasekey(ref, value) {
		this.delete(ref);

		ref.value = value;

		this.pushreference(ref);
	}

	/**
	 * Ref must be internal
	 * ref.prev and ref.next get reset to null
	 */
	delete(ref) {
		if (ref === this.min) {
			this.popreference();
			return;
		}

		const successor = mergepairs(this.compare, ref.children); // Ref.children.next = null

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
			ref.prev.next = ref.next; // Must be != null because ref != min

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
				ref.next.prev = ref.prev;
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

		successor.prev = ref.prev; // Must be != null because ref != min
		successor.prev.next = successor;
		ref.prev = null;

		if (ref.next !== null) {
			successor.next = ref.next; // Might be null
			successor.next.prev = successor;
			ref.next = null;
		}
	}
}
