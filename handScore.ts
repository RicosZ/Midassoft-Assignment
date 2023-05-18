function getHandScore(input: string): number {
    const cards = input.split(" ");
    const scoreMap: { [key: string]: number } = { H: 0, C: 0, D: 0, S: 0 };
    let maxScore = 0;

    const checkSameRank = (cards: String[]) => cards.filter((item, index) => cards.indexOf(item) !== index);

    const sameRank = [...new Set(checkSameRank(cards))];
    if (sameRank.length !== 0) {
        const isSameA = (card: String) => card.substring(1) === "A";
        if (sameRank.every(isSameA)) {
            return maxScore = 35;
        } else {
            return maxScore = 32.5;
        }
    }

    cards.forEach((card) => {
        const suit = card.charAt(0);
        const rank = card.substring(1);
        if (rank === "A") {
            scoreMap[suit] += 11;
        } else if (rank === "K" || rank === "Q" || rank === "J") {
            scoreMap[suit] += 10;
        } else {
            scoreMap[suit] += parseInt(rank, 10);
        }
        if (scoreMap[suit] > maxScore) {
            maxScore = scoreMap[suit];
        }
    });

    return maxScore;
}

console.log(getHandScore("SA SA SA"));
console.log(getHandScore("S8 S8 S8"));
console.log(getHandScore("SJ SJ SJ"));
console.log(getHandScore("S8 S10 CA"));