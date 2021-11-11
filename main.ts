let sides = 6
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(--sides)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(++sides)
    }
    
    
})
