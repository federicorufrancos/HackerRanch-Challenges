function countingValleys(n, s) {
    var cSeaLevel = 0;
    let valleyCount = 0;
    let inValley = false;
    for (let i = 0; i <= n; i++) {
        const currentStep = s.charAt(i);
        if (currentStep === "D") {
            cSeaLevel = cSeaLevel - 1;
        } else {
            cSeaLevel = cSeaLevel + 1;
        }
        if (cSeaLevel === -1 && currentStep === "D") {
            inValley = true;
        } else if (
            i > 0 &&
            cSeaLevel === 0 &&
            currentStep === "U" &&
            inValley
        ) {
            valleyCount = valleyCount + 1;
            inValley = false;
        }
    }
    return valleyCount;
}
