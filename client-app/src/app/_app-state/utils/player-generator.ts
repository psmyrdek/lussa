import { Player } from 'src/app/_models/Player';
import { Column } from 'src/app/_models/Column';
import { getRandomInt } from './random-int';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { Color } from 'src/app/_models/ColorEnum';
import { ScoreStep } from 'src/app/_models/ScoreStep';

const variantPairs: [ColumnVariant, ColumnVariant][] = [
    [
        {
            fields: [
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Orange, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.White, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Cyan, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.White, isFilled: false},
                { color: Color.Joker, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Joker, isFilled: false},
                { color: Color.Magenta, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.Cyan, isFilled: false},
                { color: Color.Cyan, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Yellow, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false},
                { color: Color.Magenta, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.Magenta, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false},
                { color: Color.Orange, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false}
            ]
        }
    ],
    [
        {
            fields: [
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false},
                { color: Color.Yellow, isFilled: false}
            ]
        },
        {
            fields: [
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false},
                { color: Color.White, isFilled: false}
            ]
        }
    ]
]

function generateColumns(): Column[] {

    const values = [4, 3, 3, 2, 2, 1, 1, 2];
    const indexesTaken = [];

    while (indexesTaken.length < values.length) {
        const tryIndex = getRandomInt(0, values.length - 1)
        if (!indexesTaken.includes(tryIndex)) {
            indexesTaken.push(tryIndex);
        }
    }

    return values.map((columnValue, index) => ({

        id: index,

        isDisabled: false,

        activeVariant: getRandomInt(0, 1) === 0 ? ColumnVariantEnum.A : ColumnVariantEnum.B,

        variantA: variantPairs[indexesTaken[index]][0],
        variantB: variantPairs[indexesTaken[index]][1],

        isVariantCompleted: false,
        isColumnCompleted: false,

        value: columnValue

    }))

}

function generateScoreSteps(): ScoreStep[] {
    return [
        { isActive: true, value: 0 },
        { isActive: false, value: -1 },
        { isActive: false, value: -2 },
        { isActive: false, value: -4 },
        { isActive: false, value: -5 },
        { isActive: false, value: -8 },
        { isActive: false, value: -10 },
        { isActive: false, value: -12 },
        { isActive: false, value: -15 },
        { isActive: false, value: -18 }
    ]
}

export function generatePlayer(id: string): Player {
    return {
        id,
        score: 0,
        scoreSteps: generateScoreSteps(),
        columns: generateColumns()
    }
}