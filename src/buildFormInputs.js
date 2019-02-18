import $ from 'jquery';
import { isObject, indexOf, foreach } from './library';
import { InputText } from './input/text';
import { InputTextarea } from './input/textarea';
import { InputSelect } from './input/select';
import { InputRadio } from './input/radio';
import { InputCheckbox } from './input/checkbox';
import { InputFile } from './input/file';
import { InputButton } from './input/button';
import { InputHidden } from './input/hidden';
import { InputRange } from './input/range';
// import { InputURL } from './input/url';
// import { InputEmail } from './input/email';
// import { InputPassword } from './input/password';
import { InputMultipleSelect } from './input/multipleSelect';
import { InputMultipleFile } from './input/multipleFile';

export default function buildFormInputs(fig) {
	const inputs = {};
	const $self = fig.$;

	const constructor = fig.constructorOverride || {
		button: InputButton,
		// text: InputText,
		// url: InputURL,
		// email: InputEmail,
		// password: InputPassword,
		range: InputRange,
		textarea: InputTextarea,
		select: InputSelect,
		'select[multiple]': InputMultipleSelect,
		radio: InputRadio,
		checkbox: InputCheckbox,
		file: InputFile,
		'file[multiple]': InputMultipleFile,
		hidden: InputHidden,
	};

	const createInput = (
		type, $e,
	) => (Object.keys(constructor).indexOf(type) > -1
		? new constructor[type]({
			$: $e,
		})
		: new InputText({ type, $: $e }));

	const addInputsBasic = (type, selector) => {
		const $input = isObject(selector) ? selector : $self.find(selector);

		$input.each((_, ele) => {
			const $e = $(ele);
			const name = $e.attr('name');
			inputs[name] = createInput(type || $e.attr('type'), $e);
		});
	};

	const addInputsGroup = (type, selector) => {
		const names = [];
		const $input = isObject(selector) ? selector : $self.find(selector);

		if (isObject(selector)) {
			inputs[$input.attr('name')] = createInput(type, $input);
		} else {
			// group by name attribute
			$input.each(function () {
				const name = $(this).attr('name');

				if (indexOf(names, name) === -1) {
					names.push(name);
				}
			});

			foreach(names, (name) => {
				inputs[name] = createInput(
					type, $self.find(`input[name="${name}"]`),
				);
			});
		}
	};


	if ($self.is('input, select, textarea')) {
		if ($self.is('input[type="button"], button, input[type="submit"]')) {
			addInputsBasic('button', $self);
		} else if ($self.is('textarea')) {
			addInputsBasic('textarea', $self);
		} else if (
			($self.is('input[type="text"]')
            || $self.is('input')) && !$self.attr('type')
		) {
			addInputsBasic('text', $self);
		} else if ($self.is('input[type="password"]')) {
			addInputsBasic('password', $self);
		} else if ($self.is('input[type="email"]')) {
			addInputsBasic('email', $self);
		} else if ($self.is('input[type="url"]')) {
			addInputsBasic('url', $self);
		} else if ($self.is('input[type="range"]')) {
			addInputsBasic('range', $self);
		} else if ($self.is('select')) {
			if ($self.is('[multiple]')) {
				addInputsBasic('select[multiple]', $self);
			} else {
				addInputsBasic('select', $self);
			}
		} else if ($self.is('input[type="file"]')) {
			if ($self.is('[multiple]')) {
				addInputsBasic('file[multiple]', $self);
			} else {
				addInputsBasic('file', $self);
			}
		} else if ($self.is('input[type="hidden"]')) {
			addInputsBasic('hidden', $self);
		} else if ($self.is('input[type="radio"]')) {
			addInputsGroup('radio', $self);
		} else if ($self.is('input[type="checkbox"]')) {
			addInputsGroup('checkbox', $self);
		} else if ($self.is('input[type]')) {
			addInputsGroup($self.attr('type'), $self);
		} else {
			// in all other cases default to a "text" input interface.
			addInputsBasic('text', $self);
		}
	} else {
		addInputsBasic(
			'button',
			'input[type="button"], button, input[type="submit"]',
		);
		// addInputsBasic('text', 'input[type="text"]');
		// addInputsBasic('password', 'input[type="password"]');
		// addInputsBasic('email', 'input[type="email"]');
		// addInputsBasic('url', 'input[type="url"]');
		addInputsBasic('range', 'input[type="range"]');
		addInputsBasic('textarea', 'textarea');
		addInputsBasic('select', 'select:not([multiple])');
		addInputsBasic('select[multiple]', 'select[multiple]');
		addInputsBasic('file', 'input[type="file"]:not([multiple])');
		addInputsBasic('file[multiple]', 'input[type="file"][multiple]');
		addInputsBasic('hidden', 'input[type="hidden"]');
		addInputsGroup('radio', 'input[type="radio"]');
		addInputsGroup('checkbox', 'input[type="checkbox"]');
		// eslint-disable-next-line max-len
		addInputsBasic(undefined, 'input[type]:not([type="file"],[type="hidden"],[type="radio"],[type="checkbox"])');
	}

	return inputs;
}
