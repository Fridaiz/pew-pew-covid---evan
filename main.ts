controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pEw_PeW = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Jett, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    FatBadGuy.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    FatBadGuy.destroy()
    info.changeLifeBy(-1)
})
let Evil_pEw_PeW: Sprite = null
let BOSS: Sprite = null
let FatBadGuy: Sprite = null
let pEw_PeW: Sprite = null
let Jett: Sprite = null
info.setScore(0)
info.setLife(3)
scene.setBackgroundImage(assets.image`Home Screen`)
music.playMelody("G G C E D - D C ", 120)
music.playMelody("C5 A G G E D C E ", 120)
pause(1000)
scene.setBackgroundImage(assets.image`Nard`)
Jett = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Jett, 100, 100)
Jett.setStayInScreen(true)
forever(function () {
    if (info.life() == 0) {
        game.over(false, effects.dissolve)
        game.reset()
    }
    music.playMelody("G G C E D - D C ", 120)
    music.playMelody("C5 A G G E D C E ", 120)
})
game.onUpdateInterval(500, function () {
    if (info.score() == 0) {
        game.showLongText("LEVEL 1", DialogLayout.Bottom)
        info.changeScoreBy(1)
    }
    FatBadGuy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    FatBadGuy.setVelocity(-100, 0)
    FatBadGuy.setPosition(160, randint(10, 110))
})
game.onUpdateInterval(500, function () {
    if (info.score() == 20) {
        game.showLongText("LEVEL 2", DialogLayout.Bottom)
        info.changeScoreBy(1)
    }
    if (info.score() >= 20) {
        FatBadGuy.setVelocity(-150, 0)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 40) {
        game.showLongText("BOSS LEVEL", DialogLayout.Bottom)
        info.changeScoreBy(1)
        BOSS = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        game.showLongText("There are going to be 5 waves of attacks. Defend them all or dodge them all and then destroy the Boss to rack up all those points!", DialogLayout.Bottom)
        info.changeScoreBy(1)
    }
    if (info.score() >= 40) {
        for (let index = 0; index < 4; index++) {
            Evil_pEw_PeW = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 50, 50)
            Evil_pEw_PeW.setPosition(160, randint(10, 110))
            Evil_pEw_PeW.setVelocity(200, 0)
        }
    }
})
