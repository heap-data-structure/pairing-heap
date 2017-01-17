'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mergepairs;

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergepairs(compare, pairs) {

	var A = pairs.next;

	if (A === null) return null;

	var B = A.next;

	if (B === null) return A;

	// /!\ Order of the two following operations matter
	//     because merge deletes B.next
	var tail = mergepairs(compare, B);
	var head = (0, _merge2.default)(compare, A, B);

	return (0, _merge2.default)(compare, head, tail);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZXBhaXJzLmpzIl0sIm5hbWVzIjpbIm1lcmdlcGFpcnMiLCJjb21wYXJlIiwicGFpcnMiLCJBIiwibmV4dCIsIkIiLCJ0YWlsIiwiaGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxVOztBQUZ4Qjs7Ozs7O0FBRWUsU0FBU0EsVUFBVCxDQUFzQkMsT0FBdEIsRUFBK0JDLEtBQS9CLEVBQXVDOztBQUVyRCxLQUFNQyxJQUFJRCxNQUFNRSxJQUFoQjs7QUFFQSxLQUFLRCxNQUFNLElBQVgsRUFBa0IsT0FBTyxJQUFQOztBQUVsQixLQUFNRSxJQUFJRixFQUFFQyxJQUFaOztBQUVBLEtBQUtDLE1BQU0sSUFBWCxFQUFrQixPQUFPRixDQUFQOztBQUVsQjtBQUNBO0FBQ0EsS0FBTUcsT0FBT04sV0FBWUMsT0FBWixFQUFzQkksQ0FBdEIsQ0FBYjtBQUNBLEtBQU1FLE9BQU8scUJBQU9OLE9BQVAsRUFBaUJFLENBQWpCLEVBQXFCRSxDQUFyQixDQUFiOztBQUVBLFFBQU8scUJBQU9KLE9BQVAsRUFBaUJNLElBQWpCLEVBQXdCRCxJQUF4QixDQUFQO0FBRUEiLCJmaWxlIjoibWVyZ2VwYWlycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlcGFpcnMgKCBjb21wYXJlLCBwYWlycyApIHtcblxuXHRjb25zdCBBID0gcGFpcnMubmV4dCA7XG5cblx0aWYgKCBBID09PSBudWxsICkgcmV0dXJuIG51bGwgO1xuXG5cdGNvbnN0IEIgPSBBLm5leHQgO1xuXG5cdGlmICggQiA9PT0gbnVsbCApIHJldHVybiBBIDtcblxuXHQvLyAvIVxcIE9yZGVyIG9mIHRoZSB0d28gZm9sbG93aW5nIG9wZXJhdGlvbnMgbWF0dGVyXG5cdC8vICAgICBiZWNhdXNlIG1lcmdlIGRlbGV0ZXMgQi5uZXh0XG5cdGNvbnN0IHRhaWwgPSBtZXJnZXBhaXJzKCBjb21wYXJlICwgQiApIDtcblx0Y29uc3QgaGVhZCA9IG1lcmdlKCBjb21wYXJlICwgQSAsIEIgKSA7XG5cblx0cmV0dXJuIG1lcmdlKCBjb21wYXJlICwgaGVhZCAsIHRhaWwgKSA7XG5cbn1cbiJdfQ==