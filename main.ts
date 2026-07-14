irRemote.connectInfrared(DigitalPin.P16)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    # . # . .
    # # # . .
    `)
basic.forever(function () {
    if (MiniCar.ultra() <= 40 || irRemote.returnIrButton() == irRemote.irButton(IrButton.Ok)) {
        basic.showIcon(IconNames.No)
        MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.red1)
        MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.red1)
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    } else {
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Up)) {
            basic.showArrow(ArrowNames.North)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
            MiniCar.motor(Motorlist.M1, Direction1.Forward, 50)
            MiniCar.motor(Motorlist.M2, Direction1.Forward, 50)
        }
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Down)) {
            basic.showArrow(ArrowNames.South)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.blue1)
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.blue1)
            MiniCar.motor(Motorlist.M1, Direction1.Backward, 50)
            MiniCar.motor(Motorlist.M2, Direction1.Backward, 50)
        }
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Right)) {
            basic.showArrow(ArrowNames.East)
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.black)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.green1)
            MiniCar.motor(Motorlist.M1, Direction1.Backward, 50)
            MiniCar.motor(Motorlist.M2, Direction1.Forward, 50)
        }
        while (irRemote.returnIrButton() == irRemote.irButton(IrButton.Left)) {
            basic.showArrow(ArrowNames.West)
            MiniCar.led_rgb(LED_rgb_L_R.LED_L, LED_color.green1)
            MiniCar.led_rgb(LED_rgb_L_R.LED_R, LED_color.black)
            MiniCar.motor(Motorlist.M1, Direction1.Forward, 50)
            MiniCar.motor(Motorlist.M2, Direction1.Backward, 50)
        }
    }
})
