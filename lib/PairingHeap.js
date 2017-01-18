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

		this.compare = compare; // comparison function
		this.min = null; // root node, must have .prev = .next = null at all times
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
			var min = this.popreference();
			return min === null ? undefined : min.value;
		}

		/**
   * min.prev and min.next get reset to null
   * min.children.next = null
   */

	}, {
		key: 'popreference',
		value: function popreference() {
			if (this.min === null) return null;
			var min = this.min;
			this.min = (0, _mergepairs2.default)(this.compare, min.children);
			min.prev = null;
			min.next = null;
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

		/**
   * /!\ ref.next = ref.prev = null
   * which means all references that get out of the tree must reset .next and
   * .prev and one must not call PairingHeap#pushreference with a reference
   * from inside this tree or another, except the root of another tree.
   */

	}, {
		key: 'pushreference',
		value: function pushreference(ref) {
			this.min = (0, _merge2.default)(this.compare, this.min, ref);
			return ref;
		}

		/**
   * We can call pushreference since other.min.next = other.min.prev = null.
   */

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

		/**
   * ref must be internal
   *
   */

	}, {
		key: 'decreasekey',
		value: function decreasekey(ref, value) {
			if (ref === this.min) ref.value = value;else this.min = (0, _decreasekey3.default)(this.compare, this.min, ref, value);
		}

		/**
   * increase-key: remove the item at the key to be decreased, replace
   * the key with a smaller key, then merge the result back into the heap.
   *
   * ref must be internal
   *
   */

	}, {
		key: 'increasekey',
		value: function increasekey(ref, value) {

			this.delete(ref);

			ref.value = value;

			this.pushreference(ref);
		}

		/**
   * ref must be internal
   * ref.prev and ref.next get reset to null
   * ref.children.next = null
   */

	}, {
		key: 'delete',
		value: function _delete(ref) {

			if (ref === this.min) {
				this.pop();
				return;
			}

			console.log(ref.prev === null, ref.next === null);
			var successor = (0, _mergepairs2.default)(this.compare, ref.children);
			console.log(ref.prev === null, ref.next === null);

			// ref might be a leaf node
			if (successor === null) {
				ref.prev = null;
				ref.next = null;
				return;
			}

			successor.prev = ref.prev; // must be !== null because of FakeNode
			successor.next = ref.next;
			successor.prev.next = successor;
			if (successor.next !== null) successor.next.prev = successor;

			ref.prev = null;
			ref.next = null;
		}
	}]);

	return PairingHeap;
}();

