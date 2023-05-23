def on_forever():
    rain = game.create_sprite(randint(0, 4), 0)
    for i in range(4):
        rain.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    rain.delete()
basic.forever(on_forever)