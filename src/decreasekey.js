import merge from './merge' ;

/**
 * decrease-key: remove the subtree rooted at the key to be decreased, replace
 * the key with a smaller key, then merge the result back into the heap.
 */

export default function decreasekey ( compare , min , ref , value ) {

	ref.value = value ;

	// remove from tree
	ref.prev.next = ref.next ;
	ref.next.prev = ref.prev ;
	ref.next = ref.prev = null ;

	// merge
	return merge(compare, min, ref);

}
