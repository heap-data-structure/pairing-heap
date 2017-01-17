'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _mergepairs = require('./mergepairs');

var _mergepairs2 = _interopRequireDefault(_mergepairs);

var _decreasekey2 = require('./decreasekey');

var _decreasekey3 = _interopRequireDefault(_decreasekey2);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PairingHeap = function () {
	function PairingHeap(compare) {
		_classCallCheck(this, PairingHeap);

		this.compare = compare;
		this.min = null;
	}

	/**
  * find-min: simply return the top element of the heap.
  */


	_createClass(PairingHeap, [{
		key: 'head',
		value: function head() {
			if (this.min === null) return undefined;
			return this.min.value;
		}
	}, {
		key: 'headreference',
		value: function headreference() {
			return this.min;
		}

		/**
   * delete-min: remove the root and merge its subtrees. Various strategies
   * are employed.
   */

	}, {
		key: 'pop',
		value: function pop() {
			if (this.min === null) return undefined;
			var min = this.min;
			this.min = (0, _mergepairs2.default)(this.compare, min.children);
			return min.value;
		}
	}, {
		key: 'popreference',
		value: function popreference() {
			if (this.min === null) return null;
			var min = this.min;
			this.min = (0, _mergepairs2.default)(this.compare, min.children);
			return min;
		}

		/**
   * insert: create a new heap for the inserted element and merge into the
   * original heap.
   */

	}, {
		key: 'push',
		value: function push(value) {
			var node = new _Node2.default(value);
			return this.pushreference(node);
		}
	}, {
		key: 'pushreference',
		value: function pushreference(ref) {
			this.min = (0, _merge2.default)(this.compare, this.min, ref);
			return ref;
		}
	}, {
		key: 'merge',
		value: function merge(other) {
			this.pushreference(other.min);
		}
	}, {
		key: 'update',
		value: function update(ref, value) {

			var d = this.compare(value, ref.value);

			if (d < 0) this.decreasekey(ref, value);else if (d > 0) this.increasekey(ref, value);else ref.value = value;
		}
	}, {
		key: 'decreasekey',
		value: function decreasekey(ref, value) {
			this.min = (0, _decreasekey3.default)(this.compare, this.min, ref, value);
		}

		/**
   * increase-key: remove the item at the key to be decreased, replace
   * the key with a smaller key, then merge the result back into the heap.
   */

	}, {
		key: 'increasekey',
		value: function increasekey(ref, value) {

			this.delete(ref);

			ref.value = value;
			ref.prev = null;
			ref.next = null;
			ref.children.next = null;
			ref.lastchild = ref.children;

			this.pushreference(ref);
		}
	}, {
		key: 'delete',
		value: function _delete(ref) {

			if (ref === this.min) return this.pop();

			var successor = (0, _mergepairs2.default)(this.compare, ref.children);

			successor.prev = ref.prev;
			successor.next = ref.next;
			successor.prev.next = successor.next.prev = successor;
		}
	}]);

	return PairingHeap;
}();

