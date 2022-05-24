let pin1 = 0
let pin2 = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.forever(function opakuj() {
        
        pin1 = pins.analogReadPin(AnalogPin.P0)
        pin2 = pins.analogReadPin(AnalogPin.P2)
        console.log("PIN 1 =")
        console.log(pin1)
        console.log("PIN 2 =")
        console.log(pin2)
        basic.pause(300)
        if (pin1 > 200 && pin2 > 200) {
            go_forward()
        } else if (pin2 < 200 && pin1 > 200) {
            right_turn()
        } else if (pin1 < 200 && pin2 > 200) {
            left_turn()
        } else {
            stop()
        }
        
    })
})
function go_forward() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 256)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 256)
}

function stop() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
}

function right_turn() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 0)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 256)
}

function left_turn() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, 256)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, 0)
}

