const display = document.querySelector('.calculator input[name=display]');

document.querySelectorAll('.digits button, .opers button')
    .forEach(btn => btn.addEventListener('click', digitsOperPressed));

function digitsOperPressed(e) {
    display.value += e.target.innerText;
}

document.querySelector('.clear' button)
    .addEventListener('click', function() {
        display.value = '';
    });

document.querySelector('.result')
    .addEventListener('click', function() {
        display.value = eval(display.value);
    })

document.querySelector('.backspace')
    .addEventListener('click', function() {
        display.value = display.value.substring(0, display.value.length - 1)
    });