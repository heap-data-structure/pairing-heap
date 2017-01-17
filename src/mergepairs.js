import { merge } from './merge' ;

export function mergepairs ( compare, pairs ) {

	const A = pairs.next ;

	if ( A === null ) return null ;

	const B = A.next ;

	if ( B === null ) return A ;

	return merge( compare , merge( A , B ) , mergepairs( B.next ) ) ;

}
