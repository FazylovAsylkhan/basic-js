const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.arrAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
    this.mode = flag
  }

  encrypt(message, key) {
    if (typeof message == 'undefined' || typeof key == 'undefined') throw new Error('Error');

    let arrKey = this.translateToNumbers(key);
    let arrMessage = this.translateToNumbers(message);
    let result =[];
    let j = 0;
    
    for (let i = 0; i < arrMessage.length; i++) {
      if (j == arrKey.length) j = 0;
      if (typeof arrMessage[i] == 'number') {
        let sumChars = arrMessage[i] + arrKey[j];

        sumChars = sumChars >= 26 ? sumChars - 26 : sumChars;
        result.push(this.translateToChars(sumChars))
        j++;
      } else {
        result.push(arrMessage[i])
      }
    }
    
    if (this.mode == false) return result.reverse().join('');

    return result.join('');
  }

  decrypt(message, key) {
    if (typeof message == 'undefined' || typeof key == 'undefined') throw new Error('Error');

    let arrKey = this.translateToNumbers(key);
    let arrMessage = this.translateToNumbers(message);
    let result =[];
    let j = 0;
    
    for (let i = 0; i < arrMessage.length; i++) {
      if (j == arrKey.length) j = 0;
      if (typeof arrMessage[i] == 'number') {
        let sumChars = arrMessage[i] - arrKey[j];

        sumChars = sumChars < 0 ? sumChars + 26 : sumChars;
        result.push(this.translateToChars(sumChars))
        j++;
      } else {
        result.push(arrMessage[i])
      }
    }
    
    if (this.mode == false) return result.reverse().join('');

    return result.join('');
  }

  translateToNumbers(arr) {
    return arr.toUpperCase().split('').map(item => this.arrAlphabet.find(char => char == item) ? this.arrAlphabet.findIndex(char => char == item) : item);
  }
  translateToChars(number) {
    return this.arrAlphabet[number];
  }  
}

module.exports = VigenereCipheringMachine;
