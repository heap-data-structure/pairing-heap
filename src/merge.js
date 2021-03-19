import prepend from "./prepend.js" ;

/**
 * merge: compare the two root elements, the smaller remains the root of the
 * result, the larger element and its subtree is appended as a child of this
 * root.
 *
 * /!\ Precondition:
 *   1. A != null and A.next = A.prev = null
 *   2. B != null and B.next = B.prev = null
 *
 * @param {Function} compare Comparison functions for keys.
 * @param {Node} A The first input node.
 * @param {Node} B The second input node.
 * @returns {Node} The input node with smallest key with .next = .prev = null.
 */
export default function merge ( compare, A, B ) {

	if ( compare( A.value , B.value ) < 0 ) return prepend( A , B ) ;

	else                                    return prepend( B , A ) ;

}