exports.default = PairingHeap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWlyaW5nSGVhcC5qcyJdLCJuYW1lcyI6WyJQYWlyaW5nSGVhcCIsImNvbXBhcmUiLCJtaW4iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwibm9kZSIsInB1c2hyZWZlcmVuY2UiLCJyZWYiLCJvdGhlciIsImQiLCJkZWNyZWFzZWtleSIsImluY3JlYXNla2V5IiwiZGVsZXRlIiwicHJldiIsIm5leHQiLCJsYXN0Y2hpbGQiLCJwb3AiLCJzdWNjZXNzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxXO0FBRXBCLHNCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3JCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLEdBQUwsR0FBVyxJQUFYO0FBQ0E7O0FBRUQ7Ozs7Ozs7eUJBR1E7QUFDUCxPQUFLLEtBQUtBLEdBQUwsS0FBYSxJQUFsQixFQUF5QixPQUFPQyxTQUFQO0FBQ3pCLFVBQU8sS0FBS0QsR0FBTCxDQUFTRSxLQUFoQjtBQUNBOzs7a0NBR2dCO0FBQ2hCLFVBQU8sS0FBS0YsR0FBWjtBQUNBOztBQUVEOzs7Ozs7O3dCQUlPO0FBQ04sT0FBSSxLQUFLQSxHQUFMLEtBQWEsSUFBakIsRUFBd0IsT0FBT0MsU0FBUDtBQUN4QixPQUFNRCxNQUFNLEtBQUtBLEdBQWpCO0FBQ0EsUUFBS0EsR0FBTCxHQUFXLDBCQUFXLEtBQUtELE9BQWhCLEVBQXlCQyxJQUFJRyxRQUE3QixDQUFYO0FBQ0EsVUFBT0gsSUFBSUUsS0FBWDtBQUNBOzs7aUNBRWU7QUFDZixPQUFJLEtBQUtGLEdBQUwsS0FBYSxJQUFqQixFQUF3QixPQUFPLElBQVA7QUFDeEIsT0FBTUEsTUFBTSxLQUFLQSxHQUFqQjtBQUNBLFFBQUtBLEdBQUwsR0FBVywwQkFBVyxLQUFLRCxPQUFoQixFQUF5QkMsSUFBSUcsUUFBN0IsQ0FBWDtBQUNBLFVBQU9ILEdBQVA7QUFDQTs7QUFFRDs7Ozs7Ozt1QkFJT0UsSyxFQUFRO0FBQ2QsT0FBTUUsT0FBTyxtQkFBU0YsS0FBVCxDQUFiO0FBQ0EsVUFBTyxLQUFLRyxhQUFMLENBQW1CRCxJQUFuQixDQUFQO0FBQ0E7OztnQ0FFZUUsRyxFQUFNO0FBQ3JCLFFBQUtOLEdBQUwsR0FBVyxxQkFBTyxLQUFLRCxPQUFaLEVBQXNCLEtBQUtDLEdBQTNCLEVBQWlDTSxHQUFqQyxDQUFYO0FBQ0EsVUFBT0EsR0FBUDtBQUNBOzs7d0JBR09DLEssRUFBUTtBQUNmLFFBQUtGLGFBQUwsQ0FBb0JFLE1BQU1QLEdBQTFCO0FBQ0E7Ozt5QkFHUU0sRyxFQUFNSixLLEVBQVE7O0FBRXRCLE9BQU1NLElBQUksS0FBS1QsT0FBTCxDQUFhRyxLQUFiLEVBQW9CSSxJQUFJSixLQUF4QixDQUFWOztBQUVBLE9BQVVNLElBQUksQ0FBZCxFQUFrQixLQUFLQyxXQUFMLENBQWlCSCxHQUFqQixFQUFzQkosS0FBdEIsRUFBbEIsS0FDSyxJQUFLTSxJQUFJLENBQVQsRUFBYSxLQUFLRSxXQUFMLENBQWlCSixHQUFqQixFQUFzQkosS0FBdEIsRUFBYixLQUNhSSxJQUFJSixLQUFKLEdBQVlBLEtBQVo7QUFFbEI7Ozs4QkFFYUksRyxFQUFNSixLLEVBQVE7QUFDM0IsUUFBS0YsR0FBTCxHQUFXLDJCQUFhLEtBQUtELE9BQWxCLEVBQTRCLEtBQUtDLEdBQWpDLEVBQXVDTSxHQUF2QyxFQUE2Q0osS0FBN0MsQ0FBWDtBQUNBOztBQUVEOzs7Ozs7OzhCQUljSSxHLEVBQU1KLEssRUFBUTs7QUFFM0IsUUFBS1MsTUFBTCxDQUFZTCxHQUFaOztBQUVBQSxPQUFJSixLQUFKLEdBQVlBLEtBQVo7QUFDQUksT0FBSU0sSUFBSixHQUFXLElBQVg7QUFDQU4sT0FBSU8sSUFBSixHQUFXLElBQVg7QUFDQVAsT0FBSUgsUUFBSixDQUFhVSxJQUFiLEdBQW9CLElBQXBCO0FBQ0FQLE9BQUlRLFNBQUosR0FBZ0JSLElBQUlILFFBQXBCOztBQUVBLFFBQUtFLGFBQUwsQ0FBb0JDLEdBQXBCO0FBQ0E7OzswQkFFUUEsRyxFQUFNOztBQUVkLE9BQUtBLFFBQVEsS0FBS04sR0FBbEIsRUFBd0IsT0FBTyxLQUFLZSxHQUFMLEVBQVA7O0FBRXhCLE9BQU1DLFlBQVksMEJBQVcsS0FBS2pCLE9BQWhCLEVBQXlCTyxJQUFJSCxRQUE3QixDQUFsQjs7QUFFQWEsYUFBVUosSUFBVixHQUFpQk4sSUFBSU0sSUFBckI7QUFDQUksYUFBVUgsSUFBVixHQUFpQlAsSUFBSU8sSUFBckI7QUFDQUcsYUFBVUosSUFBVixDQUFlQyxJQUFmLEdBQXNCRyxVQUFVSCxJQUFWLENBQWVELElBQWYsR0FBc0JJLFNBQTVDO0FBRUE7Ozs7OztrQkFuR21CbEIsVyIsImZpbGUiOiJQYWlyaW5nSGVhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICcuL21lcmdlJyA7XG5pbXBvcnQgbWVyZ2VwYWlycyBmcm9tICcuL21lcmdlcGFpcnMnIDtcbmltcG9ydCBkZWNyZWFzZWtleSBmcm9tICcuL2RlY3JlYXNla2V5JyA7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnIDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpcmluZ0hlYXAge1xuXG5cdGNvbnN0cnVjdG9yIChjb21wYXJlKSB7XG5cdFx0dGhpcy5jb21wYXJlID0gY29tcGFyZSA7XG5cdFx0dGhpcy5taW4gPSBudWxsIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBmaW5kLW1pbjogc2ltcGx5IHJldHVybiB0aGUgdG9wIGVsZW1lbnQgb2YgdGhlIGhlYXAuXG5cdCAqL1xuXHRoZWFkICgpIHtcblx0XHRpZiAoIHRoaXMubWluID09PSBudWxsICkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdGhpcy5taW4udmFsdWU7XG5cdH1cblxuXG5cdGhlYWRyZWZlcmVuY2UgKCkge1xuXHRcdHJldHVybiB0aGlzLm1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBkZWxldGUtbWluOiByZW1vdmUgdGhlIHJvb3QgYW5kIG1lcmdlIGl0cyBzdWJ0cmVlcy4gVmFyaW91cyBzdHJhdGVnaWVzXG5cdCAqIGFyZSBlbXBsb3llZC5cblx0ICovXG5cdHBvcCAoKSB7XG5cdFx0aWYgKHRoaXMubWluID09PSBudWxsICkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRjb25zdCBtaW4gPSB0aGlzLm1pbjtcblx0XHR0aGlzLm1pbiA9IG1lcmdlcGFpcnModGhpcy5jb21wYXJlLCBtaW4uY2hpbGRyZW4pO1xuXHRcdHJldHVybiBtaW4udmFsdWU7XG5cdH1cblxuXHRwb3ByZWZlcmVuY2UgKCkge1xuXHRcdGlmICh0aGlzLm1pbiA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IG1pbiA9IHRoaXMubWluO1xuXHRcdHRoaXMubWluID0gbWVyZ2VwYWlycyh0aGlzLmNvbXBhcmUsIG1pbi5jaGlsZHJlbik7XG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBpbnNlcnQ6IGNyZWF0ZSBhIG5ldyBoZWFwIGZvciB0aGUgaW5zZXJ0ZWQgZWxlbWVudCBhbmQgbWVyZ2UgaW50byB0aGVcblx0ICogb3JpZ2luYWwgaGVhcC5cblx0ICovXG5cdHB1c2ggKCB2YWx1ZSApIHtcblx0XHRjb25zdCBub2RlID0gbmV3IE5vZGUodmFsdWUpIDtcblx0XHRyZXR1cm4gdGhpcy5wdXNocmVmZXJlbmNlKG5vZGUpO1xuXHR9XG5cblx0cHVzaHJlZmVyZW5jZSAoIHJlZiApIHtcblx0XHR0aGlzLm1pbiA9IG1lcmdlKCB0aGlzLmNvbXBhcmUgLCB0aGlzLm1pbiAsIHJlZiApIDtcblx0XHRyZXR1cm4gcmVmO1xuXHR9XG5cblxuXHRtZXJnZSAoIG90aGVyICkge1xuXHRcdHRoaXMucHVzaHJlZmVyZW5jZSggb3RoZXIubWluICkgO1xuXHR9XG5cblxuXHR1cGRhdGUgKCByZWYgLCB2YWx1ZSApIHtcblxuXHRcdGNvbnN0IGQgPSB0aGlzLmNvbXBhcmUodmFsdWUsIHJlZi52YWx1ZSkgO1xuXG5cdFx0aWYgICAgICAoIGQgPCAwICkgdGhpcy5kZWNyZWFzZWtleShyZWYsIHZhbHVlKSA7XG5cdFx0ZWxzZSBpZiAoIGQgPiAwICkgdGhpcy5pbmNyZWFzZWtleShyZWYsIHZhbHVlKSA7XG5cdFx0ZWxzZSAgICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWUgO1xuXG5cdH1cblxuXHRkZWNyZWFzZWtleSAoIHJlZiAsIHZhbHVlICkge1xuXHRcdHRoaXMubWluID0gZGVjcmVhc2VrZXkoIHRoaXMuY29tcGFyZSAsIHRoaXMubWluICwgcmVmICwgdmFsdWUgKSA7XG5cdH1cblxuXHQvKipcblx0ICogaW5jcmVhc2Uta2V5OiByZW1vdmUgdGhlIGl0ZW0gYXQgdGhlIGtleSB0byBiZSBkZWNyZWFzZWQsIHJlcGxhY2Vcblx0ICogdGhlIGtleSB3aXRoIGEgc21hbGxlciBrZXksIHRoZW4gbWVyZ2UgdGhlIHJlc3VsdCBiYWNrIGludG8gdGhlIGhlYXAuXG5cdCAqL1xuXHRpbmNyZWFzZWtleSAoIHJlZiAsIHZhbHVlICkge1xuXG5cdFx0dGhpcy5kZWxldGUocmVmKTtcblxuXHRcdHJlZi52YWx1ZSA9IHZhbHVlO1xuXHRcdHJlZi5wcmV2ID0gbnVsbDtcblx0XHRyZWYubmV4dCA9IG51bGw7XG5cdFx0cmVmLmNoaWxkcmVuLm5leHQgPSBudWxsIDtcblx0XHRyZWYubGFzdGNoaWxkID0gcmVmLmNoaWxkcmVuIDtcblxuXHRcdHRoaXMucHVzaHJlZmVyZW5jZSggcmVmICkgO1xuXHR9XG5cblx0ZGVsZXRlICggcmVmICkge1xuXG5cdFx0aWYgKCByZWYgPT09IHRoaXMubWluICkgcmV0dXJuIHRoaXMucG9wKCkgO1xuXG5cdFx0Y29uc3Qgc3VjY2Vzc29yID0gbWVyZ2VwYWlycyh0aGlzLmNvbXBhcmUsIHJlZi5jaGlsZHJlbik7XG5cblx0XHRzdWNjZXNzb3IucHJldiA9IHJlZi5wcmV2IDtcblx0XHRzdWNjZXNzb3IubmV4dCA9IHJlZi5uZXh0IDtcblx0XHRzdWNjZXNzb3IucHJldi5uZXh0ID0gc3VjY2Vzc29yLm5leHQucHJldiA9IHN1Y2Nlc3NvciA7XG5cblx0fVxuXG5cbn1cblxuIl19