/* eslint-disable no-param-reassign */
import $ from 'jquery';

export function identity(x) {
	return x;
}

export function isArray(value) {
	return $.isArray(value);
}

export function isObject(value) {
	return !isArray(value) && (value instanceof Object);
}

export function isFunction(value) {
	return value instanceof Function;
}

export function toInt(value) {
	return parseInt(value, 10);
}

export function bind(f, object) {
	return function (...args) {
		return f.apply(object, args);
	};
}

export function partial(f, ...args) {
	if (isFunction(f)) {
		return (...args1) => f(...args.concat(args1));
	}

	return undefined;
}

export function argumentsToArray(args) {
	const array = []; let
		i;
	for (i = 0; i < args.length; i += 1) {
		array.push(args[i]);
	}
	return array;
}

export function isEmpty(object) {
	return Object.keys(object).length === 0;
}

export function isNumeric(candidate) {
	return !Number.isNaN(candidate);
}

export function isInteger(candidate) {
	return isNumeric(candidate) && Number(candidate) % 1 === 0;
}

export function indexOf(object, value) {
	return $.inArray(value, object);
}

export function inArray(array, value) {
	return indexOf(array, value) !== -1;
}

// deep copy of json objects
export function copy(object) {
	return $.extend(true, {}, object);
}

export function shallowCopy(objects) {
	return map(objects, identity);
}

export function foreach(collection, callback) {
	if (collection) {
		Object.keys(collection)
			.forEach(i => callback(collection[i], i, collection));
	}
}

export function range(a, b) {
	let i; let start; let end; const
		array = [];
	if (b === undefined) {
		start = 0;
		end = a - 1;
	} else {
		start = a;
		end = b;
	}
	for (i = start; i <= end; i += 1) {
		array.push(i);
	}
	return array;
}

export function reverse(array) {
	const reversed = []; let
		i;
	for (i = array.length - 1; i >= 0; i -= 1) {
		reversed.push(array[i]);
	}
	return reversed;
}

export function last(array) {
	return array[array.length - 1];
}

export function mapToArray(collection, callback) {
	const mapped = [];
	foreach(collection, (value, key, coll) => {
		mapped.push(callback(value, key, coll));
	});
	return mapped;
}

export function mapToObject(collection, callback, keyCallback) {
	const mapped = {};
	foreach(collection, (value, key, coll) => {
		// eslint-disable-next-line no-param-reassign
		key = keyCallback ? keyCallback(key, value) : key;
		mapped[key] = callback(value, key, coll);
	});
	return mapped;
}

export function appendKey(appendingString, collection) {
	return map(collection, identity, key => appendingString + key);
}

export function map(collection, callback, keyCallback) {
	return isArray(collection)
		? mapToArray(collection, callback)
		: mapToObject(collection, callback, keyCallback);
}

export function pluck(collection, key) {
	return map(collection, value => value[key]);
}

export function call(collection, functionName, args) {
	return map(
		collection,
		object => object[functionName](...args || []),
	);
}

export function keys(collection) {
	return mapToArray(collection, (val, key) => key);
}

export function values(collection) {
	return mapToArray(collection, val => val);
}

export function reduce(collection, callback, initialAccumulation) {
	let accumulation = initialAccumulation;
	foreach(collection, (val, key) => {
		accumulation = callback(accumulation, val, key, collection);
	});
	return accumulation;
}

export function filter(collection, callback) {
	let filtered;

	if (isArray(collection)) {
		filtered = [];
		foreach(collection, (val, key, coll) => {
			if (callback(val, key, coll)) {
				filtered.push(val);
			}
		});
	} else {
		filtered = {};
		foreach(collection, (val, key, coll) => {
			if (callback(val, key, coll)) {
				filtered[key] = val;
			}
		});
	}

	return filtered;
}

export function union(...args) {
	const united = {}; let
		i;
	for (i = 0; i < args.length; i += 1) {
		foreach(args[i], (value, key) => {
			united[key] = value;
		});
	}
	return united;
}

export function subSet(object, subsetKeys) {
	return filter(object, (_, key) => indexOf(subsetKeys, key) !== -1);
}

export function excludedSet(object, excludedKeys) {
	return filter(object, (_, key) => indexOf(excludedKeys, key) === -1);
}

