import merge from "./merge.js" ;

/**
 * Recursively builds a heap from an iterator of nodes by merging them pair by
 * pair.
 *
 * @param {Function} compare Comparison function for node keys.
 * @param {Node} prev Last node before first of list. First node is `prev.next`.
 * @returns {Node} The root node with .next = .prev = null or null for an empty
 *                 iterator.
 */
export default function mergepairs ( compare, prev ) {

	// unpick linked list starting at prev.next

	const A = prev.next ;
	prev.next = null;

	if ( A === null ) return null ;
	A.prev = null;

	const B = A.next ;
	A.next = null;

	if ( B === null ) return A ;
	B.prev = null;

	// recursion fairy for the rest of the heap
	const tail = mergepairs( compare , B ) ; // sets B.next = null

	// merge A != null with B != null
	const head = merge( compare , A , B ) ; // call to merge is valid

	// merge with the rest
	if (tail === null) return head;

	// head != null, tail != null
	return merge( compare , head , tail ) ; // also valid because tail and head
	                                        // are outputs of merge{pairs}

}
