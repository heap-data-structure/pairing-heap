"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
	_classCallCheck(this, Node);

	this.value = value; // key
	this.prev = null; // pointer to previous sibling
	this.next = null; // pointer to next sibling
	this.children = new Beginning(); // pointer to children list
	// first child is this.children.next
};

/**
 * Avoids if-then-else logic when manipulating child nodes
 */


exports.default = Node;

var Beginning = exports.Beginning = function Beginning() {
	_classCallCheck(this, Beginning);

	this.next = null;
};

//export class End {
//constructor (prev) {
//this.prev = prev;
//}
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob2RlLmpzIl0sIm5hbWVzIjpbIk5vZGUiLCJ2YWx1ZSIsInByZXYiLCJuZXh0IiwiY2hpbGRyZW4iLCJCZWdpbm5pbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQ3FCQSxJLEdBRXBCLGNBQWNDLEtBQWQsRUFBc0I7QUFBQTs7QUFDckIsTUFBS0EsS0FBTCxHQUFhQSxLQUFiLENBRHFCLENBQ0Q7QUFDcEIsTUFBS0MsSUFBTCxHQUFZLElBQVosQ0FGcUIsQ0FFRDtBQUNwQixNQUFLQyxJQUFMLEdBQVksSUFBWixDQUhxQixDQUdEO0FBQ3BCLE1BQUtDLFFBQUwsR0FBZ0IsSUFBSUMsU0FBSixFQUFoQixDQUpxQixDQUlZO0FBQ0Q7QUFDaEMsQzs7QUFJRjs7Ozs7a0JBWnFCTCxJOztJQWVSSyxTLFdBQUFBLFMsR0FDWixxQkFBZTtBQUFBOztBQUNkLE1BQUtGLElBQUwsR0FBWSxJQUFaO0FBQ0EsQzs7QUFHRjtBQUNDO0FBQ0M7QUFDRDtBQUNEIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuXG5cdGNvbnN0cnVjdG9yICggdmFsdWUgKSB7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlOyAvLyBrZXlcblx0XHR0aGlzLnByZXYgPSBudWxsOyAgIC8vIHBvaW50ZXIgdG8gcHJldmlvdXMgc2libGluZ1xuXHRcdHRoaXMubmV4dCA9IG51bGw7ICAgLy8gcG9pbnRlciB0byBuZXh0IHNpYmxpbmdcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IEJlZ2lubmluZygpOyAvLyBwb2ludGVyIHRvIGNoaWxkcmVuIGxpc3Rcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IGNoaWxkIGlzIHRoaXMuY2hpbGRyZW4ubmV4dFxuXHR9XG5cbn1cblxuLyoqXG4gKiBBdm9pZHMgaWYtdGhlbi1lbHNlIGxvZ2ljIHdoZW4gbWFuaXB1bGF0aW5nIGNoaWxkIG5vZGVzXG4gKi9cbmV4cG9ydCBjbGFzcyBCZWdpbm5pbmcge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0dGhpcy5uZXh0ID0gbnVsbDtcblx0fVxufVxuXG4vL2V4cG9ydCBjbGFzcyBFbmQge1xuXHQvL2NvbnN0cnVjdG9yIChwcmV2KSB7XG5cdFx0Ly90aGlzLnByZXYgPSBwcmV2O1xuXHQvL31cbi8vfVxuIl19