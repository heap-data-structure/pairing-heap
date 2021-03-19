/**
 * Set B as the first child of A.
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
export default function prepend(A, B) {
	B.prev = A.children;
	B.next = A.children.next;
	A.children.next = B;

	if (B.next !== null) B.next.prev = B;

	return A;
}
