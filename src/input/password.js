import { InputText } from './text';

export class InputPassword extends InputText {
	getType() {
		return 'password';
	}
}
