exports.run = (client, message, args) => {
    execute (message)
    message.channel.send("pong?").catch(console.error);
}
