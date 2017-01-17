"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FakeNode = exports.FakeNode = function FakeNode() {
	_classCallCheck(this, FakeNode);

	this.next = null;
};

var Node = function Node(value) {
	_classCallCheck(this, Node);

	this.value = value;
	this.prev = null;
	this.next = null;
	this.children = new FakeNode();
	this.lastchild = this.children;
};

exports.default = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob2RlLmpzIl0sIm5hbWVzIjpbIkZha2VOb2RlIiwibmV4dCIsIk5vZGUiLCJ2YWx1ZSIsInByZXYiLCJjaGlsZHJlbiIsImxhc3RjaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDYUEsUSxXQUFBQSxRLEdBQ1osb0JBQWU7QUFBQTs7QUFDZCxNQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLEM7O0lBR21CQyxJLEdBRXBCLGNBQWNDLEtBQWQsRUFBc0I7QUFBQTs7QUFDckIsTUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsTUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxNQUFLSCxJQUFMLEdBQVksSUFBWjtBQUNBLE1BQUtJLFFBQUwsR0FBZ0IsSUFBSUwsUUFBSixFQUFoQjtBQUNBLE1BQUtNLFNBQUwsR0FBaUIsS0FBS0QsUUFBdEI7QUFDQSxDOztrQkFSbUJILEkiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIEZha2VOb2RlIHtcblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHRoaXMubmV4dCA9IG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG5cblx0Y29uc3RydWN0b3IgKCB2YWx1ZSApIHtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWUgO1xuXHRcdHRoaXMucHJldiA9IG51bGw7XG5cdFx0dGhpcy5uZXh0ID0gbnVsbDtcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IEZha2VOb2RlKCk7XG5cdFx0dGhpcy5sYXN0Y2hpbGQgPSB0aGlzLmNoaWxkcmVuO1xuXHR9XG5cbn1cbiJdfQ==