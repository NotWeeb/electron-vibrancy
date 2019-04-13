const Vibrancy = require('bindings')('Vibrancy');

module.exports = require('bindings')('Vibrancy');

const addView = (buffer, options) => {

	const viewOptions = {
		Position: { x: options.X, y: options.Y},
		Size: { width: options.Width, height: options.Height},
		...options
	};

	return Vibrancy.AddView(buffer, viewOptions);

};

const removeView = (buffer, ViewId) => Vibrancy.RemoveView(buffer, {ViewId});

const updateView = (buffer, options) => {

	const viewOptions = {
		Position: { x: options.X, y: options.Y},
		Size: { width: options.Width, height: options.Height},
		...options
	};

	return Vibrancy.UpdateView(buffer, viewOptions);

};

const disableVibrancy = buffer => Vibrancy.SetVibrancy(false, buffer);

module.exports = {

	setVibrancy: (window, Material) => {

		if (!window) return -1;
		if (!Material) Material = 0;
		
		const Width = window.getSize()[0];
		const Height = window.getSize()[1];

		const viewOptions = {
			Material,
			Width,
			Height,
			X: 0,
			Y:0,
			ResizeMask: 2
		};

		return addView(window.getNativeWindowHandle(), viewOptions);

	},

	addView: (window, options) => addView(window.getNativeWindowHandle(), options),

	updateView: (window, options) => updateView(window.getNativeWindowHandle(), options),

	removeView: (window,viewId) => removeView(window.getNativeWindowHandle(), viewId),

	disableVibrancy: window => disableVibrancy(window.getNativeWindowHandle())

};