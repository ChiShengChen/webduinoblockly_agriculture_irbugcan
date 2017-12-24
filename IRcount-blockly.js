+(function (window, webduino) {
  'use strict';
  window.getBugcan = function(board, pin) {
    return new webduino.module.irbugcan(board, board.getDigitalPin(pin));
  }
}(window, window.webduino));
