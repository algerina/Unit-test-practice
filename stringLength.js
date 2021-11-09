const stringLength = (string) => {
    if (string.length > 1 && string.length < 10) {
        return string.length;
    } else {
        throw new Error('String length is over than allowed');
    }
}

module.exports = 'stringLength';