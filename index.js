function showRandom() {
    let arr = [];
    let result = document.getElementById('result');
    for (let i = 0; i < 10; i++) {
        let randomNum = Number(Math.round((Math.random() * 21 - 10)));
        arr.push(randomNum);
    }

    let max = Math.max.apply(Math, arr);
    let min = Math.min.apply(Math, arr);

    let sum = arr.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    let average = sum / arr.length;

    let multipl = arr.reduce(function (multipl, current) {
        return multipl * current;
    }, );

    result.textContent = ('Сгенерировали: ' + arr + '\n' + 'Минимальное: ' + min + '\n' + 'Максимальное: ' + max + '\n' + 'Среднее арифметическое: ' + average + '\n' + 'Сумма чисел: ' + sum + `\n` + 'Произведение чисел: ' + multipl);
}