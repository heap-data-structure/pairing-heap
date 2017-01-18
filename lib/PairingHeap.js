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
   */

	}, {
		key: 'popreference',
		value: function popreference() {
			if (this.min === null) return null;
			var min = this.min;
			this.min = (0, _mergepairs2.default)(this.compare, min.children); // min.children.next = null
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
   * /!\ ref.next = ref.prev = null which means all references that are
   * external to the tree must reset .next and .prev and one must not call
   * PairingHeap#pushreference with an internal reference from this tree or
   * another, except the root of another tree.
   */

	}, {
		key: 'pushreference',
		value: function pushreference(ref) {
			if (this.min === null) this.min = ref;else {
				// this.min != null != ref
				this.min = (0, _merge2.default)(this.compare, this.min, ref);
			}
			return ref;
		}

		/**
   * Supposes the same comparison function is used in both trees.
   * We can call pushreference since other.min.next = other.min.prev = null.
   */

	}, {
		key: 'merge',
		value: function merge(other) {
			this.pushreference(other.min);
		}

		/**
   * @param {Node} ref Non-null internal node object.
   * @param {Object} value The new value for ref.
   */

	}, {
		key: 'update',
		value: function update(ref, value) {

			var d = this.compare(value, ref.value);

			if (d < 0) this.decreasekey(ref, value);else if (d > 0) this.increasekey(ref, value);else ref.value = value;
		}

		/**
   * @param {Node} ref Non-null internal node object.
   * @param {Object} value The new value for ref.
   */

	}, {
		key: 'decreasekey',
		value: function decreasekey(ref, value) {
			if (ref === this.min) ref.value = value;else {
				// this.min != null, ref != null
				this.min = (0, _decreasekey3.default)(this.compare, this.min, ref, value);
			}
		}

		/**
   * increase-key: remove the item at the key to be decreased, replace
   * the key with a smaller key, then merge the result back into the heap.
   *
   * @param {Node} ref Non-null internal node object.
   * @param {Object} value The new value for ref.
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
   */

	}, {
		key: 'delete',
		value: function _delete(ref) {

			if (ref === this.min) {
				this.popreference();
				return;
			}

			var successor = (0, _mergepairs2.default)(this.compare, ref.children); // ref.children.next = null

			// ref has no children
			if (successor === null) {

				//  _       _       _
				// | | --> | | --> | |
				// |_| <-- |_| <-- |_|
				//  P       R       N

				// detach ref and link ref.prev to ref.next
				//
				//  _               _
				// | | ----------> | |
				// |_| <    _   -> |_|
				//  P   \  | | /  / N
				//       - |_| <-/
				//          R
				//
				ref.prev.next = ref.next; // must be != null because ref != min

				if (ref.next !== null) {
					//
					//  _               _
					// | | ----------> | |
					// |_| <---------- |_|
					//  P       _       N
					//  ^      | | -----^
					//  |----- |_|
					//          R
					//
					ref.next.prev = ref.prev;
					//
					//  _               _
					// | | ----------> | |
					// |_| <---------- |_|
					//  P       _       N
					//  ^      | |
					//  |----- |_|
					//          R
					//
					ref.next = null;
				}

				//
				//  _               _
				// | | ----------> | |
				// |_| <---------- |_|
				//  P       _       N
				//         | |
				//         |_|
				//          R
				//
				ref.prev = null;

				return;
			}

			successor.prev = ref.prev; // must be != null because ref != min
			successor.prev.next = successor;
			ref.prev = null;

			if (ref.next !== null) {
				successor.next = ref.next; // might be null
				successor.next.prev = successor;
				ref.next = null;
			}
		}
	}]);

	return PairingHeap;
}();

