function getShortMessages(messages) {
	return messages.filter( x => x.message.length < 50);
}

module.exports = getShortMessages;
