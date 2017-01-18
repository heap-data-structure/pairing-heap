import merge from './merge' ;

/**
 * decrease-key: remove the subtree rooted at the key to be decreased, replace
 * the key with a smaller key, then merge the result back into the heap.
 *
 * @param {Function} compare Comparison function for keys.
 * @param {Node} min Current minimum-key node != null with .prev = .next = null.
 * @param {Node} node Node != null to update with .prev != null.
 * @param {Object} value The new value for the key of the node to update.
 * @returns {Node} Returns the node containing the minimum key.
 */
export default function decreasekey ( compare , min , node , value ) {

	// update node's key
	node.value = value ;

	// remove node from tree
	node.prev.next = node.next ; // by assumption node.prev != null
	if (node.next !== null) {
		node.next.prev = node.prev ;
		node.next = null ;
	}
	node.prev = null ;

	// merge, remember we move the whole subtree with children
	// node.prev = node.next = null at this point so safe to call merge
	// min != null and node != null
	return merge(compare, min, node);

}
