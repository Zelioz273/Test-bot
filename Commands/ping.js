exports.run = (message, args) => {
    message.channel.send("pong!").catch(console.error);
}
