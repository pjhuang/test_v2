input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(2000)
})
