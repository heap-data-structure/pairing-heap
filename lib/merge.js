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
 *   1. A != null and A.next = A.prev = null
 *   2. B != null and B.next = B.prev = null
 *
 * @param {Function} compare Comparison functions for keys.
 * @param {Node} A The first input node.
 * @param {Node} B The second input node.
 * @returns {Node} The input node with smallest key with .next = .prev = null.
 */
function merge(compare, A, B) {

  if (compare(A.value, B.value) < 0) return (0, _prepend2.default)(A, B);else return (0, _prepend2.default)(B, A);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImNvbXBhcmUiLCJBIiwiQiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFnQndCQSxLOztBQWhCeEI7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQWNlLFNBQVNBLEtBQVQsQ0FBaUJDLE9BQWpCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsRUFBaUM7O0FBRS9DLE1BQUtGLFFBQVNDLEVBQUVFLEtBQVgsRUFBbUJELEVBQUVDLEtBQXJCLElBQStCLENBQXBDLEVBQXdDLE9BQU8sdUJBQVNGLENBQVQsRUFBYUMsQ0FBYixDQUFQLENBQXhDLEtBRXdDLE9BQU8sdUJBQVNBLENBQVQsRUFBYUQsQ0FBYixDQUFQO0FBRXhDIiwiZmlsZSI6Im1lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByZXBlbmQgZnJvbSAnLi9wcmVwZW5kJyA7XG5cbi8qKlxuICogbWVyZ2U6IGNvbXBhcmUgdGhlIHR3byByb290IGVsZW1lbnRzLCB0aGUgc21hbGxlciByZW1haW5zIHRoZSByb290IG9mIHRoZVxuICogcmVzdWx0LCB0aGUgbGFyZ2VyIGVsZW1lbnQgYW5kIGl0cyBzdWJ0cmVlIGlzIGFwcGVuZGVkIGFzIGEgY2hpbGQgb2YgdGhpc1xuICogcm9vdC5cbiAqXG4gKiAvIVxcIFByZWNvbmRpdGlvbjpcbiAqICAgMS4gQSAhPSBudWxsIGFuZCBBLm5leHQgPSBBLnByZXYgPSBudWxsXG4gKiAgIDIuIEIgIT0gbnVsbCBhbmQgQi5uZXh0ID0gQi5wcmV2ID0gbnVsbFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmUgQ29tcGFyaXNvbiBmdW5jdGlvbnMgZm9yIGtleXMuXG4gKiBAcGFyYW0ge05vZGV9IEEgVGhlIGZpcnN0IGlucHV0IG5vZGUuXG4gKiBAcGFyYW0ge05vZGV9IEIgVGhlIHNlY29uZCBpbnB1dCBub2RlLlxuICogQHJldHVybnMge05vZGV9IFRoZSBpbnB1dCBub2RlIHdpdGggc21hbGxlc3Qga2V5IHdpdGggLm5leHQgPSAucHJldiA9IG51bGwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlICggY29tcGFyZSwgQSwgQiApIHtcblxuXHRpZiAoIGNvbXBhcmUoIEEudmFsdWUgLCBCLnZhbHVlICkgPCAwICkgcmV0dXJuIHByZXBlbmQoIEEgLCBCICkgO1xuXG5cdGVsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJlcGVuZCggQiAsIEEgKSA7XG5cbn1cbiJdfQ==