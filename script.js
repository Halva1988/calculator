"use strict";

const buttonForm = document.getElementById("form__submit");
const formResult = document.getElementById("form__result");

buttonForm.addEventListener("click", (event) => {
    event.preventDefault();

    const firstNumber = document.getElementById("first-number").value.replace(',', '.');
    const symbolForm = document.getElementById("symbol-form").value;
    const secondNumber = document.getElementById("second-number").value.replace(',', '.');
    let resultCalculator;

    if (firstNumber === "" && secondNumber === "") {
        formResult.innerText = "Не указано ни одно число";
        return console.log("Первое число не указано");
    };

    if (firstNumber === "") {
        formResult.innerText = "Первое число не указано";
        return console.log("Первое число не указано");
    };

    if (secondNumber === "") {
        formResult.innerText = "Второе число не указано";
        return console.log("Второе число не указано");
    };

    if (isNaN(firstNumber) === true || isNaN(secondNumber) === true) {
        formResult.innerText = "Некорректный ввод чисел";
        return console.log("Некорректный ввод чисел");
    };

    switch (symbolForm) {
        case "":
            formResult.innerText = "Не введён знак";
            return console.log("Не введён знак");
        case "+":
            resultCalculator = Number(firstNumber) + Number(secondNumber);
            break;
        case "-":
            resultCalculator = Number(firstNumber) - Number(secondNumber);
            break;
        case "/":
            resultCalculator = Number(firstNumber) / Number(secondNumber);
            break;
        case "*":
            resultCalculator = Number(firstNumber) * Number(secondNumber);
            break;
        default:
            return (
                (formResult.innerText = "Программа не поддерживает такую операцию"),
                console.log("Программа не поддерживает такую операцию")
            );
            break;
    };

    if (isNaN(resultCalculator)) {
        formResult.innerText = "Операция некорректна";
        return console.log("Операция некорректна");
    };

    if (resultCalculator === Infinity) {
        formResult.innerText = "Операция некорректна";
        console.log("Операция некорректна");
    } else {
        formResult.innerText = `Результат: ${resultCalculator}`;
        console.log(resultCalculator);
    };
});
