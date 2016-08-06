function myPow(base, exp) {
	if (exp == 0) {
		return 1;
	} else {
		var result = base;
		for (i = 1; i < exp; i++) {
			result *= base;
		}
		return result;
	}
}

i = 1;
while (i == 1) {
	var userNum = prompt("Введите число");
	console.log("число", userNum);

	var userExp = prompt("Введите показатель степени");
	console.log("в степени", userExp);

	alert("Равно: " + myPow(userNum, userExp));
	console.log("Равно: ", myPow(userNum, userExp))
	console.log("_____")

	i = prompt("Завершить? (Для завершения введите 0, для продолжения введите 1");
}
