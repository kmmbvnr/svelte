import * as assert from 'assert';
import './main.svelte';

export default function (target) {
	const warnings = [];
	const warn = console.warn;

	console.warn = warning => {
		warnings.push(warning);
	};

	target.innerHTML = '<custom-element/>';
	assert.deepEqual(warnings, []);

	const style = target.querySelector('custom-element').shadowRoot.querySelector('style');
	assert.equal(style.textContent, 'p.active{color:rgb(128, 128, 128)}');

	console.warn = warn;
}