exports.default = PairingHeap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYWlyaW5nSGVhcC5qcyJdLCJuYW1lcyI6WyJQYWlyaW5nSGVhcCIsImNvbXBhcmUiLCJtaW4iLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsInBvcHJlZmVyZW5jZSIsImNoaWxkcmVuIiwibm9kZSIsInB1c2hyZWZlcmVuY2UiLCJyZWYiLCJvdGhlciIsImQiLCJkZWNyZWFzZWtleSIsImluY3JlYXNla2V5IiwiZGVsZXRlIiwic3VjY2Vzc29yIiwicHJldiIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxXO0FBRXBCLHNCQUFhQyxPQUFiLEVBQXNCO0FBQUE7O0FBQ3JCLE9BQUtBLE9BQUwsR0FBZUEsT0FBZixDQURxQixDQUNJO0FBQ3pCLE9BQUtDLEdBQUwsR0FBVyxJQUFYLENBRnFCLENBRUk7QUFDekI7O0FBRUQ7Ozs7Ozs7eUJBR1E7QUFDUCxPQUFLLEtBQUtBLEdBQUwsS0FBYSxJQUFsQixFQUF5QixPQUFPQyxTQUFQO0FBQ3pCLFVBQU8sS0FBS0QsR0FBTCxDQUFTRSxLQUFoQjtBQUNBOzs7a0NBR2dCO0FBQ2hCLFVBQU8sS0FBS0YsR0FBWjtBQUNBOztBQUVEOzs7Ozs7O3dCQUlPO0FBQ04sT0FBTUEsTUFBTSxLQUFLRyxZQUFMLEVBQVo7QUFDQSxVQUFPSCxRQUFRLElBQVIsR0FBZUMsU0FBZixHQUEyQkQsSUFBSUUsS0FBdEM7QUFDQTs7QUFFRDs7Ozs7aUNBRWdCO0FBQ2YsT0FBSSxLQUFLRixHQUFMLEtBQWEsSUFBakIsRUFBd0IsT0FBTyxJQUFQO0FBQ3hCLE9BQU1BLE1BQU0sS0FBS0EsR0FBakI7QUFDQSxRQUFLQSxHQUFMLEdBQVcsMEJBQVcsS0FBS0QsT0FBaEIsRUFBeUJDLElBQUlJLFFBQTdCLENBQVgsQ0FIZSxDQUdvQztBQUNuRCxVQUFPSixHQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7dUJBSU9FLEssRUFBUTtBQUNkLE9BQU1HLE9BQU8sbUJB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dEI7QUFDQU4sUUFBSVEsSUFBSixHQUFXLElBQVg7QUFDQTtBQUVEOzs7Ozs7a0JBcE1tQmpCLFciLCJmaWxlIjoiUGFpcmluZ0hlYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVyZ2UgZnJvbSAnLi9tZXJnZScgO1xuaW1wb3J0IG1lcmdlcGFpcnMgZnJvbSAnLi9tZXJnZXBhaXJzJyA7XG5pbXBvcnQgZGVjcmVhc2VrZXkgZnJvbSAnLi9kZWNyZWFzZWtleScgO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJyA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhaXJpbmdIZWFwIHtcblxuXHRjb25zdHJ1Y3RvciAoY29tcGFyZSkge1xuXHRcdHRoaXMuY29tcGFyZSA9IGNvbXBhcmUgOyAvLyBjb21wYXJpc29uIGZ1bmN0aW9uXG5cdFx0dGhpcy5taW4gPSBudWxsIDsgICAgICAgIC8vIHJvb3Qgbm9kZSwgbXVzdCBoYXZlIC5wcmV2ID0gLm5leHQgPSBudWxsIGF0IGFsbCB0aW1lc1xuXHR9XG5cblx0LyoqXG5cdCAqIGZpbmQtbWluOiBzaW1wbHkgcmV0dXJuIHRoZSB0b3AgZWxlbWVudCBvZiB0aGUgaGVhcC5cblx0ICovXG5cdGhlYWQgKCkge1xuXHRcdGlmICggdGhpcy5taW4gPT09IG51bGwgKSByZXR1cm4gdW5kZWZpbmVkO1xuXHRcdHJldHVybiB0aGlzLm1pbi52YWx1ZTtcblx0fVxuXG5cblx0aGVhZHJlZmVyZW5jZSAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWluO1xuXHR9XG5cblx0LyoqXG5cdCAqIGRlbGV0ZS1taW46IHJlbW92ZSB0aGUgcm9vdCBhbmQgbWVyZ2UgaXRzIHN1YnRyZWVzLiBWYXJpb3VzIHN0cmF0ZWdpZXNcblx0ICogYXJlIGVtcGxveWVkLlxuXHQgKi9cblx0cG9wICgpIHtcblx0XHRjb25zdCBtaW4gPSB0aGlzLnBvcHJlZmVyZW5jZSgpO1xuXHRcdHJldHVybiBtaW4gPT09IG51bGwgPyB1bmRlZmluZWQgOiBtaW4udmFsdWUgO1xuXHR9XG5cblx0LyoqXG5cdCAqL1xuXHRwb3ByZWZlcmVuY2UgKCkge1xuXHRcdGlmICh0aGlzLm1pbiA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IG1pbiA9IHRoaXMubWluO1xuXHRcdHRoaXMubWluID0gbWVyZ2VwYWlycyh0aGlzLmNvbXBhcmUsIG1pbi5jaGlsZHJlbik7IC8vIG1pbi5jaGlsZHJlbi5uZXh0ID0gbnVsbFxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHQvKipcblx0ICogaW5zZXJ0OiBjcmVhdGUgYSBuZXcgaGVhcCBmb3IgdGhlIGluc2VydGVkIGVsZW1lbnQgYW5kIG1lcmdlIGludG8gdGhlXG5cdCAqIG9yaWdpbmFsIGhlYXAuXG5cdCAqL1xuXHRwdXNoICggdmFsdWUgKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IG5ldyBOb2RlKHZhbHVlKSA7XG5cdFx0cmV0dXJuIHRoaXMucHVzaHJlZmVyZW5jZShub2RlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiAvIVxcIHJlZi5uZXh0ID0gcmVmLnByZXYgPSBudWxsIHdoaWNoIG1lYW5zIGFsbCByZWZlcmVuY2VzIHRoYXQgYXJlXG5cdCAqIGV4dGVybmFsIHRvIHRoZSB0cmVlIG11c3QgcmVzZXQgLm5leHQgYW5kIC5wcmV2IGFuZCBvbmUgbXVzdCBub3QgY2FsbFxuXHQgKiBQYWlyaW5nSGVhcCNwdXNocmVmZXJlbmNlIHdpdGggYW4gaW50ZXJuYWwgcmVmZXJlbmNlIGZyb20gdGhpcyB0cmVlIG9yXG5cdCAqIGFub3RoZXIsIGV4Y2VwdCB0aGUgcm9vdCBvZiBhbm90aGVyIHRyZWUuXG5cdCAqL1xuXHRwdXNocmVmZXJlbmNlICggcmVmICkge1xuXHRcdGlmICh0aGlzLm1pbiA9PT0gbnVsbCkgdGhpcy5taW4gPSByZWY7XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyB0aGlzLm1pbiAhPSBudWxsICE9IHJlZlxuXHRcdFx0dGhpcy5taW4gPSBtZXJnZSggdGhpcy5jb21wYXJlICwgdGhpcy5taW4gLCByZWYgKSA7XG5cdFx0fVxuXHRcdHJldHVybiByZWY7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBTdXBwb3NlcyB0aGUgc2FtZSBjb21wYXJpc29uIGZ1bmN0aW9uIGlzIHVzZWQgaW4gYm90aCB0cmVlcy5cblx0ICogV2UgY2FuIGNhbGwgcHVzaHJlZmVyZW5jZSBzaW5jZSBvdGhlci5taW4ubmV4dCA9IG90aGVyLm1pbi5wcmV2ID0gbnVsbC5cblx0ICovXG5cdG1lcmdlICggb3RoZXIgKSB7XG5cdFx0dGhpcy5wdXNocmVmZXJlbmNlKCBvdGhlci5taW4gKSA7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05vZGV9IHJlZiBOb24tbnVsbCBpbnRlcm5hbCBub2RlIG9iamVjdC5cblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHJlZi5cblx0ICovXG5cdHVwZGF0ZSAoIHJlZiAsIHZhbHVlICkge1xuXG5cdFx0Y29uc3QgZCA9IHRoaXMuY29tcGFyZSh2YWx1ZSwgcmVmLnZhbHVlKSA7XG5cblx0XHRpZiAgICAgICggZCA8IDAgKSB0aGlzLmRlY3JlYXNla2V5KHJlZiwgdmFsdWUpIDtcblx0XHRlbHNlIGlmICggZCA+IDAgKSB0aGlzLmluY3JlYXNla2V5KHJlZiwgdmFsdWUpIDtcblx0XHRlbHNlICAgICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge05vZGV9IHJlZiBOb24tbnVsbCBpbnRlcm5hbCBub2RlIG9iamVjdC5cblx0ICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSBuZXcgdmFsdWUgZm9yIHJlZi5cblx0ICovXG5cdGRlY3JlYXNla2V5ICggcmVmICwgdmFsdWUgKSB7XG5cdFx0aWYgKHJlZiA9PT0gdGhpcy5taW4pIHJlZi52YWx1ZSA9IHZhbHVlIDtcblx0XHRlbHNlIHtcblx0XHRcdC8vIHRoaXMubWluICE9IG51bGwsIHJlZiAhPSBudWxsXG5cdFx0XHR0aGlzLm1pbiA9IGRlY3JlYXNla2V5KCB0aGlzLmNvbXBhcmUgLCB0aGlzLm1pbiAsIHJlZiAsIHZhbHVlICkgO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBpbmNyZWFzZS1rZXk6IHJlbW92ZSB0aGUgaXRlbSBhdCB0aGUga2V5IHRvIGJlIGRlY3JlYXNlZCwgcmVwbGFjZVxuXHQgKiB0aGUga2V5IHdpdGggYSBzbWFsbGVyIGtleSwgdGhlbiBtZXJnZSB0aGUgcmVzdWx0IGJhY2sgaW50byB0aGUgaGVhcC5cblx0ICpcblx0ICogQHBhcmFtIHtOb2RlfSByZWYgTm9uLW51bGwgaW50ZXJuYWwgbm9kZSBvYmplY3QuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgbmV3IHZhbHVlIGZvciByZWYuXG5cdCAqXG5cdCAqL1xuXHRpbmNyZWFzZWtleSAoIHJlZiAsIHZhbHVlICkge1xuXG5cdFx0dGhpcy5kZWxldGUocmVmKTtcblxuXHRcdHJlZi52YWx1ZSA9IHZhbHVlO1xuXG5cdFx0dGhpcy5wdXNocmVmZXJlbmNlKCByZWYgKSA7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiByZWYgbXVzdCBiZSBpbnRlcm5hbFxuXHQgKiByZWYucHJldiBhbmQgcmVmLm5leHQgZ2V0IHJlc2V0IHRvIG51bGxcblx0ICovXG5cdGRlbGV0ZSAoIHJlZiApIHtcblxuXHRcdGlmICggcmVmID09PSB0aGlzLm1pbiApIHtcblx0XHRcdHRoaXMucG9wcmVmZXJlbmNlKCkgO1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cblx0XHRjb25zdCBzdWNjZXNzb3IgPSBtZXJnZXBhaXJzKHRoaXMuY29tcGFyZSwgcmVmLmNoaWxkcmVuKTsgLy8gcmVmLmNoaWxkcmVuLm5leHQgPSBudWxsXG5cblx0XHQvLyByZWYgaGFzIG5vIGNoaWxkcmVuXG5cdFx0aWYgKHN1Y2Nlc3NvciA9PT0gbnVsbCkge1xuXG5cdFx0XHQvLyAgXyAgICAgICBfICAgICAgIF9cblx0XHRcdC8vIHwgfCAtLT4gfCB8IC0tPiB8IHxcblx0XHRcdC8vIHxffCA8LS0gfF98IDwtLSB8X3xcblx0XHRcdC8vICBQICAgICAgIFIgICAgICAgTlxuXG5cdFx0XHQvLyBkZXRhY2ggcmVmIGFuZCBsaW5rIHJlZi5wcmV2IHRvIHJlZi5uZXh0XG5cdFx0XHQvL1xuXHRcdFx0Ly8gIF8gICAgICAgICAgICAgICBfXG5cdFx0XHQvLyB8IHwgLS0tLS0tLS0tLT4gfCB8XG5cdFx0XHQvLyB8X3wgPCAgICBfICAgLT4gfF98XG5cdFx0XHQvLyAgUCAgIFxcICB8IHwgLyAgLyBOXG5cdFx0XHQvLyAgICAgICAtIHxffCA8LS9cblx0XHRcdC8vICAgICAgICAgIFJcblx0XHRcdC8vXG5cdFx0XHRyZWYucHJldi5uZXh0ID0gcmVmLm5leHQgOyAvLyBtdXN0IGJlICE9IG51bGwgYmVjYXVzZSByZWYgIT0gbWluXG5cblx0XHRcdGlmIChyZWYubmV4dCAhPT0gbnVsbCkge1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyAgXyAgICAgICAgICAgICAgIF9cblx0XHRcdFx0Ly8gfCB8IC0tLS0tLS0tLS0+IHwgfFxuXHRcdFx0XHQvLyB8X3wgPC0tLS0tLS0tLS0gfF98XG5cdFx0XHRcdC8vICBQICAgICAgIF8gICAgICAgTlxuXHRcdFx0XHQvLyAgXiAgICAgIHwgfCAtLS0tLV5cblx0XHRcdFx0Ly8gIHwtLS0tLSB8X3xcblx0XHRcdFx0Ly8gICAgICAgICAgUlxuXHRcdFx0XHQvL1xuXHRcdFx0XHRyZWYubmV4dC5wcmV2ID0gcmVmLnByZXYgO1xuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyAgXyAgICAgICAgICAgICAgIF9cblx0XHRcdFx0Ly8gfCB8IC0tLS0tLS0tLS0+IHwgfFxuXHRcdFx0XHQvLyB8X3wgPC0tLS0tLS0tLS0gfF98XG5cdFx0XHRcdC8vICBQICAgICAgIF8gICAgICAgTlxuXHRcdFx0XHQvLyAgXiAgICAgIHwgfFxuXHRcdFx0XHQvLyAgfC0tLS0tIHxffFxuXHRcdFx0XHQvLyAgICAgICAgICBSXG5cdFx0XHRcdC8vXG5cdFx0XHRcdHJlZi5uZXh0ID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly9cblx0XHRcdC8vICBfICAgICAgICAgICAgICAgX1xuXHRcdFx0Ly8gfCB8IC0tLS0tLS0tLS0+IHwgfFxuXHRcdFx0Ly8gfF98IDwtLS0tLS0tLS0tIHxffFxuXHRcdFx0Ly8gIFAgICAgICAgXyAgICAgICBOXG5cdFx0XHQvLyAgICAgICAgIHwgfFxuXHRcdFx0Ly8gICAgICAgICB8X3xcblx0XHRcdC8vICAgICAgICAgIFJcblx0XHRcdC8vXG5cdFx0XHRyZWYucHJldiA9IG51bGw7XG5cblx0XHRcdHJldHVybjtcblxuXHRcdH1cblxuXHRcdHN1Y2Nlc3Nvci5wcmV2ID0gcmVmLnByZXYgOyAvLyBtdXN0IGJlICE9IG51bGwgYmVjYXVzZSByZWYgIT0gbWluXG5cdFx0c3VjY2Vzc29yLnByZXYubmV4dCA9IHN1Y2Nlc3NvciA7XG5cdFx0cmVmLnByZXYgPSBudWxsO1xuXG5cdFx0aWYgKHJlZi5uZXh0ICE9PSBudWxsKSB7XG5cdFx0XHRzdWNjZXNzb3IubmV4dCA9IHJlZi5uZXh0IDsgLy8gbWlnaHQgYmUgbnVsbFxuXHRcdFx0c3VjY2Vzc29yLm5leHQucHJldiA9IHN1Y2Nlc3NvciA7XG5cdFx0XHRyZWYubmV4dCA9IG51bGw7XG5cdFx0fVxuXG5cdH1cblxuXG59XG4iXX0=