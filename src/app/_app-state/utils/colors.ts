import { Color } from 'src/app/_models/ColorEnum';

function getRandomInt(min, max) {
    let minInt = Math.ceil(min);
    let maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}

export function getRandomColors(colors: Color[]): Color[] {
    const randomIndexes = [];
    const randomColors = [];

    const maxToPick = colors.length > 4 ? 4 : colors.length

    console.log(`
        available: ${colors.length},
        max: ${maxToPick}
    `)

    while (randomIndexes.length < maxToPick) {
        const tryIndex = getRandomInt(0, colors.length - 1);
        if (!randomIndexes.includes(tryIndex)) {
            randomIndexes.push(tryIndex);
            randomColors.push(colors[tryIndex]);
        }
    }

    return randomColors;
}

export function removePickedColors(availableColors: Color[], colorsToRemove: Color[]) {

    console.log(`
        toRemove: ${colorsToRemove.length}
    `)
    
    const alreadyRemoved = [];

    return availableColors.filter(color => {
        if (colorsToRemove.includes(color)) {
            if (alreadyRemoved.includes(color)) {
                return true;
            } else {
                alreadyRemoved.push(color);
                return false;
            }
        } else {
            return true;
        }
    })

}