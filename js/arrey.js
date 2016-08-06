function myLogin(uName, uArr) {
    var userLength = uArr.length;

    for (i = 0; i <= userLength; i++) {
        if (uArr[i] == uName) {
            console.log("Добро пожаловать, ", uArr[i]);
            alert(uArr[i] + ", добро пожаловать!");
            break;
        } else {
            if (i == userLength) {
                console.log("Ошибка!");
                alert("Ошибка!");
            }
        }
    }
}

var users = [];

for (i = 0; i < 5; i++) {
    var name = prompt("Введите имя:");
    users.push(name);
}

console.log("Массив: " + users);

var login = prompt("Ваше имя?");
console.log("Ваше имя: " + login);

myLogin(login, users);