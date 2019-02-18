import { InputText } from './text';

export class InputURL extends InputText {
	getType() {
		return 'url';
	}
}