export function remove(collection, item) {
	return filter(collection, element => element !== item);
}

// call the variable if it is a function.
export function callIfFunction(fn, ...args) {
	if (isFunction(fn)) {
		return fn(...args);
	}

	return undefined;
}


// execute callback immediately and at most one time on the minimumInterval,
// ignore block attempts
export function throttle(minimumInterval, callback) {
	let timeout = null;
	return function (...args) {
		const that = this;
		if (timeout === null) {
			timeout = setTimeout(() => {
				timeout = null;
			}, minimumInterval);
			callback.apply(that, args);
		}
	};
}

// execute callback at most one time on the minimumInterval
export function debounce(minimumInterval, callback, isImmediate) {
	let timeout = null;
	let isAttemptBlockedOnInterval = false;
	return function (...args) {
		const that = this;
		if (timeout === null) {
			timeout = setTimeout(() => {
				if (!isImmediate || isAttemptBlockedOnInterval) {
					callback.apply(that, args);
				}
				isAttemptBlockedOnInterval = false;
				timeout = null;
			}, minimumInterval);
			if (isImmediate) {
				callback.apply(that, args);
			}
		} else {
			isAttemptBlockedOnInterval = true;
		}
	};
}

export const generateUniqueID = (function () {
	let count = 0;
	return function () {
		count += 1;
		return count;
	};
}());

// export function mixinPubSub(object) {
// 	object = object || {};
// 	const topics = {};

// 	object.publish = function (topic, data) {
// 		foreach(topics[topic], (callback) => {
// 			callback(data);
// 		});
// 	};

// 	object.subscribe = function (topic, callback) {
// 		topics[topic] = topics[topic] || [];
// 		topics[topic].push(callback);
// 	};

// 	object.unsubscribe = function (callback) {
// 		foreach(topics, (subscribers) => {
// 			const index = indexOf(subscribers, callback);
// 			if (index !== -1) {
// 				subscribers.splice(index, 1);
// 			}
// 		});
// 	};

// 	return object;
// }


// queryjs
// https://github.com/DubFriend/queryjs
// MIT License 2014 Brian Detering
export const queryjs = (function () {
	const qjs = {};

	const parse = function (url) {
		let domain = ''; let
			hash = '';
		const getParameterStrings = function () {
			const isHash = url.indexOf('#') !== -1;


			const isQuery = url.indexOf('?') !== -1;


			let queryString = '';

			if (isQuery) {
				queryString = url.split('?')[1] || '';
				if (isHash) {
					queryString = queryString.split('#')[0] || '';
				}
			}

			if (isQuery) {
				domain = url.split('?')[0] || '';
			} else if (isHash) {
				domain = url.split('#')[0] || '';
			} else {
				domain = url;
			}

			if (isHash) {
				hash = url.split('#')[1] || '';
			}

			return queryString ? queryString.split('&') : [];
		};

		const parameterStrings = getParameterStrings(url);

		const params = {};

		let key; let value; let i;

		for (i = 0; i < parameterStrings.length; i += 1) {
			[key, value] = parameterStrings[i].split('=');
			params[key] = value;
		}

		return {
			url: domain || '',
			hash: hash || '',
			parameters: params,
		};
	};

	const stringify = function (parsed) {
		const parameterStrings = [];

		foreach(parsed.parameters, (_, key) => {
			parameterStrings.push(`${key}=${parsed.parameters[key]}`);
		});

		return parsed.url
			+ (parameterStrings.length > 0
				? `?${parameterStrings.join('&')}` : '')
			+ (parsed.hash ? `#${parsed.hash}` : '');
	};

	qjs.get = function (url) {
		return parse(url).parameters;
	};

	qjs.set = function (url, params) {
		const parsed = parse(url);
		parsed.parameters = union(parsed.parameters, params);
		return stringify(parsed);
	};

	return qjs;
}());

export function $getAnyForminatorModule(preSelector, name, moduleName) {
	return $(
		preSelector
		+ (moduleName ? `-${moduleName}` : '')
		+ (name ? `-${name}` : ''),
	);
}

export const $getForminatorByClass = partial($getAnyForminatorModule, '.frm');
