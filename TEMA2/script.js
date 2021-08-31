let arr;
arr = ['Black', 'Red'];
arr.push('Yellow');
arr[arr.indexOf('Red')] = 'Blue';
console.log(arr.shift());
arr.unshift('Green', 'Gray');

arr = [];

function sumPrompt() {
    let sum = 0;
    while (1) {
        inp = prompt('Введи значення!!!!!!!!!!!!!!!!!!!');
        if (isNaN(inp)) {
            break;
        }
        arr.push(parseInt(inp))
    }
    arr.forEach((e) => {
        sum += e
    });
    return sum
}

arr = [1, -2, 3, 4, -9, 6]

function getSum(arr) {
    let sum = 0;
    if (arr.length == 0) {
        return 0
    }
    else {
        arr.forEach((e) => {
            sum += e
        });
        return sum
    }
    
}

function getMaxSubSum(arr) {
    let temp = [];
    let max = [];
    if (arr[arr.length - 1] > 0) {
        arr.push(-1)
    }
    arr.forEach((e) => {
        if (e > 0) {
            temp.push(e)
        } else if (getSum(max) > getSum(temp)) {
            // ABOBA
        } else {
            max = []
            for (let i = 0, len = temp.length; i < len; ++i) {
                max[i] = temp[i];
            }
            temp = []
        }
    })
    arr.pop(-1)
    return getSum(max)
}
console.log(getMaxSubSum(arr))

class Calculator {
    read() {
        this.a = prompt('Перше число', '')
        while (isNaN(this.a) || this.a == '' || this.a == null) {
            alert('Введи правильно!!!')
            this.a = prompt('Перше число', '')
        }
        this.b = prompt('Друге число', '')
        while (isNaN(this.b) || this.b == '' || this.b == null) {
            alert('Введи правильно!!!')
            this.b = prompt('Друге число', '')
        }
    }

    sum() {
        return parseInt(this.a) + parseInt(this.b)
    }

    mul() {
        return parseInt(this.a) * parseInt(this.b)
    }
}

let calc = new Calculator();
calc.read()

alert( "Sum=" + calc.sum() );
alert( "Mul=" + calc.mul() );

class Accumulator {
    constructor(value) {
        this.value = parseInt(value)
    }

    read() {
        let a = prompt('Число!!!!!!!!', '')
        while (isNaN(a) || a == '' || a == null) {
            alert('Введи правильно!!!')
            a = prompt('Число!!!!!!!!!!!', '')
        }
        this.value += parseInt(a)
    }
}

let accumulator = new Accumulator(1); // початкове значення 1

accumulator.read(); // додасть ввід prompt до поточного значення
accumulator.read(); // додасть ввід prompt до поточного значення

alert(accumulator.value); // виведе суму цих значень

