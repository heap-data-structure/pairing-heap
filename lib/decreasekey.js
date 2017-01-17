'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = decreasekey;

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * decrease-key: remove the subtree rooted at the key to be decreased, replace
 * the key with a smaller key, then merge the result back into the heap.
 */

function decreasekey(compare, min, ref, value) {

	ref.value = value;

	// remove from tree
	ref.prev.next = ref.next;
	ref.next.prev = ref.prev;
	ref.next = ref.prev = null;

	// merge
	return (0, _merge2.default)(compare, min, ref);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNyZWFzZWtleS5qcyJdLCJuYW1lcyI6WyJkZWNyZWFzZWtleSIsImNvbXBhcmUiLCJtaW4iLCJyZWYiLCJ2YWx1ZSIsInByZXYiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7OztrQkFPd0JBLFc7O0FBUHhCOzs7Ozs7QUFFQTs7Ozs7QUFLZSxTQUFTQSxXQUFULENBQXVCQyxPQUF2QixFQUFpQ0MsR0FBakMsRUFBdUNDLEdBQXZDLEVBQTZDQyxLQUE3QyxFQUFxRDs7QUFFbkVELEtBQUlDLEtBQUosR0FBWUEsS0FBWjs7QUFFQTtBQUNBRCxLQUFJRSxJQUFKLENBQVNDLElBQVQsR0FBZ0JILElBQUlHLElBQXBCO0FBQ0FILEtBQUlHLElBQUosQ0FBU0QsSUFBVCxHQUFnQkYsSUFBSUUsSUFBcEI7QUFDQUYsS0FBSUcsSUFBSixHQUFXSCxJQUFJRSxJQUFKLEdBQVcsSUFBdEI7O0FBRUE7QUFDQSxRQUFPLHFCQUFNSixPQUFOLEVBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLENBQVA7QUFFQSIsImZpbGUiOiJkZWNyZWFzZWtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJyA7XG5cbi8qKlxuICogZGVjcmVhc2Uta2V5OiByZW1vdmUgdGhlIHN1YnRyZWUgcm9vdGVkIGF0IHRoZSBrZXkgdG8gYmUgZGVjcmVhc2VkLCByZXBsYWNlXG4gKiB0aGUga2V5IHdpdGggYSBzbWFsbGVyIGtleSwgdGhlbiBtZXJnZSB0aGUgcmVzdWx0IGJhY2sgaW50byB0aGUgaGVhcC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNyZWFzZWtleSAoIGNvbXBhcmUgLCBtaW4gLCByZWYgLCB2YWx1ZSApIHtcblxuXHRyZWYudmFsdWUgPSB2YWx1ZSA7XG5cblx0Ly8gcmVtb3ZlIGZyb20gdHJlZVxuXHRyZWYucHJldi5uZXh0ID0gcmVmLm5leHQgO1xuXHRyZWYubmV4dC5wcmV2ID0gcmVmLnByZXYgO1xuXHRyZWYubmV4dCA9IHJlZi5wcmV2ID0gbnVsbCA7XG5cblx0Ly8gbWVyZ2Vcblx0cmV0dXJuIG1lcmdlKGNvbXBhcmUsIG1pbiwgcmVmKTtcblxufVxuIl19