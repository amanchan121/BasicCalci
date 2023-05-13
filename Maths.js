const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (button.id === 'clear') {
			result.value = '';
		} else if (button.id === 'calculate') {
			result.value = eval(result.value);
		} else {
			result.value += button.value;
		}
	});
});
