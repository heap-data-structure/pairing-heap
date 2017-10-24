"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prepend;

/**
 * Set B as the first child of A.
 *
 * /!\ Precondition:
 *   1. A != null
 *   2. B != null
 *   3. A.next = A.prev = B.next = B.prev = null
 *
 * @param {Node} A
 * @param {Node} B
 * @return {Node} The input node A with .next = .prev = null.
 */
function prepend(A, B) {

  B.prev = A.children;
  B.next = A.children.next;
  A.children.next = B;

  if (B.next !== null) B.next.prev = B;

  return A;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wcmVwZW5kLmpzIl0sIm5hbWVzIjpbInByZXBlbmQiLCJBIiwiQiIsInByZXYiLCJjaGlsZHJlbiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWF3QkEsTzs7QUFaeEI7Ozs7Ozs7Ozs7OztBQVllLFNBQVNBLE9BQVQsQ0FBbUJDLENBQW5CLEVBQXVCQyxDQUF2QixFQUEyQjs7QUFFekNBLElBQUVDLElBQUYsR0FBU0YsRUFBRUcsUUFBWDtBQUNBRixJQUFFRyxJQUFGLEdBQVNKLEVBQUVHLFFBQUYsQ0FBV0MsSUFBcEI7QUFDQUosSUFBRUcsUUFBRixDQUFXQyxJQUFYLEdBQWtCSCxDQUFsQjs7QUFFQSxNQUFJQSxFQUFFRyxJQUFGLEtBQVcsSUFBZixFQUFxQkgsRUFBRUcsSUFBRixDQUFPRixJQUFQLEdBQWNELENBQWQ7O0FBRXJCLFNBQU9ELENBQVA7QUFFQSIsImZpbGUiOiJwcmVwZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFNldCBCIGFzIHRoZSBmaXJzdCBjaGlsZCBvZiBBLlxuICpcbiAqIC8hXFwgUHJlY29uZGl0aW9uOlxuICogICAxLiBBICE9IG51bGxcbiAqICAgMi4gQiAhPSBudWxsXG4gKiAgIDMuIEEubmV4dCA9IEEucHJldiA9IEIubmV4dCA9IEIucHJldiA9IG51bGxcbiAqXG4gKiBAcGFyYW0ge05vZGV9IEFcbiAqIEBwYXJhbSB7Tm9kZX0gQlxuICogQHJldHVybiB7Tm9kZX0gVGhlIGlucHV0IG5vZGUgQSB3aXRoIC5uZXh0ID0gLnByZXYgPSBudWxsLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwZW5kICggQSAsIEIgKSB7XG5cblx0Qi5wcmV2ID0gQS5jaGlsZHJlbiA7XG5cdEIubmV4dCA9IEEuY2hpbGRyZW4ubmV4dCA7XG5cdEEuY2hpbGRyZW4ubmV4dCA9IEIgO1xuXG5cdGlmIChCLm5leHQgIT09IG51bGwpIEIubmV4dC5wcmV2ID0gQiA7XG5cblx0cmV0dXJuIEEgO1xuXG59XG4iXX0=