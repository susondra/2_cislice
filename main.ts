input.onButtonPressed(Button.A, function () {
    if (a == 0) {
        x += 1
        if (x == 10) {
            x = 0
        }
        basic.showNumber(x)
    } else if (a == 1) {
        y += 1
        if (y == 10) {
            y = 0
        }
        basic.showNumber(y)
    }
})
input.onButtonPressed(Button.AB, function () {
    a = 0
    x = 0
    y = 0
    z = 0
    basic.showNumber(x)
})
input.onButtonPressed(Button.B, function () {
    a += 1
    if (a == 1) {
        basic.showNumber(y)
    } else {
        basic.showNumber(x + y)
    }
})
let z = 0
let y = 0
let x = 0
let a = 0
a = 0
x = 0
y = 0
z = 0
basic.showNumber(x)
