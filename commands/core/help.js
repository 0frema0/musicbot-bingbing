const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('PURPLE');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('List of all commands avalable.');
        embed.addFields(
            { name: 'play(p)', value: 'Plays music' },
            { name: 'back(previous)', value: 'Plays previous song' },
            { name: 'clear(cq)', value: 'Clears music queue' },
            { name: 'filter', value: 'Use any filters you would like', inline: true },
            { name: 'filters', value: 'Lists all avalable filters', inline: true },
            { name: 'loop(lp, repeat)', value: 'Repeats song, playlist' },
            { name: 'lyrics', value: 'Shows lyrics for currently playing song' },
            { name: 'nowplaying(np)', value: 'Shows currently playing song' },
            { name: 'pause', value: 'Pauses a song' },
            { name: 'progress(pbar)', value: 'Shows prorgess of current song' },
            { name: 'queue(q)', value: 'Shows songs in queue' },
            { name: 'resume(rs)', value: 'Resumes paused song' },
            { name: 'save(sv)', value: 'Saves a song' },
            { name: 'search(sh)', value: 'Searches for a song' },
            { name: 'shuffle', value: 'Shuffles songs in queue' },
            { name: 'skip(s)', value: 'Skips currently playing song' },
            { name: 'stop', value: 'Stops playing music' },
            { name: 'volume(vol)', value: 'Changes music volume (0-100)' },
        )
        embed.setTimestamp();
        embed.setFooter('Music is life - Made by Frema ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};