let numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
    let numbersEl = [elone, 'eltwo', 'elthree', 'elfour', 'elfive', 'elsix', 'elseven', 'eleight', 'elnine', 'elzero'];


for (let i = 0; i < numbers.length; i++){
    numbersEl[i] = document.getElementById(numbers[i]);
    numbersEl[i].addEventListener('click', () => {
        console.log(numbersEl[i]);
    });
}

