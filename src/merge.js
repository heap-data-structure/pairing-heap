import append from './append' ;

/**
 * merge: compare the two root elements, the smaller remains the root of the
 * result, the larger element and its subtree is appended as a child of this
 * root.
 */

export default function merge ( compare, A, B ) {

	if ( A === null ) return B ;
	if ( B === null ) return A ;

	if ( compare( A.value , B.value ) < 0 ) {
		append( A , B ) ;
		return A ;
	}

	else {
		append( B , A ) ;
		return B ;
	}


}
