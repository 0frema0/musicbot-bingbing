const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'filters',
    aliases: [''],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('BLUE');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('List of all filters avalable.');
        embed.addFields(
            { name: 'bassboost_low', value: '.', inline: true },
            { name: 'bassboost', value: '.', inline: true },
            { name: 'bassboost_high', value: '.', inline: true },
            { name: '8D', value: '.', inline: true },
            { name: 'vaporwave', value: '.', inline: true },
            { name: 'nightcore', value: '.', inline: true },
            { name: 'phaser', value: '.', inline: true },
            { name: 'tremolo', value: '.', inline: true },
            { name: 'vibrato', value: '.', inline: true },
            { name: 'reverse', value: '.', inline: true },
            { name: 'treble', value: '.', inline: true },
            { name: 'normalizer', value: '.', inline: true },
            { name: 'surrounding', value: '.', inline: true },
            { name: 'pulsator', value: '.', inline: true },
            { name: 'subboost', value: '.', inline: true },
            { name: 'karaoke', value: '.', inline: true },
            { name: 'flanger', value: '.', inline: true },
            { name: 'gate', value: '.', inline: true },
            { name: 'compressor', value: '.', inline: true },
            { name: 'mono', value: '.', inline: true },
            { name: 'softlimiter', value: '.', inline: true },
            { name: 'chorus', value: '.', inline: true },
            { name: 'chorus3d', value: '.', inline: true },
            { name: 'earrape', value: '.', inline: true },

        )
        embed.setTimestamp();
        embed.setFooter('Music is life - Made by Frema ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};