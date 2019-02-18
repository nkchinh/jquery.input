import $ from 'jquery';
import { BaseInput } from './base';

export class InputMultipleFile extends BaseInput {
	constructor(fig) {
		super(fig);
		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'file[multiple]';
	}

	get() {
		// eslint-disable-next-line max-len
		// http://stackoverflow.com/questions/14035530/how-to-get-value-of-html-5-multiple-file-upload-variable-using-jquery
		const fileListObject = this.$().get(0).files || [];


		const names = []; let
			i;

		for (i = 0; i < (fileListObject.length || 0); i += 1) {
			names.push(fileListObject[i].name);
		}

		return names;
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
