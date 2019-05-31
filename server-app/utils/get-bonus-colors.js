const {getRandomInt} = require('./get-random-int');

module.exports.getBonusColors = (colors) => {

    const bonusColors = [];
    const indexOfColors = [];

    while (indexOfColors.length < 5) {
        const index = getRandomInt(0, colors.length - 1);

        if (!indexOfColors.includes(index) && !bonusColors.includes(colors[index])) {
            bonusColors.push(colors[index])
            indexOfColors.push(index);
        }
    }

    return [
        bonusColors,
        colors.filter((value, index) => !indexOfColors.includes(index))
    ]

}