import { isArray } from '../library';
import { inputEqualToArray, Input } from './base';

export class InputMultipleSelect extends Input {
	constructor(fig) {
		super(fig);

		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'select[multiple]';
	}

	get() {
		return this.$().val() || [];
	}

	set(newValues) {
		let val;
		if (newValues === '') {
			val = [];
		} else if (isArray(newValues)) {
			val = newValues;
		} else {
			val = [newValues];
		}

		this.$().val(val);
	}

	equalTo(...args) {
		inputEqualToArray(args);
	}
}
