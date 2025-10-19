"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = (b ** 2) - (4 * a * c);

	if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
	} else if (discriminant === 0) {
		let root = -b / (2 * a)
		arr.push(root);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 1200;
	let body = amount - contribution;
	let monthPay = body * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
	let totalAmount = (monthPay * countMonths);
	totalAmount = parseFloat(totalAmount.toFixed(2))
	return totalAmount
}