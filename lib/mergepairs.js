'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mergepairs;

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively builds a heap from an iterator of nodes by merging them pair by
 * pair.
 *
 * @param {Function} compare Comparison function for node keys.
 * @param {Node} prev Last node before first of list. First node is `prev.next`.
 * @returns {Node} The root node with .next = .prev = null or null for an empty
 *                 iterator.
 */
function mergepairs(compare, prev) {

	// unpick linked list starting at prev.next

	var A = prev.next;
	prev.next = null;

	if (A === null) return null;
	A.prev = null;

	var B = A.next;
	A.next = null;

	if (B === null) return A;
	B.prev = null;

	// recursion fairy for the rest of the heap
	var tail = mergepairs(compare, B); // sets B.next = null

	// merge A with B
	var head = (0, _merge2.default)(compare, A, B); // call to merge is valid

	// merge with the rest
	return (0, _merge2.default)(compare, head, tail); // also valid because tail and head
	// are outputs of merge{pairs}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZXBhaXJzLmpzIl0sIm5hbWVzIjpbIm1lcmdlcGFpcnMiLCJjb21wYXJlIiwicHJldiIsIkEiLCJuZXh0IiwiQiIsInRhaWwiLCJoZWFkIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFXd0JBLFU7O0FBWHhCOzs7Ozs7QUFFQTs7Ozs7Ozs7O0FBU2UsU0FBU0EsVUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLElBQS9CLEVBQXNDOztBQUVwRDs7QUFFQSxLQUFNQyxJQUFJRCxLQUFLRSxJQUFmO0FBQ0FGLE1BQUtFLElBQUwsR0FBWSxJQUFaOztBQUVBLEtBQUtELE1BQU0sSUFBWCxFQUFrQixPQUFPLElBQVA7QUFDbEJBLEdBQUVELElBQUYsR0FBUyxJQUFUOztBQUVBLEtBQU1HLElBQUlGLEVBQUVDLElBQVo7QUFDQUQsR0FBRUMsSUFBRixHQUFTLElBQVQ7O0FBRUEsS0FBS0MsTUFBTSxJQUFYLEVBQWtCLE9BQU9GLENBQVA7QUFDbEJFLEdBQUVILElBQUYsR0FBUyxJQUFUOztBQUVBO0FBQ0EsS0FBTUksT0FBT04sV0FBWUMsT0FBWixFQUFzQkksQ0FBdEIsQ0FBYixDQWpCb0QsQ0FpQlg7O0FBRXpDO0FBQ0EsS0FBTUUsT0FBTyxxQkFBT04sT0FBUCxFQUFpQkUsQ0FBakIsRUFBcUJFLENBQXJCLENBQWIsQ0FwQm9ELENBb0JaOztBQUV4QztBQUNBLFFBQU8scUJBQU9KLE9BQVAsRUFBaUJNLElBQWpCLEVBQXdCRCxJQUF4QixDQUFQLENBdkJvRCxDQXVCWjtBQUNBO0FBRXhDIiwiZmlsZSI6Im1lcmdlcGFpcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZScgO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGJ1aWxkcyBhIGhlYXAgZnJvbSBhbiBpdGVyYXRvciBvZiBub2RlcyBieSBtZXJnaW5nIHRoZW0gcGFpciBieVxuICogcGFpci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJlIENvbXBhcmlzb24gZnVuY3Rpb24gZm9yIG5vZGUga2V5cy5cbiAqIEBwYXJhbSB7Tm9kZX0gcHJldiBMYXN0IG5vZGUgYmVmb3JlIGZpcnN0IG9mIGxpc3QuIEZpcnN0IG5vZGUgaXMgYHByZXYubmV4dGAuXG4gKiBAcmV0dXJucyB7Tm9kZX0gVGhlIHJvb3Qgbm9kZSB3aXRoIC5uZXh0ID0gLnByZXYgPSBudWxsIG9yIG51bGwgZm9yIGFuIGVtcHR5XG4gKiAgICAgICAgICAgICAgICAgaXRlcmF0b3IuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlcGFpcnMgKCBjb21wYXJlLCBwcmV2ICkge1xuXG5cdC8vIHVucGljayBsaW5rZWQgbGlzdCBzdGFydGluZyBhdCBwcmV2Lm5leHRcblxuXHRjb25zdCBBID0gcHJldi5uZXh0IDtcblx0cHJldi5uZXh0ID0gbnVsbDtcblxuXHRpZiAoIEEgPT09IG51bGwgKSByZXR1cm4gbnVsbCA7XG5cdEEucHJldiA9IG51bGw7XG5cblx0Y29uc3QgQiA9IEEubmV4dCA7XG5cdEEubmV4dCA9IG51bGw7XG5cblx0aWYgKCBCID09PSBudWxsICkgcmV0dXJuIEEgO1xuXHRCLnByZXYgPSBudWxsO1xuXG5cdC8vIHJlY3Vyc2lvbiBmYWlyeSBmb3IgdGhlIHJlc3Qgb2YgdGhlIGhlYXBcblx0Y29uc3QgdGFpbCA9IG1lcmdlcGFpcnMoIGNvbXBhcmUgLCBCICkgOyAvLyBzZXRzIEIubmV4dCA9IG51bGxcblxuXHQvLyBtZXJnZSBBIHdpdGggQlxuXHRjb25zdCBoZWFkID0gbWVyZ2UoIGNvbXBhcmUgLCBBICwgQiApIDsgLy8gY2FsbCB0byBtZXJnZSBpcyB2YWxpZFxuXG5cdC8vIG1lcmdlIHdpdGggdGhlIHJlc3Rcblx0cmV0dXJuIG1lcmdlKCBjb21wYXJlICwgaGVhZCAsIHRhaWwgKSA7IC8vIGFsc28gdmFsaWQgYmVjYXVzZSB0YWlsIGFuZCBoZWFkXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmUgb3V0cHV0cyBvZiBtZXJnZXtwYWlyc31cblxufVxuIl19