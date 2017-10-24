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
 * @param {Node} min Current minimum-key node != null with .prev = .next = null.
 * @param {Node} node Node != null to update with .prev != null.
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
	// min != null and node != null
	return (0, _merge2.default)(compare, min, node);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWNyZWFzZWtleS5qcyJdLCJuYW1lcyI6WyJkZWNyZWFzZWtleSIsImNvbXBhcmUiLCJtaW4iLCJub2RlIiwidmFsdWUiLCJwcmV2IiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxXOztBQVp4Qjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxXQUFULENBQXVCQyxPQUF2QixFQUFpQ0MsR0FBakMsRUFBdUNDLElBQXZDLEVBQThDQyxLQUE5QyxFQUFzRDs7QUFFcEU7QUFDQUQsTUFBS0MsS0FBTCxHQUFhQSxLQUFiOztBQUVBO0FBQ0FELE1BQUtFLElBQUwsQ0FBVUMsSUFBVixHQUFpQkgsS0FBS0csSUFBdEIsQ0FOb0UsQ0FNdkM7QUFDN0IsS0FBSUgsS0FBS0csSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3ZCSCxPQUFLRyxJQUFMLENBQVVELElBQVYsR0FBaUJGLEtBQUtFLElBQXRCO0FBQ0FGLE9BQUtHLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDREgsTUFBS0UsSUFBTCxHQUFZLElBQVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTyxxQkFBTUosT0FBTixFQUFlQyxHQUFmLEVBQW9CQyxJQUFwQixDQUFQO0FBRUEiLCJmaWxlIjoiZGVjcmVhc2VrZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZScgO1xuXG4vKipcbiAqIGRlY3JlYXNlLWtleTogcmVtb3ZlIHRoZSBzdWJ0cmVlIHJvb3RlZCBhdCB0aGUga2V5IHRvIGJlIGRlY3JlYXNlZCwgcmVwbGFjZVxuICogdGhlIGtleSB3aXRoIGEgc21hbGxlciBrZXksIHRoZW4gbWVyZ2UgdGhlIHJlc3VsdCBiYWNrIGludG8gdGhlIGhlYXAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyZSBDb21wYXJpc29uIGZ1bmN0aW9uIGZvciBrZXlzLlxuICogQHBhcmFtIHtOb2RlfSBtaW4gQ3VycmVudCBtaW5pbXVtLWtleSBub2RlICE9IG51bGwgd2l0aCAucHJldiA9IC5uZXh0ID0gbnVsbC5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBOb2RlICE9IG51bGwgdG8gdXBkYXRlIHdpdGggLnByZXYgIT0gbnVsbC5cbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciB0aGUga2V5IG9mIHRoZSBub2RlIHRvIHVwZGF0ZS5cbiAqIEByZXR1cm5zIHtOb2RlfSBSZXR1cm5zIHRoZSBub2RlIGNvbnRhaW5pbmcgdGhlIG1pbmltdW0ga2V5LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWNyZWFzZWtleSAoIGNvbXBhcmUgLCBtaW4gLCBub2RlICwgdmFsdWUgKSB7XG5cblx0Ly8gdXBkYXRlIG5vZGUncyBrZXlcblx0bm9kZS52YWx1ZSA9IHZhbHVlIDtcblxuXHQvLyByZW1vdmUgbm9kZSBmcm9tIHRyZWVcblx0bm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQgOyAvLyBieSBhc3N1bXB0aW9uIG5vZGUucHJldiAhPSBudWxsXG5cdGlmIChub2RlLm5leHQgIT09IG51bGwpIHtcblx0XHRub2RlLm5leHQucHJldiA9IG5vZGUucHJldiA7XG5cdFx0bm9kZS5uZXh0ID0gbnVsbCA7XG5cdH1cblx0bm9kZS5wcmV2ID0gbnVsbCA7XG5cblx0Ly8gbWVyZ2UsIHJlbWVtYmVyIHdlIG1vdmUgdGhlIHdob2xlIHN1YnRyZWUgd2l0aCBjaGlsZHJlblxuXHQvLyBub2RlLnByZXYgPSBub2RlLm5leHQgPSBudWxsIGF0IHRoaXMgcG9pbnQgc28gc2FmZSB0byBjYWxsIG1lcmdlXG5cdC8vIG1pbiAhPSBudWxsIGFuZCBub2RlICE9IG51bGxcblx0cmV0dXJuIG1lcmdlKGNvbXBhcmUsIG1pbiwgbm9kZSk7XG5cbn1cbiJdfQ==