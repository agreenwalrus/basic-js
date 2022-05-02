const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

function isRequired() {
  throw Error('Incorrect arguments!');
};

class VigenereCipheringMachine {
  _startCode = 'A'.charCodeAt(0);
  _base = 26;

  constructor (isDirect=true) {
    this._isDirect = isDirect;
  }

  _getKey(upperMessage, key) {
    let len = upperMessage.split("").filter(el => {
      return (el.charCodeAt(0) < this._startCode + this._base) 
        && (el.charCodeAt(0) >= this._startCode)
    }).length;
    let upperKey = "";

    for(let m = 0; m < Math.ceil(len / key.length); m++) {
      upperKey += key.toUpperCase();
    }
    return upperKey;
  }

  _algorithm(message, key, sign) {
    let upperMessage = this._isDirect ? message.toUpperCase() : message.split('').reverse().join('').toUpperCase();
    let upperKey = this._getKey(upperMessage, key);
    var encryptedMessage = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      let symb = upperMessage.charCodeAt(i);
      if ((symb <= this._startCode + this._base) 
        && (symb >= this._startCode)) {
            encryptedMessage.push(this._startCode 
              + ((symb
                  + (this._base + sign * upperKey.charCodeAt(j)))
                % this._base));
            j++;
          }
      else 
        encryptedMessage.push(upperMessage.charCodeAt(i));
    }
    return String.fromCharCode(...encryptedMessage);    
  }


  encrypt(message=isRequired(), key=isRequired()) {
    return this._algorithm(message, key, 1)
  }
  decrypt(encryptedMessage=isRequired(), key=isRequired()) {
    return this._algorithm(encryptedMessage, key, -1)
  }
}

module.exports = {
  VigenereCipheringMachine
};
