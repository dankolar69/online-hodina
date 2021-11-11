sides = 6

def on_forever():
    global sides
    if input.button_is_pressed(Button.A):
            basic.show_number(--sides)
    if input.button_is_pressed(Button.B):
            basic.show_number(++sides)
    pass
    
basic.forever(on_forever)