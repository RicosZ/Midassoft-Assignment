function getQuestionPart(phrases: string[]): string[] {
    let result: string[] = [];
    const words: string[] = [];
    for (let i = 0; i < phrases[0].length; i++) {
        const char = phrases[0][i];
        if (phrases[1].includes(char) && phrases[2].includes(char)) {
            words.push(char);
        }
    }
    const word = [...new Set(words.reverse())];
    const commonWord = word.reverse().join('');
    phrases.forEach((word) => {
        result.push(...word.split(commonWord).filter(x => x != ''));
    });
    return result;
}

console.log(getQuestionPart(["BATHROOM", "BATH SALTS", "BLOODBATH"]));
console.log(getQuestionPart(["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"]));