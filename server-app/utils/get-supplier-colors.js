const { getRandomInt } = require('./get-random-int');

module.exports.getSupplierColors = (colors) => {

    const maxToPick = colors.length > 4 ? 4 : colors.length
    const randomIndexes = [];

    while (randomIndexes.length < maxToPick) {
        const tryIndex = getRandomInt(0, colors.length - 1);
        if (!randomIndexes.includes(tryIndex)) {
            randomIndexes.push(tryIndex);
        }
    }

    const toGet = randomIndexes.map(index => colors[index])
    const toKeep = colors.filter((color, index) => { return !randomIndexes.includes(index) })

    return [toGet, toKeep];
}