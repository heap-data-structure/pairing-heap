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
 *
 * @param {Function} compare Comparison function for keys.
 * @param {Node} min Current minimum-key node with .prev = .next = null.
 * @param {Node} node Node to update with .prev != null.
 * @param {Object} value The new value for the key of the node to update.
 * @returns {Node} Returns the node containing the minimum key.
 */
function decreasekey(compare, min, node, value) {

	// update node's key
	node.value = value;

	// remove node from tree
	node.prev.next = node.next; // by assumption node.prev != null
	if (node.next !== null) {
		node.next.prev = node.prev;
		node.next = null;
	}
	node.prev = null;

	// merge, remember we move the whole subtree with children
	// node.prev = node.next = null at this point so safe to call merge
	return (0, _merge2.default)(compare, min, node);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNyZWFzZWtleS5qcyJdLCJuYW1lcyI6WyJkZWNyZWFzZWtleSIsImNvbXBhcmUiLCJtaW4iLCJub2RlIiwidmFsdWUiLCJwcmV2IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxXOztBQVp4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxXQUFULENBQXVCQyxPQUF2QixFQUFpQ0MsR0FBakMsRUFBdUNDLElBQXZDLEVBQThDQyxLQUE5QyxFQUFzRDs7QUFFcEU7QUFDQUQsTUFBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBO0FBQ0FELE1BQUtFLElBQUwsQ0FBVUMsSUFBVixHQUFpQkgsS0FBS0csSUFBdEIsQ0FOb0UsQ0FNdkM7QUFDN0IsS0FBSUgsS0FBS0csSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3ZCSCxPQUFLRyxJQUFMLENBQVVELElBQVYsR0FBaUJGLEtBQUtFLElBQXRCO0FBQ0FGLE9BQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDREgsTUFBS0UsSUFBTCxHQUFZLElBQVo7O0FBRUE7QUFDQTtBQUNBLFFBQU8scUJBQU1KLE9BQU4sRUFBZUMsR0FBZixFQUFvQkMsSUFBcEIsQ0FBUDtBQUVBIiwiZmlsZSI6ImRlY3JlYXNla2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnIDtcblxuLyoqXG4gKiBkZWNyZWFzZS1rZXk6IHJlbW92ZSB0aGUgc3VidHJlZSByb290ZWQgYXQgdGhlIGtleSB0byBiZSBkZWNyZWFzZWQsIHJlcGxhY2VcbiAqIHRoZSBrZXkgd2l0aCBhIHNtYWxsZXIga2V5LCB0aGVuIG1lcmdlIHRoZSByZXN1bHQgYmFjayBpbnRvIHRoZSBoZWFwLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgQ29tcGFyaXNvbiBmdW5jdGlvbiBmb3Iga2V5cy5cbiAqIEBwYXJhbSB7Tm9kZX0gbWluIEN1cnJlbnQgbWluaW11bS1rZXkgbm9kZSB3aXRoIC5wcmV2ID0gLm5leHQgPSBudWxsLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIE5vZGUgdG8gdXBkYXRlIHdpdGggLnByZXYgIT0gbnVsbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5IG9mIHRoZSBub2RlIHRvIHVwZGF0ZS5cbiAqIEByZXR1cm5zIHtOb2RlfSBSZXR1cm5zIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIG1pbmltdW0ga2V5LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNyZWFzZWtleSAoIGNvbXBhcmUgLCBtaW4gLCBub2RlICwgdmFsdWUgKSB7XG5cblx0Ly8gdXBkYXRlIG5vZGUncyBrZXlcblx0bm9kZS52YWx1ZSA9IHZhbHVlIDtcblxuXHQvLyByZW1vdmUgbm9kZSBmcm9tIHRyZWVcblx0bm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQgOyAvLyBieSBhc3N1bXB0aW9uIG5vZGUucHJldiAhPSBudWxsXG5cdGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcblx0XHRub2RlLm5leHQucHJldiA9IG5vZGUucHJldiA7XG5cdFx0bm9kZS5uZXh0ID0gbnVsbCA7XG5cdH1cblx0bm9kZS5wcmV2ID0gbnVsbCA7XG5cblx0Ly8gbWVyZ2UsIHJlbWVtYmVyIHdlIG1vdmUgdGhlIHdob2xlIHN1YnRyZWUgd2l0aCBjaGlsZHJlblxuXHQvLyBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsIGF0IHRoaXMgcG9pbnQgc28gc2FmZSB0byBjYWxsIG1lcmdlXG5cdHJldHVybiBtZXJnZShjb21wYXJlLCBtaW4sIG5vZGUpO1xuXG59XG4iXX0=