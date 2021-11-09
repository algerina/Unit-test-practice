const reverseString = (string) => {
    let str = [];
    str = string.split('');
    str.reverse();
    return str.join('');

}

module.exports = reverseString;