import $ from 'jquery';
import buildFormInputs from './buildFormInputs';
import { call, foreach } from './library';

$.fn.inputVal = function (newValue) {
	const $self = $(this);

	const inputs = buildFormInputs({ $: $self });

	if ($self.is('input, textarea, select')) {
		if (typeof newValue === 'undefined') {
			return inputs[$self.attr('name')].get();
		}

		inputs[$self.attr('name')].set(newValue);
		return $self;
	}

	if (typeof newValue === 'undefined') {
		return call(inputs, 'get');
	}

	foreach(newValue, (value, inputName) => {
		if (inputs[inputName]) {
			inputs[inputName].set(value);
		}
	});

	return $self;
};

$.fn.inputOnChange = function (callback) {
	const $self = $(this);
	const inputs = buildFormInputs({ $: $self });
	foreach(inputs, (input) => {
		input.subscribe('change', (data) => {
			callback.call(data.domElement, data.e);
		});
	});
	return $self;
};

$.fn.inputDisable = function () {
	const $self = $(this);
	call(buildFormInputs({ $: $self }), 'disable');
	return $self;
};

$.fn.inputEnable = function () {
	const $self = $(this);
	call(buildFormInputs({ $: $self }), 'enable');
	return $self;
};

$.fn.inputClear = function () {
	const $self = $(this);
	call(buildFormInputs({ $: $self }), 'clear');
	return $self;
};
