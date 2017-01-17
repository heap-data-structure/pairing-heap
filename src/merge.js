import { append } from './append' ;

/**
 * merge: compare the two root elements, the smaller remains the root of the
 * result, the larger element and its subtree is appended as a child of this
 * root.
 */

export function merge ( compare, first, second ) {

	if ( compare( first.value , second.value ) < 0 ) {
		append( first , second ) ;
		return first ;
	}

	else {
		append( second , first ) ;
		return second ;
	}


}
