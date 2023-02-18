const fs = require('fs');
const { randomIntFromInterval } = require('./utils');
const data = fs.readFileSync('./bars.json', 'utf8');
const bars = JSON.parse(data);

/**
 * Gets a random bar from the Bar from the local database.
 * @returns \{ name: string, path: string }
 */
const getBarSuggestion = () => {
  const index = randomIntFromInterval(0, getBarsCount());
  return bars.list[index];
}

/**
 * 
 * @returns {number} bars count
 */
const getBarsCount = () => {
  return bars.list.length;
}

module.exports = { getBarSuggestion, getBarsCount }