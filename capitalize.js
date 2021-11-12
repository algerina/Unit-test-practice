const capitalize = (string) => {
    if(typeof(string) === 'string') {
        return string[0].toUpperCase() + string.slice(1);
    } else {
        throw new Error('You have to enter a string')

    }
}

module.exports = capitalize;