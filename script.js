let numbers = prompt('Введите числа через запятую').split(',');
let arr = +numbers[0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = (sum + parseInt(numbers[i]));
}

console.log('Среднее арифметическое массива ' + sum / numbers.length);









