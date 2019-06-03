module.exports.calcTurnPenalty = (noOfBroken, scoreSteps) => {
    const currentIndex = scoreSteps.findIndex(s => s.isActive);
    const newIndex = (currentIndex + noOfBroken) % scoreSteps.length;

    return newIndex < currentIndex ? scoreSteps[scoreSteps.length - 1].value : 0;
}

module.exports.updateScoreSteps = (noOfBroken, scoreSteps) => {
    
    const currentIndex = scoreSteps.findIndex(s => s.isActive);
    const newIndex = (currentIndex + noOfBroken) % scoreSteps.length;

    return scoreSteps
        .map((step, index) => ({
            ...step,
            isActive: newIndex === index
        }))
}