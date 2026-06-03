input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.X, 1)
})
states.addLoopHandler("playing", function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.Y) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.Y, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = randint(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(index2, 4))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y) && obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X)) {
            basic.showString("GAME OVER")
            control.reset()
        }
    }
    ticks += 1
    basic.pause(700)
})
roversa.onEvent(RoversaPin.P8, RoversaEvent.Click, function () {
    index = 0
    obstacles = []
    bird = game.createSprite(2, 0)
    bird.set(LedSpriteProperty.Blink, 300)
    stats = 0
    states.setState("playing")
})
let stats = 0
let index = 0
let emptyObstacleY = 0
let ticks = 0
let obstacles: game.LedSprite[] = []
let bird: game.LedSprite = null
states.setState("Idle")
