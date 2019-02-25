import $ from 'jquery';
import { inputEqualToArray, Input } from './base';
import {
	isArray,
	foreach,
} from '../library';

export class InputCheckbox extends Input {
	constructor(fig) {
		super(fig);
		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'checkbox';
	}

	get() {
		const values = [];
		this.$().filter(':checked').each((_, ele) => {
			values.push($(ele).val());
		});
		return values;
	}

	set(newValues) {
		// eslint-disable-next-line no-param-reassign
		newValues = isArray(newValues) ? newValues : [newValues];

		this.$().each(function () {
			$(this).prop('checked', false);
		});

		foreach(newValues, (value) => {
			this.$().filter(`[value="${value}"]`)
				.prop('checked', true);
		});
	}

	equalTo(...args) {
		inputEqualToArray(args);
	}
}
