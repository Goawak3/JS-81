const numbers = [2, 4, 3, 5, 1, 7, 11, 25];

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
        console.log(numbers[i]);
    }
}

const rainbow = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый'];
for(i = rainbow.length - 1; i >= 0; i--) {
    console.log(rainbow[i])
}
// console.log(rainbow.reverse()) это просто как вариант но не через for