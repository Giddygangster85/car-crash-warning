// On A being pressed a warning for a car crash ahead should show and then an animation showing two cars crashing into one another creating an explosion should show.
input.onButtonPressed(Button.A, function () {
    basic.showString("WARNING, CAR CRASH ")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        # # . # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # # # # #
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # # # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        # # . # #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("Stay Safe")
})
