input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
})
basic.clearScreen()
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
basic.clearScreen()
basic.showString("Blast off!")
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . . . #
        # . . . #
        # . . . #
        `)
})
