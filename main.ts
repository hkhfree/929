input.onButtonPressed(Button.A, function () {
    경비 = 1
})
input.onButtonPressed(Button.B, function () {
    경비 = 0
})
let 경비 = 0
radio.setGroup(6)
basic.forever(function () {
    if (1 == pins.digitalReadPin(DigitalPin.P1)) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Heart)
    } else {
        radio.sendNumber(0)
        basic.showIcon(IconNames.Yes)
    }
})
