import { Input } from './base';

export class InputButton extends Input {
	constructor(fig) {
		super(fig);

		this.$().on('change', e => this.publishChange(e, e.target));
	}

	// eslint-disable-next-line class-methods-use-this
	getType() {
		return 'button';
	}
}
