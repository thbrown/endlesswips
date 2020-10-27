class Utils {
  arrayOfLength = function (length, value) {
    let array = [];
    for (let i = 0; i < length; i++) {
      array.push(i * value);
    }
    return array;
  };

  mean(numbers) {
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  }

  median(numbers) {
    const middle = (numbers.length + 1) / 2;
    const sorted = [...numbers].sort((a, b) => a - b);
    const isEven = sorted.length % 2 === 0;
    return isEven
      ? (sorted[middle - 1.5] + sorted[middle - 0.5]) / 2
      : sorted[middle - 1];
  }

  CAGR(beginingValue, endingValue, periods) {
    return Math.pow(endingValue / beginingValue, 1 / periods) - 1;
  }

  /**
   * This IRR method works better than it's financejs counterpart for our purposes.
   * From: https://gist.github.com/ghalimi/4591338
   */
  IRR(values, guess) {
    // Credits: algorithm inspired by Apache OpenOffice

    // Calculates the resulting amount
    var irrResult = function (values, dates, rate) {
      var r = rate + 1;
      var result = values[0];
      for (var i = 1; i < values.length; i++) {
        result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
      }
      return result;
    };

    // Calculates the first derivation
    var irrResultDeriv = function (values, dates, rate) {
      var r = rate + 1;
      var result = 0;
      for (var i = 1; i < values.length; i++) {
        var frac = (dates[i] - dates[0]) / 365;
        result -= (frac * values[i]) / Math.pow(r, frac + 1);
      }
      return result;
    };

    // Initialize dates and check that values contains at least one positive value and one negative value
    var dates = [];
    var positive = false;
    var negative = false;
    for (var i = 0; i < values.length; i++) {
      dates[i] = i === 0 ? 0 : dates[i - 1] + 365;
      if (values[i] > 0) positive = true;
      if (values[i] < 0) negative = true;
    }

    // Return error if values does not contain at least one positive value and one negative value
    if (!positive || !negative) return "#NUM!";

    // Initialize guess and resultRate
    var guess = typeof guess === "undefined" ? 0.1 : guess;
    var resultRate = guess;

    // Set maximum epsilon for end of iteration
    var epsMax = 1e-10;

    // Set maximum number of iterations
    var iterMax = 50;

    // Implement Newton's method
    var newRate, epsRate, resultValue;
    var iteration = 0;
    var contLoop = true;
    do {
      resultValue = irrResult(values, dates, resultRate);
      newRate =
        resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
      epsRate = Math.abs(newRate - resultRate);
      resultRate = newRate;
      contLoop = epsRate > epsMax && Math.abs(resultValue) > epsMax;
    } while (contLoop && ++iteration < iterMax);

    if (contLoop) return "#NUM!";

    // Return internal rate of return
    return resultRate;
  }
}

module.exports = Utils;
