"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRank = exports.getRandomWords = void 0;
function getRandomWords(wordsList, numWords) {
    const categories = {
        adjective: [],
        adverb: [],
        noun: [],
        verb: [],
    };
    const numOfcategories = Object.keys(categories).length;
    // validating that desired words count is not bigger than wordList and not less Than the categories
    if (!(wordsList.length >= numWords && numWords >= numOfcategories)) {
        throw new Error(`
      The number of desired random words must be less than or equal the wordList length 
      and 
      bigger than or equal the number of categories.`);
    }
    // Categorize the words by pushing every word to its array category in categories Obj
    wordsList.forEach((word) => categories[word.pos].push(word));
    const getRandomWordFromCategory = (category) => {
        return category[Math.floor(Math.random() * category.length)];
    };
    // Ensure at least one word from each category
    const selectedWords = [
        getRandomWordFromCategory(categories.adjective),
        getRandomWordFromCategory(categories.adverb),
        getRandomWordFromCategory(categories.noun),
        getRandomWordFromCategory(categories.verb),
    ];
    // To Get The Rest Of the Random Words List Example 10 Words - 4 Categories = 6 More Words
    // Randomly select 6 more words from all categories
    const remainingWords = wordsList.filter((word) => !selectedWords.includes(word));
    while (selectedWords.length < numWords && remainingWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingWords.length);
        selectedWords.push(remainingWords[randomIndex]);
        remainingWords.splice(randomIndex, 1);
    }
    return selectedWords;
}
exports.getRandomWords = getRandomWords;
function calcRank(finalScore, scoresList) {
    // Find the number of scores below the finalScore
    const scoresBelowFinalScore = scoresList.filter((score) => score < finalScore).length;
    // Calculate the rank percentage
    const rankPercentage = (scoresBelowFinalScore / scoresList.length) * 100;
    // Round the rankPercentage to two decimal places
    const roundedRankPercentage = Math.round(rankPercentage * 100) / 100;
    return roundedRankPercentage;
}
exports.calcRank = calcRank;
