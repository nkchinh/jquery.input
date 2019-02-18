import $ from 'jquery';
import { last } from '../library';
import { BaseInput } from './base';

export class InputFile extends BaseInput {
	constructor(fig) {
		super(fig);
		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'file';
	}

	get() {
		return last(this.$().val().split('\\'));
	}

	clear() {
		// eslint-disable-next-line max-len
		// http://stackoverflow.com/questions/1043957/clearing-input-type-file-using-jquery
		this.$().each((_, ele) => {
			$(ele).wrap('<form>').closest('form').get(0)
				.reset();
			$(ele).unwrap();
		});
	}
}
