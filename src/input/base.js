import {
	isArray, inArray, foreach,
} from '../library';
import PubSub from './PubSub';

export class BaseInput extends PubSub {
	constructor(fig) {
		super();
		this.$self = fig.$;
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
	getType() {
		throw 'implement me (return type. "text", "radio", etc.)';
	}

	$(selector) {
		return selector ? this.$self.find(selector) : this.$self;
	}

	disable() {
		this.$().prop('disabled', true);
		this.publish('isEnabled', false);
	}

	enable() {
		this.$().prop('disabled', false);
		this.publish('isEnabled', true);
	}

	equalTo(a, b) {
		return a === b;
	}

	publishChange(e, domElement) {
		const newValue = this.get();
		if (!this.equalTo(newValue, this.oldValue)) {
			this.publish('change', { e, domElement });
		}
		this.oldValue = newValue;
	}
}


export class Input extends BaseInput {
	get() {
		return this.$().val();
	}

	set(newValue) {
		this.$().val(newValue);
	}

	clear() {
		this.set('');
	}

	buildSetter(callback) {
		return newValue => callback.call(this, newValue);
	}
}

export function inputEqualToArray(a, b) {
	// eslint-disable-next-line no-param-reassign
	a = isArray(a) ? a : [a];
	// eslint-disable-next-line no-param-reassign
	b = isArray(b) ? b : [b];

	let isEqual = true;
	if (a.length !== b.length) {
		isEqual = false;
	} else {
		foreach(a, (value) => {
			if (!inArray(b, value)) {
				isEqual = false;
			}
		});
	}

	return isEqual;
}
