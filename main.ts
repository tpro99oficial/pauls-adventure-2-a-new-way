controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Volume", "Developers", "Return", "Exit")
    if (story.checkLastAnswer("Developers")) {
        story.showPlayerChoices("DevTools", "More...")
        if (story.checkLastAnswer("DevTools")) {
            story.showPlayerChoices("Console Mode", "API Visor ")
        }
    }
    if (story.checkLastAnswer("Exit")) {
        story.showPlayerChoices("Go Home", "I Changed My Mind...")
        if (story.checkLastAnswer("Go Home")) {
            game.showLongText("Sure? Your Progress will Do Not Save", DialogLayout.Bottom)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                game.reset()
            }
        }
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    story.showPlayerChoices("Volume", "Developers", "Return", "Exit")
    if (story.checkLastAnswer("Developers")) {
        story.showPlayerChoices("DevTools", "More...")
        if (story.checkLastAnswer("DevTools")) {
            story.showPlayerChoices("Console Mode", "API Visor ")
        }
    }
    if (story.checkLastAnswer("Exit")) {
        story.showPlayerChoices("Go Home", "I Changed My Mind...")
        if (story.checkLastAnswer("Go Home")) {
            game.showLongText("Sure? Your Progress will Do Not Save", DialogLayout.Bottom)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                game.reset()
            }
        }
    }
})
let paul: Sprite = null
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f 
    `)
game.showLongText("Conecting To Pauls Adventure 2: A New Way", DialogLayout.Bottom)
story.showPlayerChoices("Season One", "Play", "Settings", "Multiplayer")
if (story.checkLastAnswer("Season One")) {
    story.showPlayerChoices("New On This Season", "Play Season One", "More...")
    if (story.checkLastAnswer("More...")) {
        story.showPlayerChoices("", "Story Of Season")
    }
}
if (story.checkLastAnswer("Multiplayer")) {
    story.showPlayerChoices("Local", "Online")
    if (story.checkLastAnswer("Local")) {
        game.showLongText("To Play Online Connect your TWUG PowerLink 2 within the PC's You Like To Play Theres An Example", DialogLayout.Bottom)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ........11111111111111111111111111111111111111111111111111111111111111111111111111..............................................................................
            ........1........................................................................1....................................111111111111111111111111111111111111111111
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................1....................................1........................................1
            ........1........................................................................111111111............................1........................................1
            ........1........................................................................11111111111111111111111111111111111111........................................1
            ........1........................................................................1....................................111111111111111111111111111111111111111111
            ........1........................................................................1.......................................11111111111111111111111111111111111111.
            ........1........................................................................1.......................................1....................................1.
            ........1........................................................................1.......................................1....................................1.
            ........1........................................................................1.......................................1....................................1.
            ........1........................................................................1.......................................1....................................1.
            ........1........................................................................1.......................................1....................................1.
            ........11111111111111111111111111111111111111111111111111111111111111111111111111.......................................1....................................1.
            .........111111111111111111111111111111111111111111111111111111111111111111111111........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................1....................................1.
            .........1......................................................................1........................................11111111111111111111111111111111111111.
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1.......................................................................3.......
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........1......................................................................1...............................................................................
            .........111111111111111111111111111111111111111111111111111111111111111111111111...............................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        game.showLongText("Get A PowerLink 2 and connect it Within' Your PC's", DialogLayout.Bottom)
        game.reset()
    }
}
if (story.checkLastAnswer("Settings")) {
    story.showPlayerChoices("GamNet ID", "General")
    if (story.checkLastAnswer("General")) {
        story.showPlayerChoices("Sound", "GamNet ID Settings", "Brightness", "About")
        if (story.checkLastAnswer("About")) {
            story.showPlayerChoices("Copyright", "About Game", "Manual")
            if (story.checkLastAnswer("Copyright")) {
                game.showLongText("Copyright ©2021 Tpro Studios, Paul, Miss Gardou, Is some of our Registered Marks. Microsoft MakeCode, Microsoft is a Trademark of Microsoft Corporation ©Microsoft Corporation", DialogLayout.Bottom)
                game.reset()
            }
            if (story.checkLastAnswer("Manual")) {
                game.showLongText("Press A Button To Continue, In Game Press A Does Nothing, Press MENU To Get A Show of Pauls Adventure 2 Menu Press RESET To Restart The Game Use the + To Move Into The Options and Move Paul, Press A Again to Reset", DialogLayout.Bottom)
                game.reset()
            }
            if (story.checkLastAnswer("About Game")) {
                game.showLongText("Pauls Adventure 2 Season 1 Version 1.1.0", DialogLayout.Bottom)
                game.reset()
            }
        }
    }
    if (story.checkLastAnswer("GamNet ID")) {
        game.showLongText("Connect Your GamNet ID to Pauls Adventure 2 to get Features Like Multiplayer", DialogLayout.Bottom)
        game.reset()
    }
    if (story.checkLastAnswer("GamNet ID")) {
        game.showLongText("Connect Your GamNet ID to Pauls Adventure 2 to get Features Like Multiplayer", DialogLayout.Bottom)
        game.reset()
    }
}
if (story.checkLastAnswer("Play")) {
    story.showPlayerChoices("Paul", "Quit")
    if (story.checkLastAnswer("Paul")) {
        paul = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(paul)
    }
}
controller.moveSprite(paul)
tiles.setTilemap(tilemap`level1`)
