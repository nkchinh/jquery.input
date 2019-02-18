import { Input } from './base';

export class InputText extends Input {
	constructor(fig) {
		super(fig);

		if (fig.type) {
			this.$type = fig.type;
		}

		this.$().on(
			'change keyup keydown',
			e => this.publishChange(e, e.target),
		);
	}

	getType() {
		return this.$type || 'text';
	}
}
