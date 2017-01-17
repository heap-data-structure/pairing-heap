
export function append ( first , second ) {

	second.prev = first.node.tail ;

	first.node.tail = first.node.tail.next = second.node ;

}
