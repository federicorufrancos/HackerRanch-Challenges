function swapPositions(queue, actualPosition, briberPosition) {
    const bufferedNumber = queue[actualPosition];
    queue[actualPosition] = queue[briberPosition];
    queue[briberPosition] = bufferedNumber;
    return queue;
}

function swapTwoPositions(queue, actualPosition, briberPosition) {
    const brider = queue[actualPosition - 2];
    queue[actualPosition - 2] = queue[actualPosition - 1];
    queue[actualPosition - 1] = queue[actualPosition];
    queue[actualPosition] = brider;
    return queue;
}

function minimumBribes(q) {
    let minBribes = 0;
    let tooCaotic = false;
    let position = q.length - 1;
    while (position >= 0 && !tooCaotic) {
        const actualPerson = position + 1;
        if (q[position] === actualPerson) {
        } else {
            if (q[position - 1] === actualPerson) {
                swapPositions(q, position, position - 1);
                minBribes += 1;
            } else {
                if (q[position - 2] === actualPerson) {
                    q = swapTwoPositions(q, position, position - 2);
                    minBribes = minBribes + 2;
                } else {
                    tooCaotic = true;
                }
            }
        }
        position -= 1;
    }
    if (tooCaotic) {
        console.log("Too chaotic");
    } else {
        console.log(minBribes);
    }
}
//console.log(minimumBribes([1, 2, 4, 3]));
//console.log(minimumBribes([4, 2, 1, 3]));
//console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
