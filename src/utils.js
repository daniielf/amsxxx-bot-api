/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} Random Number in the inverval
 */
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 
 * @param {string} path 
 * @returns {string} Full URL
 */
const getUrl = (path) => `https://www.iamsterdam.com/en/${path}`;

module.exports = { randomIntFromInterval, getUrl }