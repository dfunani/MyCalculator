let calculatorInput = document.getElementById('calculator-input');
let signs = [];
let numbers = [];
let prevNum = null;
let pointCOunt = null;
function inputNumber(num) {
	if (num === ' * ' || num === ' / ' || num === ' + ' || num === ' - ') {
		signs.push(num.trim());
		pointCOunt = 0;
	}
	else if (num === '.') {
		if (Number.isInteger(prevNum) && pointCOunt < 1) {
			let x = numbers.slice(-1) + '.';
			numbers.pop();
			numbers.push(x);
			pointCOunt++;
		}
		else {
			return;
		}
	}
	else if (prevNum === '.') {
		let x = numbers.slice(-1) + num;
		numbers.pop();
		numbers.push(x);
	}
	else {
		numbers.push(num);
	}
	prevNum = num;
	document.getElementById('calculator-input').value += num;
}

function calculate() {
	if (signs.length >= numbers.length) {
		document.getElementById('calculator-input').value = 'ERROR';
		return;
	}
	else {
		document.getElementById('calculator-input').value = eval(document.getElementById('calculator-input').value);
		document.getElementById('calculator-input').setAttribute('readonly', true);
		let buttons = document.querySelectorAll('button');
		buttons.forEach(button => {
			if (button.id !== 'reset') {
				button.disabled = true;
			}
		}
		);
	}

}

function reset() {
	document.getElementById('calculator-input').value = '';
	signs = [];
	numbers = [];
	prevNum = null;
	pointCOunt = null;
	let buttons = document.querySelectorAll('button');
	buttons.forEach(button => {
		if (button.id !== 'reset') {
			button.disabled = false;
		}
	}
	);
}