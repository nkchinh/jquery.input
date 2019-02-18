import $ from 'jquery';
import { Input } from './base';

export class InputRadio extends Input {
	constructor(fig) {
		super(fig);
		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'radio';
	}

	get() {
		return this.$().filter(':checked').val() || null;
	}

	set(newValue) {
		if (!newValue) {
			this.$().each(function () {
				$(this).prop('checked', false);
			});
			// self.$().prop('checked', false);
		} else {
			this.$().filter(`[value="${newValue}"]`).prop('checked', true);
		}
	}

	// self.set = my.buildSetter(function (newValue) {
	//     console.log('set : ', newValue, self.$());
	//     if(!newValue) {
	//         self.$().prop('checked', false);
	//     }
	//     else {
	//     self.$().filter('[value="' + newValue + '"]').prop('checked', true);
	//     }
	// });
}
