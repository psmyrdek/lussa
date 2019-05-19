import { getRandomColors } from "./colors";
import { Color } from 'src/app/_models/ColorEnum';

describe('Color utils', () => {

    it ('should return random colors from when four colors remain', () => {

        const setup = [Color.White, Color.Yellow, Color.Orange, Color.Magenta];
        const colors = getRandomColors(setup);

        expect(colors.includes(Color.White))
        expect(colors.includes(Color.Yellow))
        expect(colors.includes(Color.Orange))
        expect(colors.includes(Color.Magenta))

    })

    it ('should return random colors from when one color remains', () => {

        const setup = [Color.White];
        const colors = getRandomColors(setup);

        expect(colors.includes(Color.White))

    })

    it ('should return random colors from when two colors remain', () => {

        const setup = [Color.White, Color.Yellow];
        const colors = getRandomColors(setup);

        expect(colors.includes(Color.White))
        expect(colors.includes(Color.Yellow))

    })

})