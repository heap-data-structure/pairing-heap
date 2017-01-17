
/**
 * Set B as the lastchild of A.
 *
 * /!\ Precondition:
 *   1. A != null
 *   2. B != null
 *   3. A.next = A.prev = B.next = B.prev = null
 *
 * @param {Node} A
 * @param {Node} B
 * @return {Node} The input node A with .next = .prev = null.
 */
export default function append ( A , B ) {

	B.prev = A.lastchild ;

	B.prev.next = B ;

	A.lastchild = B ;

	return A ;

}
