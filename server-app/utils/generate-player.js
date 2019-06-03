const {getRandomInt} = require('./get-random-int')
const {Color} = require('../models/color.js')
const {ColumnVariantEnum} = require('../models/column-variant-enum.js')

const getVariantPairs = () => [
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

function generateColumns() {

    const variantPairs = getVariantPairs()

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

function generateScoreSteps() {
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

module.exports.generatePlayer = (playerId) => ({
    id: playerId,
    score: 0,
    scoreSteps: generateScoreSteps(),
    columns: generateColumns(),
    turnColors: [],
    isReady: false
})