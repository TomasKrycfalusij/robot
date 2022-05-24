pin1 = 0
pin2 = 0
def opakuj():
    global pin1 , pin2
    pin1 = pins.analog_read_pin(AnalogPin.P0)
    pin2 = pins.analog_read_pin(AnalogPin.P2)
    print("PIN 1 =")
    print(pin1)
    print("PIN 2 =")
    print(pin2)
    basic.pause(300)
    if pin1 > 200 and pin2 > 200:
        go_forward()
    elif pin2 < 200 and pin1 > 200:
        right_turn()
    elif pin1 < 200 and pin2 > 200:
        left_turn()
    else:
        stop()

def on_button_pressed_a():
    basic.forever(opakuj)
input.on_button_pressed(Button.A, on_button_pressed_a)


def go_forward():
    PCAmotor.motor_run(PCAmotor.Motors.M1, 256)
    PCAmotor.motor_run(PCAmotor.Motors.M4, 256)
def stop():
    PCAmotor.motor_run(PCAmotor.Motors.M1, 0)
    PCAmotor.motor_run(PCAmotor.Motors.M4, 0)
def right_turn():
    PCAmotor.motor_run(PCAmotor.Motors.M1, 0)
    PCAmotor.motor_run(PCAmotor.Motors.M4, 256)
def left_turn():
    PCAmotor.motor_run(PCAmotor.Motors.M1, 256)
    PCAmotor.motor_run(PCAmotor.Motors.M4, 0)