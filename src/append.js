
export default function append ( A , B ) {

	B.prev = A.lastchild ;

	B.prev.next = B ;

	A.lastchild = B ;

	B.next = null ;

}
