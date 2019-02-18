import { Input } from './base';

export class InputHidden extends Input {
	constructor(fig) {
		super(fig);
		this.$().change(e => this.publishChange(e, e.target));
	}

	getType() {
		return 'hidden';
	}
}
