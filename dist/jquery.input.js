(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  // 	return x;
  // }

  function isArray(value) {
    return $.isArray(value);
  }
  function isObject(value) {
    return !isArray(value) && value instanceof Object;
  } // export function isFunction(value) {
  // 	return value instanceof Function;
  // }
  // export function toInt(value) {
  // 	return parseInt(value, 10);
  // }
  // export function bind(f, object) {
  // 	return function (...args) {
  // 		return f.apply(object, args);
  // 	};
  // }
  // export function partial(f, ...args) {
  // 	if (isFunction(f)) {
  // 		return (...args1) => f(...args.concat(args1));
  // 	}
  // 	return undefined;
  // }
  // export function argumentsToArray(args) {
  // 	const array = []; let
  // 		i;
  // 	for (i = 0; i < args.length; i += 1) {
  // 		array.push(args[i]);
  // 	}
  // 	return array;
  // }
  // export function isEmpty(object) {
  // 	return Object.keys(object).length === 0;
  // }
  // export function isNumeric(candidate) {
  // 	return !Number.isNaN(candidate);
  // }
  // export function isInteger(candidate) {
  // 	return isNumeric(candidate) && Number(candidate) % 1 === 0;
  // }

  function indexOf(object, value) {
    return $.inArray(value, object);
  }
  function inArray(array, value) {
    return indexOf(array, value) !== -1;
  } // // deep copy of json objects
  // export function copy(object) {
  // 	return $.extend(true, {}, object);
  // }
  // export function shallowCopy(objects) {
  // 	return map(objects, identity);
  // }

  function foreach(collection, callback) {
    if (collection) {
      Object.keys(collection).forEach(function (i) {
        return callback(collection[i], i, collection);
      });
    }
  } // export function range(a, b) {
  // 	let i; let start; let end; const
  // 		array = [];
  // 	if (b === undefined) {
  // 		start = 0;
  // 		end = a - 1;
  // 	} else {
  // 		start = a;
  // 		end = b;
  // 	}
  // 	for (i = start; i <= end; i += 1) {
  // 		array.push(i);
  // 	}
  // 	return array;
  // }
  // export function reverse(array) {
  // 	const reversed = []; let
  // 		i;
  // 	for (i = array.length - 1; i >= 0; i -= 1) {
  // 		reversed.push(array[i]);
  // 	}
  // 	return reversed;
  // }

  function last(array) {
    return array[array.length - 1];
  }
  function mapToArray(collection, callback) {
    var mapped = [];
    foreach(collection, function (value, key, coll) {
      mapped.push(callback(value, key, coll));
    });
    return mapped;
  }
  function mapToObject(collection, callback, keyCallback) {
    var mapped = {};
    foreach(collection, function (value, key, coll) {
      // eslint-disable-next-line no-param-reassign
      key = keyCallback ? keyCallback(key, value) : key;
      mapped[key] = callback(value, key, coll);
    });
    return mapped;
  } // export function appendKey(appendingString, collection) {
  // 	return map(collection, identity, key => appendingString + key);
  // }

  function map(collection, callback, keyCallback) {
    return isArray(collection) ? mapToArray(collection, callback) : mapToObject(collection, callback, keyCallback);
  } // export function pluck(collection, key) {
  // 	return map(collection, value => value[key]);
  // }

  function call(collection, functionName, args) {
    return map(collection, function (object) {
      return object[functionName].apply(object, _toConsumableArray(args || []));
    });
  } // export function keys(collection) {
  // 	return mapToArray(collection, (val, key) => key);
  // }
  // export function values(collection) {
  // 	return mapToArray(collection, val => val);
  // }
  // export function reduce(collection, callback, initialAccumulation) {
  // 	let accumulation = initialAccumulation;
  // 	foreach(collection, (val, key) => {
  // 		accumulation = callback(accumulation, val, key, collection);
  // 	});
  // 	return accumulation;
  // }
  // export function filter(collection, callback) {
  // 	let filtered;
  // 	if (isArray(collection)) {
  // 		filtered = [];
  // 		foreach(collection, (val, key, coll) => {
  // 			if (callback(val, key, coll)) {
  // 				filtered.push(val);
  // 			}
  // 		});
  // 	} else {
  // 		filtered = {};
  // 		foreach(collection, (val, key, coll) => {
  // 			if (callback(val, key, coll)) {
  // 				filtered[key] = val;
  // 			}
  // 		});
  // 	}
  // 	return filtered;
  // }
  // export function union(...args) {
  // 	const united = {}; let
  // 		i;
  // 	for (i = 0; i < args.length; i += 1) {
  // 		foreach(args[i], (value, key) => {
  // 			united[key] = value;
  // 		});
  // 	}
  // 	return united;
  // }
  // export function subSet(object, subsetKeys) {
  // 	return filter(object, (_, key) => indexOf(subsetKeys, key) !== -1);
  // }
  // export function excludedSet(object, excludedKeys) {
  // 	return filter(object, (_, key) => indexOf(excludedKeys, key) === -1);
  // }
  // export function remove(collection, item) {
  // 	return filter(collection, element => element !== item);
  // }
  // // call the variable if it is a function.
  // export function callIfFunction(fn, ...args) {
  // 	if (isFunction(fn)) {
  // 		return fn(...args);
  // 	}
  // 	return undefined;
  // }
  // // execute callback immediately and at most one time on the minimumInterval,
  // // ignore block attempts
  // export function throttle(minimumInterval, callback) {
  // 	let timeout = null;
  // 	return function (...args) {
  // 		const that = this;
  // 		if (timeout === null) {
  // 			timeout = setTimeout(() => {
  // 				timeout = null;
  // 			}, minimumInterval);
  // 			callback.apply(that, args);
  // 		}
  // 	};
  // }
  // // execute callback at most one time on the minimumInterval
  // export function debounce(minimumInterval, callback, isImmediate) {
  // 	let timeout = null;
  // 	let isAttemptBlockedOnInterval = false;
  // 	return function (...args) {
  // 		const that = this;
  // 		if (timeout === null) {
  // 			timeout = setTimeout(() => {
  // 				if (!isImmediate || isAttemptBlockedOnInterval) {
  // 					callback.apply(that, args);
  // 				}
  // 				isAttemptBlockedOnInterval = false;
  // 				timeout = null;
  // 			}, minimumInterval);
  // 			if (isImmediate) {
  // 				callback.apply(that, args);
  // 			}
  // 		} else {
  // 			isAttemptBlockedOnInterval = true;
  // 		}
  // 	};
  // }
  // export const generateUniqueID = (function () {
  // 	let count = 0;
  // 	return function () {
  // 		count += 1;
  // 		return count;
  // 	};
  // }());
  // // export function mixinPubSub(object) {
  // // 	object = object || {};
  // // 	const topics = {};
  // // 	object.publish = function (topic, data) {
  // // 		foreach(topics[topic], (callback) => {
  // // 			callback(data);
  // // 		});
  // // 	};
  // // 	object.subscribe = function (topic, callback) {
  // // 		topics[topic] = topics[topic] || [];
  // // 		topics[topic].push(callback);
  // // 	};
  // // 	object.unsubscribe = function (callback) {
  // // 		foreach(topics, (subscribers) => {
  // // 			const index = indexOf(subscribers, callback);
  // // 			if (index !== -1) {
  // // 				subscribers.splice(index, 1);
  // // 			}
  // // 		});
  // // 	};
  // // 	return object;
  // // }
  // // queryjs
  // // https://github.com/DubFriend/queryjs
  // // MIT License 2014 Brian Detering
  // export const queryjs = (function () {
  // 	const qjs = {};
  // 	const parse = function (url) {
  // 		let domain = ''; let
  // 			hash = '';
  // 		const getParameterStrings = function () {
  // 			const isHash = url.indexOf('#') !== -1;
  // 			const isQuery = url.indexOf('?') !== -1;
  // 			let queryString = '';
  // 			if (isQuery) {
  // 				queryString = url.split('?')[1] || '';
  // 				if (isHash) {
  // 					queryString = queryString.split('#')[0] || '';
  // 				}
  // 			}
  // 			if (isQuery) {
  // 				domain = url.split('?')[0] || '';
  // 			} else if (isHash) {
  // 				domain = url.split('#')[0] || '';
  // 			} else {
  // 				domain = url;
  // 			}
  // 			if (isHash) {
  // 				hash = url.split('#')[1] || '';
  // 			}
  // 			return queryString ? queryString.split('&') : [];
  // 		};
  // 		const parameterStrings = getParameterStrings(url);
  // 		const params = {};
  // 		let key; let value; let i;
  // 		for (i = 0; i < parameterStrings.length; i += 1) {
  // 			[key, value] = parameterStrings[i].split('=');
  // 			params[key] = value;
  // 		}
  // 		return {
  // 			url: domain || '',
  // 			hash: hash || '',
  // 			parameters: params,
  // 		};
  // 	};
  // 	const stringify = function (parsed) {
  // 		const parameterStrings = [];
  // 		foreach(parsed.parameters, (_, key) => {
  // 			parameterStrings.push(`${key}=${parsed.parameters[key]}`);
  // 		});
  // 		return parsed.url
  // 			+ (parameterStrings.length > 0
  // 				? `?${parameterStrings.join('&')}` : '')
  // 			+ (parsed.hash ? `#${parsed.hash}` : '');
  // 	};
  // 	qjs.get = function (url) {
  // 		return parse(url).parameters;
  // 	};
  // 	qjs.set = function (url, params) {
  // 		const parsed = parse(url);
  // 		parsed.parameters = union(parsed.parameters, params);
  // 		return stringify(parsed);
  // 	};
  // 	return qjs;
  // }());
  // export function $getAnyForminatorModule(preSelector, name, moduleName) {
  // 	return $(
  // 		preSelector
  // 		+ (moduleName ? `-${moduleName}` : '')
  // 		+ (name ? `-${name}` : ''),
  // 	);
  // }
  // export const $getForminatorByClass = partial($getAnyForminatorModule, '.frm');

  var PubSub =
  /*#__PURE__*/
  function () {
    function PubSub() {
      _classCallCheck(this, PubSub);

      this.topics = {};
    }

    _createClass(PubSub, [{
      key: "publish",
      value: function publish(topic, data) {
        foreach(this.topics[topic], function (callback) {
          callback(data);
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(topic, callback) {
        this.topics[topic] = this.topics[topic] || [];
        this.topics[topic].push(callback);
      }
    }, {
      key: "unsubscribe",
      value: function unsubscribe(callback) {
        foreach(this.topics, function (subscribers) {
          var index = indexOf(subscribers, callback);

          if (index !== -1) {
            subscribers.splice(index, 1);
          }
        });
      }
    }]);

    return PubSub;
  }();

  var BaseInput =
  /*#__PURE__*/
  function (_PubSub) {
    _inherits(BaseInput, _PubSub);

    function BaseInput(fig) {
      var _this;

      _classCallCheck(this, BaseInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseInput).call(this));
      _this.$self = fig.$;
      return _this;
    }
    /**
     * @abstract
     * @method
     * @name get
     */

    /**
     * @abstract
     * @method
     * @name set
     * @param {*} newValue new value
     */

    /**
     * @virtual
     */


    _createClass(BaseInput, [{
      key: "getType",
      value: function getType() {
        throw 'implement me (return type. "text", "radio", etc.)';
      }
    }, {
      key: "$",
      value: function $$$1(selector) {
        return selector ? this.$self.find(selector) : this.$self;
      }
    }, {
      key: "disable",
      value: function disable() {
        this.$().prop('disabled', true);
        this.publish('isEnabled', false);
      }
    }, {
      key: "enable",
      value: function enable() {
        this.$().prop('disabled', false);
        this.publish('isEnabled', true);
      }
    }, {
      key: "equalTo",
      value: function equalTo(a, b) {
        return a === b;
      }
    }, {
      key: "publishChange",
      value: function publishChange(e, domElement) {
        var newValue = this.get();

        if (!this.equalTo(newValue, this.oldValue)) {
          this.publish('change', {
            e: e,
            domElement: domElement
          });
        }

        this.oldValue = newValue;
      }
    }]);

    return BaseInput;
  }(PubSub);
  var Input =
  /*#__PURE__*/
  function (_BaseInput) {
    _inherits(Input, _BaseInput);

    function Input() {
      _classCallCheck(this, Input);

      return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
    }

    _createClass(Input, [{
      key: "get",
      value: function get() {
        return this.$().val();
      }
    }, {
      key: "set",
      value: function set(newValue) {
        this.$().val(newValue);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.set('');
      }
    }, {
      key: "buildSetter",
      value: function buildSetter(callback) {
        var _this2 = this;

        return function (newValue) {
          return callback.call(_this2, newValue);
        };
      }
    }]);

    return Input;
  }(BaseInput);
  function inputEqualToArray(a, b) {
    // eslint-disable-next-line no-param-reassign
    a = isArray(a) ? a : [a]; // eslint-disable-next-line no-param-reassign

    b = isArray(b) ? b : [b];
    var isEqual = true;

    if (a.length !== b.length) {
      isEqual = false;
    } else {
      foreach(a, function (value) {
        if (!inArray(b, value)) {
          isEqual = false;
        }
      });
    }

    return isEqual;
  }

  var InputText =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputText, _Input);

    function InputText(fig) {
      var _this;

      _classCallCheck(this, InputText);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputText).call(this, fig));

      if (fig.type) {
        _this.$type = fig.type;
      }

      _this.$().on('change keyup keydown', function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputText, [{
      key: "getType",
      value: function getType() {
        return this.$type || 'text';
      }
    }]);

    return InputText;
  }(Input);

  var InputTextarea =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputTextarea, _Input);

    function InputTextarea(fig) {
      var _this;

      _classCallCheck(this, InputTextarea);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputTextarea).call(this, fig));

      _this.$().on('change keyup keydown', function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputTextarea, [{
      key: "getType",
      value: function getType() {
        return 'textarea';
      }
    }]);

    return InputTextarea;
  }(Input);

  var InputSelect =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputSelect, _Input);

    function InputSelect(fig) {
      var _this;

      _classCallCheck(this, InputSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputSelect).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputSelect, [{
      key: "getType",
      value: function getType() {
        return 'select';
      }
    }]);

    return InputSelect;
  }(Input);

  var InputRadio =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputRadio, _Input);

    function InputRadio(fig) {
      var _this;

      _classCallCheck(this, InputRadio);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRadio).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputRadio, [{
      key: "getType",
      value: function getType() {
        return 'radio';
      }
    }, {
      key: "get",
      value: function get() {
        return this.$().filter(':checked').val() || null;
      }
    }, {
      key: "set",
      value: function set(newValue) {
        if (!newValue) {
          this.$().each(function () {
            $(this).prop('checked', false);
          }); // self.$().prop('checked', false);
        } else {
          this.$().filter("[value=\"".concat(newValue, "\"]")).prop('checked', true);
        }
      } // self.set = my.buildSetter(function (newValue) {
      //     console.log('set : ', newValue, self.$());
      //     if(!newValue) {
      //         self.$().prop('checked', false);
      //     }
      //     else {
      //     self.$().filter('[value="' + newValue + '"]').prop('checked', true);
      //     }
      // });

    }]);

    return InputRadio;
  }(Input);

  var InputCheckbox =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputCheckbox, _Input);

    function InputCheckbox(fig) {
      var _this;

      _classCallCheck(this, InputCheckbox);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputCheckbox).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputCheckbox, [{
      key: "getType",
      value: function getType() {
        return 'checkbox';
      }
    }, {
      key: "get",
      value: function get() {
        var _this2 = this;

        var values = [];
        this.$().filter(':checked').each(function (_, ele) {
          values.push($(_this2).val(ele));
        });
        return values;
      }
    }, {
      key: "set",
      value: function set(newValues) {
        var _this3 = this;

        // eslint-disable-next-line no-param-reassign
        newValues = isArray(newValues) ? newValues : [newValues];
        this.$().each(function () {
          $(this).prop('checked', false);
        });
        foreach(newValues, function (value) {
          _this3.$().filter("[value=\"".concat(value, "\"]")).prop('checked', true);
        });
      }
    }, {
      key: "equalTo",
      value: function equalTo() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        inputEqualToArray(args);
      }
    }]);

    return InputCheckbox;
  }(Input);

  var InputFile =
  /*#__PURE__*/
  function (_BaseInput) {
    _inherits(InputFile, _BaseInput);

    function InputFile(fig) {
      var _this;

      _classCallCheck(this, InputFile);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputFile).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputFile, [{
      key: "getType",
      value: function getType() {
        return 'file';
      }
    }, {
      key: "get",
      value: function get() {
        return last(this.$().val().split('\\'));
      }
    }, {
      key: "clear",
      value: function clear() {
        // eslint-disable-next-line max-len
        // http://stackoverflow.com/questions/1043957/clearing-input-type-file-using-jquery
        this.$().each(function (_, ele) {
          $(ele).wrap('<form>').closest('form').get(0).reset();
          $(ele).unwrap();
        });
      }
    }]);

    return InputFile;
  }(BaseInput);

  var InputButton =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputButton, _Input);

    function InputButton(fig) {
      var _this;

      _classCallCheck(this, InputButton);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputButton).call(this, fig));

      _this.$().on('change', function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    } // eslint-disable-next-line class-methods-use-this


    _createClass(InputButton, [{
      key: "getType",
      value: function getType() {
        return 'button';
      }
    }]);

    return InputButton;
  }(Input);

  var InputHidden =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputHidden, _Input);

    function InputHidden(fig) {
      var _this;

      _classCallCheck(this, InputHidden);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputHidden).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputHidden, [{
      key: "getType",
      value: function getType() {
        return 'hidden';
      }
    }]);

    return InputHidden;
  }(Input);

  var InputRange =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputRange, _Input);

    function InputRange(fig) {
      var _this;

      _classCallCheck(this, InputRange);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputRange).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputRange, [{
      key: "getType",
      value: function getType() {
        return 'range';
      }
    }]);

    return InputRange;
  }(Input);

  var InputMultipleSelect =
  /*#__PURE__*/
  function (_Input) {
    _inherits(InputMultipleSelect, _Input);

    function InputMultipleSelect(fig) {
      var _this;

      _classCallCheck(this, InputMultipleSelect);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputMultipleSelect).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputMultipleSelect, [{
      key: "getType",
      value: function getType() {
        return 'select[multiple]';
      }
    }, {
      key: "get",
      value: function get() {
        return this.$().val() || [];
      }
    }, {
      key: "set",
      value: function set(newValues) {
        var val;

        if (newValues === '') {
          val = [];
        } else if (isArray(newValues)) {
          val = newValues;
        } else {
          val = [newValues];
        }

        this.$().val(val);
      }
    }, {
      key: "equalTo",
      value: function equalTo() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        inputEqualToArray(args);
      }
    }]);

    return InputMultipleSelect;
  }(Input);

  var InputMultipleFile =
  /*#__PURE__*/
  function (_BaseInput) {
    _inherits(InputMultipleFile, _BaseInput);

    function InputMultipleFile(fig) {
      var _this;

      _classCallCheck(this, InputMultipleFile);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(InputMultipleFile).call(this, fig));

      _this.$().change(function (e) {
        return _this.publishChange(e, e.target);
      });

      return _this;
    }

    _createClass(InputMultipleFile, [{
      key: "getType",
      value: function getType() {
        return 'file[multiple]';
      }
    }, {
      key: "get",
      value: function get() {
        // eslint-disable-next-line max-len
        // http://stackoverflow.com/questions/14035530/how-to-get-value-of-html-5-multiple-file-upload-variable-using-jquery
        var fileListObject = this.$().get(0).files || [];
        var names = [];
        var i;

        for (i = 0; i < (fileListObject.length || 0); i += 1) {
          names.push(fileListObject[i].name);
        }

        return names;
      }
    }, {
      key: "clear",
      value: function clear() {
        // eslint-disable-next-line max-len
        // http://stackoverflow.com/questions/1043957/clearing-input-type-file-using-jquery
        this.$().each(function (_, ele) {
          $(ele).wrap('<form>').closest('form').get(0).reset();
          $(ele).unwrap();
        });
      }
    }]);

    return InputMultipleFile;
  }(BaseInput);

  function buildFormInputs(fig) {
    var inputs = {};
    var $self = fig.$;
    var constructor = fig.constructorOverride || {
      button: InputButton,
      // text: InputText,
      // url: InputURL,
      // email: InputEmail,
      // password: InputPassword,
      range: InputRange,
      textarea: InputTextarea,
      select: InputSelect,
      'select[multiple]': InputMultipleSelect,
      radio: InputRadio,
      checkbox: InputCheckbox,
      file: InputFile,
      'file[multiple]': InputMultipleFile,
      hidden: InputHidden
    };

    var createInput = function createInput(type, $e) {
      return Object.keys(constructor).indexOf(type) > -1 ? new constructor[type]({
        $: $e
      }) : new InputText({
        type: type,
        $: $e
      });
    };

    var addInputsBasic = function addInputsBasic(type, selector) {
      var $input = isObject(selector) ? selector : $self.find(selector);
      $input.each(function (_, ele) {
        var $e = $(ele);
        var name = $e.attr('name');
        inputs[name] = createInput(type || $e.attr('type'), $e);
      });
    };

    var addInputsGroup = function addInputsGroup(type, selector) {
      var names = [];
      var $input = isObject(selector) ? selector : $self.find(selector);

      if (isObject(selector)) {
        inputs[$input.attr('name')] = createInput(type, $input);
      } else {
        // group by name attribute
        $input.each(function () {
          var name = $(this).attr('name');

          if (indexOf(names, name) === -1) {
            names.push(name);
          }
        });
        foreach(names, function (name) {
          inputs[name] = createInput(type, $self.find("input[name=\"".concat(name, "\"]")));
        });
      }
    };

    if ($self.is('input, select, textarea')) {
      if ($self.is('input[type="button"], button, input[type="submit"]')) {
        addInputsBasic('button', $self);
      } else if ($self.is('textarea')) {
        addInputsBasic('textarea', $self);
      } else if (($self.is('input[type="text"]') || $self.is('input')) && !$self.attr('type')) {
        addInputsBasic('text', $self);
      } else if ($self.is('input[type="password"]')) {
        addInputsBasic('password', $self);
      } else if ($self.is('input[type="email"]')) {
        addInputsBasic('email', $self);
      } else if ($self.is('input[type="url"]')) {
        addInputsBasic('url', $self);
      } else if ($self.is('input[type="range"]')) {
        addInputsBasic('range', $self);
      } else if ($self.is('select')) {
        if ($self.is('[multiple]')) {
          addInputsBasic('select[multiple]', $self);
        } else {
          addInputsBasic('select', $self);
        }
      } else if ($self.is('input[type="file"]')) {
        if ($self.is('[multiple]')) {
          addInputsBasic('file[multiple]', $self);
        } else {
          addInputsBasic('file', $self);
        }
      } else if ($self.is('input[type="hidden"]')) {
        addInputsBasic('hidden', $self);
      } else if ($self.is('input[type="radio"]')) {
        addInputsGroup('radio', $self);
      } else if ($self.is('input[type="checkbox"]')) {
        addInputsGroup('checkbox', $self);
      } else if ($self.is('input[type]')) {
        addInputsGroup($self.attr('type'), $self);
      } else {
        // in all other cases default to a "text" input interface.
        addInputsBasic('text', $self);
      }
    } else {
      addInputsBasic('button', 'input[type="button"], button, input[type="submit"]'); // addInputsBasic('text', 'input[type="text"]');
      // addInputsBasic('password', 'input[type="password"]');
      // addInputsBasic('email', 'input[type="email"]');
      // addInputsBasic('url', 'input[type="url"]');

      addInputsBasic('range', 'input[type="range"]');
      addInputsBasic('textarea', 'textarea');
      addInputsBasic('select', 'select:not([multiple])');
      addInputsBasic('select[multiple]', 'select[multiple]');
      addInputsBasic('file', 'input[type="file"]:not([multiple])');
      addInputsBasic('file[multiple]', 'input[type="file"][multiple]');
      addInputsBasic('hidden', 'input[type="hidden"]');
      addInputsGroup('radio', 'input[type="radio"]');
      addInputsGroup('checkbox', 'input[type="checkbox"]'); // eslint-disable-next-line max-len

      addInputsBasic(undefined, 'input[type]:not([type="file"],[type="hidden"],[type="radio"],[type="checkbox"])');
    }

    return inputs;
  }

  $.fn.inputVal = function (newValue) {
    var $self = $(this);
    var inputs = buildFormInputs({
      $: $self
    });

    if ($self.is('input, textarea, select')) {
      if (typeof newValue === 'undefined') {
        return inputs[$self.attr('name')].get();
      }

      inputs[$self.attr('name')].set(newValue);
      return $self;
    }

    if (typeof newValue === 'undefined') {
      return call(inputs, 'get');
    }

    foreach(newValue, function (value, inputName) {
      if (inputs[inputName]) {
        inputs[inputName].set(value);
      }
    });
    return $self;
  };

  $.fn.inputOnChange = function (callback) {
    var $self = $(this);
    var inputs = buildFormInputs({
      $: $self
    });
    foreach(inputs, function (input) {
      input.subscribe('change', function (data) {
        callback.call(data.domElement, data.e);
      });
    });
    return $self;
  };

  $.fn.inputDisable = function () {
    var $self = $(this);
    call(buildFormInputs({
      $: $self
    }), 'disable');
    return $self;
  };

  $.fn.inputEnable = function () {
    var $self = $(this);
    call(buildFormInputs({
      $: $self
    }), 'enable');
    return $self;
  };

  $.fn.inputClear = function () {
    var $self = $(this);
    call(buildFormInputs({
      $: $self
    }), 'clear');
    return $self;
  };

})));
