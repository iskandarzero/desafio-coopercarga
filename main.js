class PrimeNumberGenerator {
  static main() {
    const numbersArr = this.generatePrimeNumbers(1000);
    this.formatPages(numbersArr);
  }

  static generatePrimeNumbers(limit) {
    const numbersArr = new Array(limit + 1).fill(0);
    const multiples = new Array(31).fill(0);
    let index = 1;
    let isPrime = false;
    let ord = 2;
    let square = 9;
    numbersArr[1] = 2;

    for (let i = 1; i < limit; i++, numbersArr[i] = index) {
      do {
        index += 2;
        if (index === square) {
          ord++;
          square = numbersArr[ord] * numbersArr[ord];
          multiples[ord - 1] = index;
        }
        let n = 2;
        isPrime = true;
        while (n < ord && isPrime) {
          while (multiples[n] < index) {
            multiples[n] += numbersArr[n] + numbersArr[n];
          }
          if (multiples[n] === index) {
            isPrime = false;
          }
          n++;
        }
      } while (!isPrime);
    }

    return numbersArr;
  }

  static formatPages(numbersArr) {
    const colLimit = 4;
    const rowLimit = 50;
    let pageNumber = 1;
    let rowOffset = 1;

    while (rowOffset < numbersArr.length) {
      console.log("Page ", pageNumber);
      for (let row = 0; row < rowLimit; row++) {
        const rowElements = [];
        for (let col = 0; col < colLimit; col++) {
          const index = rowOffset + col * rowLimit + row;
          if (index <= numbersArr.length) {
            rowElements.push(numbersArr[index]);
          }
        }
        console.log(rowElements.join('|'));
      }
      pageNumber++;
      rowOffset += rowLimit * colLimit;
    }
  }
}

PrimeNumberGenerator.main([]);
