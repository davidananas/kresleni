input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
input.onButtonPressed(Button.A, function () {
    tecka_x += -1
    if (gumovani == 0) {
        led.plot(tecka_x, tecka_y)
    } else {
        led.unplot(tecka_x, tecka_y)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    tecka_y += 1
    if (gumovani == 0) {
        led.plot(tecka_x, tecka_y)
    } else {
        led.unplot(tecka_x, tecka_y)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gumovani == 0) {
        gumovani = 1
    } else {
        gumovani = 0
    }
})
input.onButtonPressed(Button.B, function () {
    tecka_x += 1
    if (gumovani == 0) {
        led.plot(tecka_x, tecka_y)
    } else {
        led.unplot(tecka_x, tecka_y)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tecka_y += -1
    if (gumovani == 0) {
        led.plot(tecka_x, tecka_y)
    } else {
        led.unplot(tecka_x, tecka_y)
    }
})
let tecka_y = 0
let tecka_x = 0
let gumovani = 0
gumovani = 0
tecka_x = 2
tecka_y = 2
led.plot(tecka_x, tecka_y)
