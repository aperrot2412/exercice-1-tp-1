input.onButtonPressed(Button.A, function () {
    if (x >= 1) {
        led.unplot(x, 0)
        x += -1
        led.toggle(x, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x <= 3) {
        led.unplot(x, 0)
        x += 1
        led.toggle(x, 0)
    }
})
let x = 0
x = 0
led.plot(x, 0)
basic.forever(function () {
    while (x < 4) {
        led.unplot(x, 0)
        x += 1
        led.toggle(x, 0)
        basic.pause(1000)
    }
    while (x > 0) {
        led.unplot(x, 0)
        x += -1
        led.toggle(x, 0)
        basic.pause(1000)
    }
})