exports.default = PairingHeap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWlyaW5nSGVhcC5qcyJdLCJuYW1lcyI6WyJQYWlyaW5nSGVhcCIsImNvbXBhcmUiLCJtaW4iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsInBvcHJlZmVyZW5jZSIsImNoaWxkcmVuIiwicHJldiIsIm5leHQiLCJub2RlIiwicHVzaHJlZmVyZW5jZSIsInJlZiIsIm90aGVyIiwiZCIsImRlY3JlYXNla2V5IiwiaW5jcmVhc2VrZXkiLCJkZWxldGUiLCJwb3AiLCJjb25zb2xlIiwibG9nIiwic3VjY2Vzc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVxQkEsVztBQUVwQixzQkFBYUMsT0FBYixFQUFzQjtBQUFBOztBQUNyQixPQUFLQSxPQUFMLEdBQWVBLE9BQWYsQ0FEcUIsQ0FDSTtBQUN6QixPQUFLQyxHQUFMLEdBQVcsSUFBWCxDQUZxQixDQUVJO0FBQ3pCOztBQUVEOzs7Ozs7O3lCQUdRO0FBQ1AsT0FBSyxLQUFLQSxHQUFMLEtBQWEsSUFBbEIsRUFBeUIsT0FBT0MsU0FBUDtBQUN6QixVQUFPLEtBQUtELEdBQUwsQ0FBU0UsS0FBaEI7QUFDQTs7O2tDQUdnQjtBQUNoQixVQUFPLEtBQUtGLEdBQVo7QUFDQTs7QUFFRDs7Ozs7Ozt3QkFJTztBQUNOLE9BQU1BLE1BQU0sS0FBS0csWUFBTCxFQUFaO0FBQ0EsVUFBT0gsUUFBUSxJQUFSLEdBQWVDLFNBQWYsR0FBMkJELElBQUlFLEtBQXRDO0FBQ0E7O0FBRUQ7Ozs7Ozs7aUNBSWdCO0FBQ2YsT0FBSSxLQUFLRixHQUFMLEtBQWEsSUFBakIsRUFBd0IsT0FBTyxJQUFQO0FBQ3hCLE9BQU1BLE1BQU0sS0FBS0EsR0FBakI7QUFDQSxRQUFLQSxHQUFMLEdBQVcsMEJBQVcsS0FBS0QsT0FBaEIsRUFBeUJDLElBQUlJLFFBQTdCLENBQVg7QUFDQUosT0FBSUssSUFBSixHQUFXLElBQVg7QUFDQUwsT0FBSU0sSUFBSixHQUFXLElBQVg7QUFDQSxVQUFPTixHQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7dUJBSU9FLEssRUFBUTtBQUNkLE9BQU1LLE9BQU8sbUJBQVNMLEtBQVQsQ0FBYjtBQUNBLFVBQU8sS0FBS00sYUFBTCxDQUFtQkQsSUFBbkIsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7Ozs7Z0NBTWdCRSxHLEVBQU07QUFDckIsUUFBS1QsR0FBTCxHQUFXLHFCQUFPLEtBQUtELE9BQVosRUFBc0IsS0FBS0MsR0FBM0IsRUFBaUNTLEdBQWpDLENBQVg7QUFDQSxVQUFPQSxHQUFQO0FBQ0E7O0FBR0Q7Ozs7Ozt3QkFHUUMsSyxFQUFRO0FBQ2YsUUFBS0YsYUFBTCxDQUFvQkUsTUFBTVYsR0FBMUI7QUFDQTs7O3lCQUdRUyxHLEVBQU1QLEssRUFBUTs7QUFFdEIsT0FBTVMsSUFBSSxLQUFLWixPQUFMLENBQWFHLEtBQWIsRUFBb0JPLElBQUlQLEtBQXhCLENBQVY7O0FBRUEsT0FBVVMsSUFBSSxDQUFkLEVBQWtCLEtBQUtDLFdBQUwsQ0FBaUJILEdBQWpCLEVBQXNCUCxLQUF0QixFQUFsQixLQUNLLElBQUtTLElBQUksQ0FBVCxFQUFhLEtBQUtFLFdBQUwsQ0FBaUJKLEdBQWpCLEVBQXNCUCxLQUF0QixFQUFiLEtBQ2FPLElBQUlQLEtBQUosR0FBWUEsS0FBWjtBQUVsQjs7QUFFRDs7Ozs7Ozs4QkFJY08sRyxFQUFNUCxLLEVBQVE7QUFDM0IsT0FBSU8sUUFBUSxLQUFLVCxHQUFqQixFQUFzQlMsSUFBSVAsS0FBSixHQUFZQSxLQUFaLENBQXRCLEtBQ0ssS0FBS0YsR0FBTCxHQUFXLDJCQUFhLEtBQUtELE9BQWxCLEVBQTRCLEtBQUtDLEdBQWpDLEVBQXVDUyxHQUF2QyxFQUE2Q1AsS0FBN0MsQ0FBWDtBQUNMOztBQUVEOzs7Ozs7Ozs7OzhCQU9jTyxHLEVBQU1QLEssRUFBUTs7QUFFM0IsUUFBS1ksTUFBTCxDQUFZTCxHQUFaOztBQUVBQSxPQUFJUCxLQUFKLEdBQVlBLEtBQVo7O0FBRUEsUUFBS00sYUFBTCxDQUFvQkMsR0FBcEI7QUFFQTs7QUFFRDs7Ozs7Ozs7MEJBS1NBLEcsRUFBTTs7QUFFZCxPQUFLQSxRQUFRLEtBQUtULEdBQWxCLEVBQXdCO0FBQ3ZCLFNBQUtlLEdBQUw7QUFDQTtBQUNBOztBQUVEQyxXQUFRQyxHQUFSLENBQVlSLElBQUlKLElBQUosS0FBYSxJQUF6QixFQUFnQ0ksSUFBSUgsSUFBSixLQUFhLElBQTdDO0FBQ0EsT0FBTVksWUFBWSwwQkFBVyxLQUFLbkIsT0FBaEIsRUFBeUJVLElBQUlMLFFBQTdCLENBQWxCO0FBQ0FZLFdBQVFDLEdBQVIsQ0FBWVIsSUFBSUosSUFBSixLQUFhLElBQXpCLEVBQWdDSSxJQUFJSCxJQUFKLEtBQWEsSUFBN0M7O0FBRUE7QUFDQSxPQUFJWSxjQUFjLElBQWxCLEVBQXdCO0FBQ3ZCVCxRQUFJSixJQUFKLEdBQVcsSUFBWDtBQUNBSSxRQUFJSCxJQUFKLEdBQVcsSUFBWDtBQUNBO0FBQ0E7O0FBRURZLGFBQVViLElBQVYsR0FBaUJJLElBQUlKLElBQXJCLENBbEJjLENBa0JjO0FBQzVCYSxhQUFVWixJQUFWLEdBQWlCRyxJQUFJSCxJQUFyQjtBQUNBWSxhQUFVYixJQUFWLENBQWVDLElBQWYsR0FBc0JZLFNBQXRCO0FBQ0EsT0FBSUEsVUFBVVosSUFBVixLQUFtQixJQUF2QixFQUE2QlksVUFBVVosSUFBVixDQUFlRCxJQUFmLEdBQXNCYSxTQUF0Qjs7QUFFN0JULE9BQUlKLElBQUosR0FBVyxJQUFYO0FBQ0FJLE9BQUlILElBQUosR0FBVyxJQUFYO0FBRUE7Ozs7OztrQkExSW1CUixXIiwiZmlsZSI6IlBhaXJpbmdIZWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJy4vbWVyZ2UnIDtcbmltcG9ydCBtZXJnZXBhaXJzIGZyb20gJy4vbWVyZ2VwYWlycycgO1xuaW1wb3J0IGRlY3JlYXNla2V5IGZyb20gJy4vZGVjcmVhc2VrZXknIDtcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZScgO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWlyaW5nSGVhcCB7XG5cblx0Y29uc3RydWN0b3IgKGNvbXBhcmUpIHtcblx0XHR0aGlzLmNvbXBhcmUgPSBjb21wYXJlIDsgLy8gY29tcGFyaXNvbiBmdW5jdGlvblxuXHRcdHRoaXMubWluID0gbnVsbCA7ICAgICAgICAvLyByb290IG5vZGUsIG11c3QgaGF2ZSAucHJldiA9IC5uZXh0ID0gbnVsbCBhdCBhbGwgdGltZXNcblx0fVxuXG5cdC8qKlxuXHQgKiBmaW5kLW1pbjogc2ltcGx5IHJldHVybiB0aGUgdG9wIGVsZW1lbnQgb2YgdGhlIGhlYXAuXG5cdCAqL1xuXHRoZWFkICgpIHtcblx0XHRpZiAoIHRoaXMubWluID09PSBudWxsICkgcmV0dXJuIHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdGhpcy5taW4udmFsdWU7XG5cdH1cblxuXG5cdGhlYWRyZWZlcmVuY2UgKCkge1xuXHRcdHJldHVybiB0aGlzLm1pbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBkZWxldGUtbWluOiByZW1vdmUgdGhlIHJvb3QgYW5kIG1lcmdlIGl0cyBzdWJ0cmVlcy4gVmFyaW91cyBzdHJhdGVnaWVzXG5cdCAqIGFyZSBlbXBsb3llZC5cblx0ICovXG5cdHBvcCAoKSB7XG5cdFx0Y29uc3QgbWluID0gdGhpcy5wb3ByZWZlcmVuY2UoKTtcblx0XHRyZXR1cm4gbWluID09PSBudWxsID8gdW5kZWZpbmVkIDogbWluLnZhbHVlIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBtaW4ucHJldiBhbmQgbWluLm5leHQgZ2V0IHJlc2V0IHRvIG51bGxcblx0ICogbWluLmNoaWxkcmVuLm5leHQgPSBudWxsXG5cdCAqL1xuXHRwb3ByZWZlcmVuY2UgKCkge1xuXHRcdGlmICh0aGlzLm1pbiA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IG1pbiA9IHRoaXMubWluO1xuXHRcdHRoaXMubWluID0gbWVyZ2VwYWlycyh0aGlzLmNvbXBhcmUsIG1pbi5jaGlsZHJlbik7XG5cdFx0bWluLnByZXYgPSBudWxsO1xuXHRcdG1pbi5uZXh0ID0gbnVsbDtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIGluc2VydDogY3JlYXRlIGEgbmV3IGhlYXAgZm9yIHRoZSBpbnNlcnRlZCBlbGVtZW50IGFuZCBtZXJnZSBpbnRvIHRoZVxuXHQgKiBvcmlnaW5hbCBoZWFwLlxuXHQgKi9cblx0cHVzaCAoIHZhbHVlICkge1xuXHRcdGNvbnN0IG5vZGUgPSBuZXcgTm9kZSh2YWx1ZSkgO1xuXHRcdHJldHVybiB0aGlzLnB1c2hyZWZlcmVuY2Uobm9kZSk7XG5cdH1cblxuXHQvKipcblx0ICogLyFcXCByZWYubmV4dCA9IHJlZi5wcmV2ID0gbnVsbFxuXHQgKiB3aGljaCBtZWFucyBhbGwgcmVmZXJlbmNlcyB0aGF0IGdldCBvdXQgb2YgdGhlIHRyZWUgbXVzdCByZXNldCAubmV4dCBhbmRcblx0ICogLnByZXYgYW5kIG9uZSBtdXN0IG5vdCBjYWxsIFBhaXJpbmdIZWFwI3B1c2hyZWZlcmVuY2Ugd2l0aCBhIHJlZmVyZW5jZVxuXHQgKiBmcm9tIGluc2lkZSB0aGlzIHRyZWUgb3IgYW5vdGhlciwgZXhjZXB0IHRoZSByb290IG9mIGFub3RoZXIgdHJlZS5cblx0ICovXG5cdHB1c2hyZWZlcmVuY2UgKCByZWYgKSB7XG5cdFx0dGhpcy5taW4gPSBtZXJnZSggdGhpcy5jb21wYXJlICwgdGhpcy5taW4gLCByZWYgKSA7XG5cdFx0cmV0dXJuIHJlZjtcblx0fVxuXG5cblx0LyoqXG5cdCAqIFdlIGNhbiBjYWxsIHB1c2hyZWZlcmVuY2Ugc2luY2Ugb3RoZXIubWluLm5leHQgPSBvdGhlci5taW4ucHJldiA9IG51bGwuXG5cdCAqL1xuXHRtZXJnZSAoIG90aGVyICkge1xuXHRcdHRoaXMucHVzaHJlZmVyZW5jZSggb3RoZXIubWluICkgO1xuXHR9XG5cblxuXHR1cGRhdGUgKCByZWYgLCB2YWx1ZSApIHtcblxuXHRcdGNvbnN0IGQgPSB0aGlzLmNvbXBhcmUodmFsdWUsIHJlZi52YWx1ZSkgO1xuXG5cdFx0aWYgICAgICAoIGQgPCAwICkgdGhpcy5kZWNyZWFzZWtleShyZWYsIHZhbHVlKSA7XG5cdFx0ZWxzZSBpZiAoIGQgPiAwICkgdGhpcy5pbmNyZWFzZWtleShyZWYsIHZhbHVlKSA7XG5cdFx0ZWxzZSAgICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogcmVmIG11c3QgYmUgaW50ZXJuYWxcblx0ICpcblx0ICovXG5cdGRlY3JlYXNla2V5ICggcmVmICwgdmFsdWUgKSB7XG5cdFx0aWYgKHJlZiA9PT0gdGhpcy5taW4pIHJlZi52YWx1ZSA9IHZhbHVlIDtcblx0XHRlbHNlIHRoaXMubWluID0gZGVjcmVhc2VrZXkoIHRoaXMuY29tcGFyZSAsIHRoaXMubWluICwgcmVmICwgdmFsdWUgKSA7XG5cdH1cblxuXHQvKipcblx0ICogaW5jcmVhc2Uta2V5OiByZW1vdmUgdGhlIGl0ZW0gYXQgdGhlIGtleSB0byBiZSBkZWNyZWFzZWQsIHJlcGxhY2Vcblx0ICogdGhlIGtleSB3aXRoIGEgc21hbGxlciBrZXksIHRoZW4gbWVyZ2UgdGhlIHJlc3VsdCBiYWNrIGludG8gdGhlIGhlYXAuXG5cdCAqXG5cdCAqIHJlZiBtdXN0IGJlIGludGVybmFsXG5cdCAqXG5cdCAqL1xuXHRpbmNyZWFzZWtleSAoIHJlZiAsIHZhbHVlICkge1xuXG5cdFx0dGhpcy5kZWxldGUocmVmKTtcblxuXHRcdHJlZi52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5wdXNocmVmZXJlbmNlKCByZWYgKSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiByZWYgbXVzdCBiZSBpbnRlcm5hbFxuXHQgKiByZWYucHJldiBhbmQgcmVmLm5leHQgZ2V0IHJlc2V0IHRvIG51bGxcblx0ICogcmVmLmNoaWxkcmVuLm5leHQgPSBudWxsXG5cdCAqL1xuXHRkZWxldGUgKCByZWYgKSB7XG5cblx0XHRpZiAoIHJlZiA9PT0gdGhpcy5taW4gKSB7XG5cdFx0XHR0aGlzLnBvcCgpIDtcblx0XHRcdHJldHVybiA7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2cocmVmLnByZXYgPT09IG51bGwgLCByZWYubmV4dCA9PT0gbnVsbCk7XG5cdFx0Y29uc3Qgc3VjY2Vzc29yID0gbWVyZ2VwYWlycyh0aGlzLmNvbXBhcmUsIHJlZi5jaGlsZHJlbik7XG5cdFx0Y29uc29sZS5sb2cocmVmLnByZXYgPT09IG51bGwgLCByZWYubmV4dCA9PT0gbnVsbCk7XG5cblx0XHQvLyByZWYgbWlnaHQgYmUgYSBsZWFmIG5vZGVcblx0XHRpZiAoc3VjY2Vzc29yID09PSBudWxsKSB7XG5cdFx0XHRyZWYucHJldiA9IG51bGw7XG5cdFx0XHRyZWYubmV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VjY2Vzc29yLnByZXYgPSByZWYucHJldiA7IC8vIG11c3QgYmUgIT09IG51bGwgYmVjYXVzZSBvZiBGYWtlTm9kZVxuXHRcdHN1Y2Nlc3Nvci5uZXh0ID0gcmVmLm5leHQgO1xuXHRcdHN1Y2Nlc3Nvci5wcmV2Lm5leHQgPSBzdWNjZXNzb3IgO1xuXHRcdGlmIChzdWNjZXNzb3IubmV4dCAhPT0gbnVsbCkgc3VjY2Vzc29yLm5leHQucHJldiA9IHN1Y2Nlc3NvciA7XG5cblx0XHRyZWYucHJldiA9IG51bGw7XG5cdFx0cmVmLm5leHQgPSBudWxsO1xuXG5cdH1cblxuXG59XG5cbiJdfQ==