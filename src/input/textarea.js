import { Input } from './base';

export class InputTextarea extends Input {
	constructor(fig) {
		super(fig);
		this.$().on(
			'change keyup keydown',
			e => this.publishChange(e, e.target),
		);
	}

	getType() {
		return 'textarea';
	}
}
