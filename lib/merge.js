'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = merge;

var _append = require('./append');

var _append2 = _interopRequireDefault(_append);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * merge: compare the two root elements, the smaller remains the root of the
 * result, the larger element and its subtree is appended as a child of this
 * root.
 */

function merge(compare, A, B) {

	if (A === null) return B;
	if (B === null) return A;

	if (compare(A.value, B.value) < 0) {
		(0, _append2.default)(A, B);
		return A;
	} else {
		(0, _append2.default)(B, A);
		return B;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXJnZS5qcyJdLCJuYW1lcyI6WyJtZXJnZSIsImNvbXBhcmUiLCJBIiwiQiIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFRd0JBLEs7O0FBUnhCOzs7Ozs7QUFFQTs7Ozs7O0FBTWUsU0FBU0EsS0FBVCxDQUFpQkMsT0FBakIsRUFBMEJDLENBQTFCLEVBQTZCQyxDQUE3QixFQUFpQzs7QUFFL0MsS0FBS0QsTUFBTSxJQUFYLEVBQWtCLE9BQU9DLENBQVA7QUFDbEIsS0FBS0EsTUFBTSxJQUFYLEVBQWtCLE9BQU9ELENBQVA7O0FBRWxCLEtBQUtELFFBQVNDLEVBQUVFLEtBQVgsRUFBbUJELEVBQUVDLEtBQXJCLElBQStCLENBQXBDLEVBQXdDO0FBQ3ZDLHdCQUFRRixDQUFSLEVBQVlDLENBQVo7QUFDQSxTQUFPRCxDQUFQO0FBQ0EsRUFIRCxNQUtLO0FBQ0osd0JBQVFDLENBQVIsRUFBWUQsQ0FBWjtBQUNBLFNBQU9DLENBQVA7QUFDQTtBQUdEIiwiZmlsZSI6Im1lcmdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcGVuZCBmcm9tICcuL2FwcGVuZCcgO1xuXG4vKipcbiAqIG1lcmdlOiBjb21wYXJlIHRoZSB0d28gcm9vdCBlbGVtZW50cywgdGhlIHNtYWxsZXIgcmVtYWlucyB0aGUgcm9vdCBvZiB0aGVcbiAqIHJlc3VsdCwgdGhlIGxhcmdlciBlbGVtZW50IGFuZCBpdHMgc3VidHJlZSBpcyBhcHBlbmRlZCBhcyBhIGNoaWxkIG9mIHRoaXNcbiAqIHJvb3QuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2UgKCBjb21wYXJlLCBBLCBCICkge1xuXG5cdGlmICggQSA9PT0gbnVsbCApIHJldHVybiBCIDtcblx0aWYgKCBCID09PSBudWxsICkgcmV0dXJuIEEgO1xuXG5cdGlmICggY29tcGFyZSggQS52YWx1ZSAsIEIudmFsdWUgKSA8IDAgKSB7XG5cdFx0YXBwZW5kKCBBICwgQiApIDtcblx0XHRyZXR1cm4gQSA7XG5cdH1cblxuXHRlbHNlIHtcblx0XHRhcHBlbmQoIEIgLCBBICkgO1xuXHRcdHJldHVybiBCIDtcblx0fVxuXG5cbn1cbiJdfQ==