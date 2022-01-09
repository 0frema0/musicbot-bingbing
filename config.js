module.exports = {
    app: {
        px: '!',
        token: 'OTI5NDkyMDg1MDAwNzgxODY0.YdoG9g.a_rCgVFUbcc3licniA6qoFb9BeE',
        playing: 'by Frema ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
