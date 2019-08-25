const path = require('path');

module.exports = {
  entry: './source/game.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js'
  }
};