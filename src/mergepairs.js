import merge from './merge' ;

export default function mergepairs ( compare, pairs ) {

	const A = pairs.next ;

	if ( A === null ) return null ;

	const B = A.next ;

	if ( B === null ) return A ;

	// /!\ Order of the two following operations matter
	//     because merge deletes B.next
	const tail = mergepairs( compare , B ) ;
	const head = merge( compare , A , B ) ;

	return merge( compare , head , tail ) ;

}
