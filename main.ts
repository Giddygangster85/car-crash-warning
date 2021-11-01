// On A being pressed a warning for a car crash ahead should show and then an animation showing two cars crashing into one another creating an explosion should show.
input.onButtonPressed(Button.A, function () {
    // This command shows a warning for a car crash that is ahead on the road.
    basic.showString("WARNING, CAR CRASH ")
    // This commands calls a function that shows the car crash and explosion
    Show_crash()
    // This command shows text recommending to stay safe on the road.
    basic.showString("Stay Safe")
})
function Show_crash () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // These commands show two cars crashing into each other causing an exposition to occur.
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # # . # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
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
}
