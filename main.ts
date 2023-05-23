basic.forever(function on_forever() {
    let rain = game.createSprite(randint(0, 4), 0)
    for (let i = 0; i < 4; i++) {
        rain.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    rain.delete()
})
