module.exports.createSuppliers = (noOfPlayers) => {
    switch (noOfPlayers) {
        case 2:
            return [
                { id: 0, colors: [] },
                { id: 1, colors: [] },
                { id: 2, colors: [] },
                { id: 3, colors: [] },
                { id: 4, colors: [] }
            ]
        case 3:
            return [
                { id: 0, colors: [] },
                { id: 1, colors: [] },
                { id: 2, colors: [] },
                { id: 3, colors: [] },
                { id: 4, colors: [] },
                { id: 5, colors: [] },
                { id: 6, colors: [] }
            ]
        case 4:
            return [
                { id: 0, colors: [] },
                { id: 1, colors: [] },
                { id: 2, colors: [] },
                { id: 3, colors: [] },
                { id: 4, colors: [] },
                { id: 5, colors: [] },
                { id: 6, colors: [] },
                { id: 7, colors: [] },
                { id: 8, colors: [] }
            ]
        default:
            return [
                { id: 0, colors: [] }
            ]
    }
}