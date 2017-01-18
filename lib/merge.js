'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _prepend = require('./prepend');

var _prepend2 = _interopRequireDefault(_prepend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * merge: compare the two root elements, the smaller remains the root of the
 * result, the larger element and its subtree is appended as a child of this
 * root.
 *
 * /!\ Precondition:
 *   1. A = null or A.next = A.prev = null
 *   2. B = null or B.next = B.prev = null
 *
 * @param {Function} compare Comparison functions for keys.
 * @param {Node} A The first input node.
 * @param {Node} B The second input node.
 * @returns {Node} The input node with smallest key with .next = .prev = null.
 */
function merge(compare, A, B) {

  if (A === null) return B;

  if (B === null) return A;

  if (compare(A.value, B.value) < 0) return (0, _prepend2.default)(A, B);else return (0, _prepend2.default)(B, A);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImNvbXBhcmUiLCJBIiwiQiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFnQndCQSxLOztBQWhCeEI7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNlLFNBQVNBLEtBQVQsQ0FBaUJDLE9BQWpCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRS9DLE1BQUtELE1BQU0sSUFBWCxFQUFrQixPQUFPQyxDQUFQOztBQUVsQixNQUFLQSxNQUFNLElBQVgsRUFBa0IsT0FBT0QsQ0FBUDs7QUFFbEIsTUFBS0QsUUFBU0MsRUFBRUUsS0FBWCxFQUFtQkQsRUFBRUMsS0FBckIsSUFBK0IsQ0FBcEMsRUFBd0MsT0FBTyx1QkFBU0YsQ0FBVCxFQUFhQyxDQUFiLENBQVAsQ0FBeEMsS0FFd0MsT0FBTyx1QkFBU0EsQ0FBVCxFQUFhRCxDQUFiLENBQVA7QUFFeEMiLCJmaWxlIjoibWVyZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJlcGVuZCBmcm9tICcuL3ByZXBlbmQnIDtcblxuLyoqXG4gKiBtZXJnZTogY29tcGFyZSB0aGUgdHdvIHJvb3QgZWxlbWVudHMsIHRoZSBzbWFsbGVyIHJlbWFpbnMgdGhlIHJvb3Qgb2YgdGhlXG4gKiByZXN1bHQsIHRoZSBsYXJnZXIgZWxlbWVudCBhbmQgaXRzIHN1YnRyZWUgaXMgYXBwZW5kZWQgYXMgYSBjaGlsZCBvZiB0aGlzXG4gKiByb290LlxuICpcbiAqIC8hXFwgUHJlY29uZGl0aW9uOlxuICogICAxLiBBID0gbnVsbCBvciBBLm5leHQgPSBBLnByZXYgPSBudWxsXG4gKiAgIDIuIEIgPSBudWxsIG9yIEIubmV4dCA9IEIucHJldiA9IG51bGxcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJlIENvbXBhcmlzb24gZnVuY3Rpb25zIGZvciBrZXlzLlxuICogQHBhcmFtIHtOb2RlfSBBIFRoZSBmaXJzdCBpbnB1dCBub2RlLlxuICogQHBhcmFtIHtOb2RlfSBCIFRoZSBzZWNvbmQgaW5wdXQgbm9kZS5cbiAqIEByZXR1cm5zIHtOb2RlfSBUaGUgaW5wdXQgbm9kZSB3aXRoIHNtYWxsZXN0IGtleSB3aXRoIC5uZXh0ID0gLnByZXYgPSBudWxsLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZSAoIGNvbXBhcmUsIEEsIEIgKSB7XG5cblx0aWYgKCBBID09PSBudWxsICkgcmV0dXJuIEIgO1xuXG5cdGlmICggQiA9PT0gbnVsbCApIHJldHVybiBBIDtcblxuXHRpZiAoIGNvbXBhcmUoIEEudmFsdWUgLCBCLnZhbHVlICkgPCAwICkgcmV0dXJuIHByZXBlbmQoIEEgLCBCICkgO1xuXG5cdGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlcGVuZCggQiAsIEEgKSA7XG5cbn1cbiJdfQ==