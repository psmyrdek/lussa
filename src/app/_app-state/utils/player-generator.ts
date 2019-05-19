import { Player } from 'src/app/_models/Player';
import { Column } from 'src/app/_models/Column';
import { getRandomInt } from './random-int';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { Color } from 'src/app/_models/ColorEnum';

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

        isDisabled: false,

        activeVariant: getRandomInt(0, 1) === 0 ? ColumnVariantEnum.A : ColumnVariantEnum.B,

        variantA: variantPairs[indexesTaken[index]][0],
        variantB: variantPairs[indexesTaken[index]][1],

        isVariantCompleted: false,
        isColumnCompleted: false,

        value: columnValue

    }))

}

export function generatePlayer(id: string): Player {
    return {
        id,
        columns: generateColumns()
    }
}