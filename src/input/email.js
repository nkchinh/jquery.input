import { InputText } from './text';

export class InputEmail extends InputText {
	getType() {
		return 'email';
	}
}
