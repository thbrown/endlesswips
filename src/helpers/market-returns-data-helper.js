const fs = require("fs");
const Utils = require("./utils");

const utils = new Utils();

// Table Inputs
const PERIODS = [5, 10, 20, 30, 40, 50, 60, 70, 80].sort();
const CAPITAL_GAINS_RATES = [0, 0.15, 0.188, 0.2, 0.238].sort();
const EXPENSE_RATIOS = [
  0,
  0.00015,
  0.0003,
  0.0025,
  0.005,
  0.0075,
  0.01,
  0.02,
].sort();

// Data Constants
const END_DATE = "2020.01";
const CPI_CURRENT_DATE = "2020.08";
const TARGET_MONTH = ".01";

// CSV Column Indexes
const DATE = 0;
const PRICE = 1;
const DIVIDEND = 2;
const CPI = 4;
const REAL_PRICE = 7;
const REAL_TOTAL_PRICE = 9;

class MarketReturnsDataHelper {
  // Data URLs
  static CAGR_URL = "return-pyramid-cagr.json";
  static IRR_URL = "return-pyramid-irr.json";
  static IRR_DCA_URL = "return-pyramid-irr-dca.json";
  static SANDP_YEARLY = "return-histogram_sandp-yearly.json";

  printSummaryTable(processedCagrData, processedIrrData, processedDcaData) {
    // Print results
    let keys = Object.keys(processedCagrData);
    let stringData = `<table><thead><tr><th style="vertical-align:middle; font-size:x-small" rowspan="2">Period in Years</th><th colspan="3" style="text-align: center">Worst Return</th><th colspan="3" style="text-align: center">Median Return</th><th colspan="3" style="text-align: center">Best Return</th></tr><tr><th>Lump Sum</th><th>Yearly</th><th>Yearly DCA</th><th>Lump Sum</th><th>Yearly</th><th>Yearly DCA</th><th>Lump Sum</th><th>Yearly</th><th>Yearly DCA</th></tr></thead><tbody>`;
    for (let i = 0; i < keys.length; i++) {
      let cagr = processedCagrData[keys[i]];
      let irr = processedIrrData[keys[i]];
      let dca = processedDcaData[keys[i]];

      stringData +=
        `<tr>` +
        `<td>${keys[i]}</td>` +
        `<td>${(cagr.worstReturn * 100).toFixed(2)}%</td>` +
        `<td>${(irr.worstReturn * 100).toFixed(2)}%</td>` +
        `<td>${(dca.worstReturn * 100).toFixed(2)}%</td>` +
        `<td>${(utils.median(cagr.allReturns) * 100).toFixed(2)}%</td>` +
        `<td>${(utils.median(irr.allReturns) * 100).toFixed(2)}%</td>` +
        `<td>${(utils.median(dca.allReturns) * 100).toFixed(2)}%</td>` +
        `<td>${(cagr.bestReturn * 100).toFixed(2)}%</td>` +
        `<td>${(irr.bestReturn * 100).toFixed(2)}%</td>` +
        `<td>${(dca.bestReturn * 100).toFixed(2)}%</td>` +
        `</tr>`;
    }
    stringData += `</tbody></table>`;
    console.log(stringData);
  }

  printTables(inputData, mode) {
    // Generate best and worst return table
    let savedData = {}; // worstReturn, worstYear, bestReturn, bestYear, number, summedReturns
    for (let i = 0; i < inputData.length; i++) {
      let square = inputData[i];
      let timePeriod = square.endYear - square.startYear;
      if (PERIODS.includes(timePeriod)) {
        if (savedData[timePeriod]) {
          if (savedData[timePeriod].worstReturn > square.return) {
            savedData[timePeriod].worstReturn = square.return;
            savedData[timePeriod].worstYear =
              square.startYear + " - " + square.endYear;
          }
          if (savedData[timePeriod].bestReturn < square.return) {
            savedData[timePeriod].bestReturn = square.return;
            savedData[timePeriod].bestYear =
              square.startYear + " - " + square.endYear;
          }
          savedData[timePeriod].allReturns.push(square.return);
        } else {
          savedData[timePeriod] = {};
          savedData[timePeriod].worstReturn = square.return;
          savedData[timePeriod].worstYear =
            square.startYear + " - " + square.endYear;
          savedData[timePeriod].bestReturn = square.return;
          savedData[timePeriod].bestYear =
            square.startYear + " - " + square.endYear;
          savedData[timePeriod].allReturns = [square.return];
        }
      }
    }

    // Print results
    let keys = Object.keys(savedData);
    let stringData = "";
    stringData =
      "| Period in Years | Worst Return | Worst Return Years | Best Return | Best Return Years | Median Return \n";
    stringData +=
      "| ------ | ------------ | ------------------ | ----------- | ----------------- | --------- \n";

    for (let i = 0; i < keys.length; i++) {
      let toPrint = savedData[keys[i]];
      stringData +=
        keys[i] +
        " | " +
        (toPrint.worstReturn * 100).toFixed(2) +
        "%" +
        " | " +
        toPrint.worstYear +
        " | " +
        (toPrint.bestReturn * 100).toFixed(2) +
        "%" +
        " | " +
        toPrint.bestYear +
        " | " +
        (utils.median(toPrint.allReturns) * 100).toFixed(2) +
        "%" +
        "\n";
    }
    console.log(stringData);
    return savedData;
  }

  printLongestReturn(sAndPData) {
    let longCagr =
      Math.pow(
        sAndPData[sAndPData.length - 1].price / sAndPData[0].price,
        1 / (sAndPData.length - 1)
      ) - 1;
    console.log(
      "Longest term return",
      longCagr,
      "from",
      sAndPData[0].year,
      "to",
      sAndPData[sAndPData.length - 1].year
    );
  }

  printLosingYears(sAndPData) {
    let histogramData = [];

    let losingYearsCounter = 0;
    for (let i = 1; i < sAndPData.length; i++) {
      let cagr =
        Math.pow(
          sAndPData[i].price / sAndPData[i - 1].price,
          1 / (i - (i - 1))
        ) - 1;

      histogramData.push({
        years: sAndPData[i - 1].year, // + "-" + sAndPData[i].year,
        cagr: cagr,
      });
      if (cagr < 0) {
        losingYearsCounter++;
      }
    }
    console.log(
      "Losing years",
      losingYearsCounter,
      "of",
      histogramData.length - 1,
      losingYearsCounter / (histogramData.length - 1)
    );

    return histogramData;
  }

  generateData() {
    console.log("------ Generating Visualizing Volatility Data ------");

    // Get data from file system
    const sAndP500Data = fs.readFileSync("./data/shiller-s-and-p-500.csv", {
      encoding: "utf8",
      flag: "r",
    });

    // Transform it into yearly data
    let dataRows = sAndP500Data.split(/\r?\n/);
    let sAndPData = [];
    let feeAndTaxData = {};
    let feeAndTaxReturns = {};

    // Get CPI_CURRENT CPI value
    let currentCPI = 0;
    for (let i = 2; i < dataRows.length; i++) {
      let dataRow = dataRows[i].split(/,/);
      if (dataRow[DATE] === CPI_CURRENT_DATE) {
        currentCPI = dataRow[CPI];
      }
    }

    // Skip first two rows, those are headers
    for (let i = 2; i < dataRows.length; i++) {
      let dataRow = dataRows[i].split(/,/);
      //console.log(dataRow);
      // We only care about the price at the beginning of the year (this data shows price in mid January)
      if (dataRow[DATE].endsWith(TARGET_MONTH)) {
        // Data for charts
        sAndPData.push({
          // Chop off the month data
          year: parseInt(
            dataRow[DATE].substring(
              0,
              dataRow[DATE].length - TARGET_MONTH.length
            )
          ),
          price: parseFloat(dataRow[REAL_TOTAL_PRICE]),
        });
      }

      // Data for Tax and Fee CAGR table
      for (const expenseRatio of EXPENSE_RATIOS) {
        for (const capitalGainsRate of CAPITAL_GAINS_RATES) {
          let key = expenseRatio + ":" + capitalGainsRate;

          let monthlyNominalDividend = parseFloat(dataRow[DIVIDEND]) / 12;
          let afterTaxMonthlyNominalDividend =
            monthlyNominalDividend - monthlyNominalDividend * capitalGainsRate;

          let realTotalReturnPrice = undefined;
          let totalReinvestedDividends = undefined;

          // TODO: extract constants
          if (i === 2) {
            // Don't calculate anything for the first row of data, these are hard coded values.
            realTotalReturnPrice = dataRow[REAL_TOTAL_PRICE];
            totalReinvestedDividends = afterTaxMonthlyNominalDividend;
          } else {
            // Do calculate values for every other row of data
            let previousEntry = feeAndTaxData[key][i - 3];
            let previousRealTotalReturnPrice =
              previousEntry.realTotalReturnPrice;
            let prevRealPrice = previousEntry.realPrice;

            totalReinvestedDividends =
              previousEntry.totalReinvestedDividends +
              afterTaxMonthlyNominalDividend;

            let realAfterTaxMonthlyNominalDividend =
              afterTaxMonthlyNominalDividend * (currentCPI / dataRow[CPI]);
            let realPrice = parseFloat(dataRow[REAL_PRICE]);
            realTotalReturnPrice =
              previousRealTotalReturnPrice *
              ((realPrice + realAfterTaxMonthlyNominalDividend) /
                prevRealPrice) *
              (1 - expenseRatio / 12);

            /*
            if (key === "0.0003:0.15") {
              //if (key === "0:0") {
              console.log(
                prevRealPrice,
                dataRow[REAL_PRICE],

                //afterTaxMonthlyNominalDividend,
                realAfterTaxMonthlyNominalDividend,
                previousRealTotalReturnPrice,
                realTotalReturnPrice
              );
            }*/
          }

          // Record the return data if we've reached the end date
          if (dataRow[DATE] === END_DATE) {
            //feeAndTaxReturns[key] = realTotalReturnPrice;

            // Apply ending capital gains
            let startPrice = parseFloat(dataRows[2].split(/,/)[PRICE]);
            let realStartPrice = parseFloat(dataRows[2].split(/,/)[REAL_PRICE]);

            let totalInvested = startPrice + totalReinvestedDividends;

            let capitalGains = realTotalReturnPrice - totalInvested;
            let endPrice =
              realTotalReturnPrice - capitalGains * capitalGainsRate;

            let cagr = utils.CAGR(realStartPrice, endPrice, 2020 - 1871);
            let formattedCagr = Math.round(cagr * 10000) / 100 + "%";
            feeAndTaxReturns[key] = formattedCagr;

            console.log(
              expenseRatio,
              capitalGainsRate,
              totalInvested,
              realTotalReturnPrice,
              realStartPrice,
              endPrice,
              cagr
            );
          }

          if (!feeAndTaxData[key]) {
            feeAndTaxData[key] = [];
          }
          feeAndTaxData[key].push({
            realTotalReturnPrice: realTotalReturnPrice,
            realPrice: dataRow[REAL_PRICE],
            totalReinvestedDividends: totalReinvestedDividends,
          });
        }
      }
    }

    let tableValues = "";
    for (const expenseRatio of EXPENSE_RATIOS) {
      tableValues =
        tableValues +
        `<tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">${
          Math.round(expenseRatio * 100000) / 1000 + "%"
        }</th>`;
      for (const capitalGainsRate of CAPITAL_GAINS_RATES) {
        let key = expenseRatio + ":" + capitalGainsRate;
        tableValues =
          tableValues +
          `<td colspan="1" rowspan="1">${feeAndTaxReturns[key]}</td>`;
        /*
        console.log(
          "CG:",
          (capitalGainsRate * 100).toFixed(1) + "%",
          "ER:",
          (expenseRatio * 100).toFixed(3) + "%",
          feeAndTaxReturns[key]
        );*/
      }
      tableValues = tableValues + "</tr>";
    }
    let template = `
    <table style="width: 100%">
      <thead>
        <tr>
          <th colspan="2" rowspan="1"></th>
          <th colspan="${
            CAPITAL_GAINS_RATES.length
          }" rowspan="1"><div style="text-align: center; margin: 0px;">Long Term Capital Gains Tax Rate</div></th>
        </tr>
        <tr>
          <th colspan="1" rowspan="${
            EXPENSE_RATIOS.length
          }" style="text-align: center; white-space: nowrap"><div style="transform: translate(0,1000%) rotate(-90deg); width: 17px;">Expense Ratio</div></th>
          <th colspan="1" rowspan="1"></th>
          ${CAPITAL_GAINS_RATES.map(
            rate =>
              `<th colspan="1" rowspan="1">${
                Math.round(rate * 10000) / 100 + "%"
              }</th>`
          ).join(" ")}
        </tr>
      </thead>
      <tbody>
        ${tableValues}
      </tbody>
    </table>`;

    console.log(template);

    // Calculate CAGR for each time period
    let cagrData = [];
    for (let i = 0; i < sAndPData.length; i++) {
      for (let j = i; j < sAndPData.length; j++) {
        let square = {
          startYear: sAndPData[i].year,
          endYear: sAndPData[j].year,
          return:
            j - i > 0
              ? utils.CAGR(sAndPData[i].price, sAndPData[j].price, j - i)
              : 0,
        };
        if (sAndPData[j].year - sAndPData[i].year > 0) {
          cagrData.push(square);
        }
      }
    }

    // Calculate IRR for each time period
    let irrData = [];
    let dcaIrrData = [];
    let visitedEndYears = new Set();
    for (let i = 0; i < cagrData.length; i++) {
      // TODO: can't we just iterate over end years?
      let cagrs = [];
      let years = [];
      let endYear = cagrData[i].endYear;
      if (!visitedEndYears.has(endYear)) {
        visitedEndYears.add(endYear);

        for (let j = cagrData.length - 1; j >= 0; j--) {
          if (cagrData[j].endYear === endYear) {
            cagrs.push(cagrData[j].return);
            years.push(cagrData[j].startYear);

            // Calculate money from each investment and total it
            let totalMoneyOnWithdrawal = 0;
            for (let j = 0; j < cagrs.length; j++) {
              let moneyOnWithdrawal = Math.pow(1 * (1 + cagrs[j]), j + 1);
              totalMoneyOnWithdrawal += moneyOnWithdrawal;
            }

            // Calculate cash flows
            let irrCashFlows = new Array(cagrs.length).fill(-1); // Fill w/ 0, pop and push -length
            irrCashFlows.push(totalMoneyOnWithdrawal);

            let dcaIrrCashFlows = new Array(cagrs.length).fill(0);
            dcaIrrCashFlows[0] = -cagrs.length;
            dcaIrrCashFlows.push(totalMoneyOnWithdrawal);

            let irr = utils.IRR(irrCashFlows, 0.01);
            let dcaIrr = utils.IRR(dcaIrrCashFlows, 0.01);

            /*
            if (endYear == 2004) {
              console.log(
                endYear,
                years[years.length - 1],
                cagrs,
                years,
                totalMoneyOnWithdrawal,
                cashFlows,
                irr
              );
            }*/

            let square = {
              startYear: years[years.length - 1],
              endYear: endYear,
              return: irr,
            };
            irrData.push(square);

            square = {
              startYear: years[years.length - 1],
              endYear: endYear,
              return: dcaIrr,
            };
            dcaIrrData.push(square);
          }
        }
      }
    }

    let histogramData = this.printLosingYears(sAndPData);
    this.printLongestReturn(sAndPData);

    let processedCagrData = this.printTables(cagrData, "cagr");
    let processedIrrData = this.printTables(irrData, "irr");
    let processedDcaData = this.printTables(dcaIrrData, "irr");
    this.printSummaryTable(
      processedCagrData,
      processedIrrData,
      processedDcaData
    );

    fs.writeFileSync(
      "./static/" + module.exports.CAGR_URL,
      JSON.stringify(cagrData)
    );
    fs.writeFileSync(
      "./static/" + module.exports.IRR_URL,
      JSON.stringify(irrData)
    );
    fs.writeFileSync(
      "./static/" + module.exports.IRR_DCA_URL,
      JSON.stringify(dcaIrrData)
    );
    fs.writeFileSync(
      "./static/" + module.exports.SANDP_YEARLY,
      JSON.stringify(histogramData)
    );
  }
}

module.exports = MarketReturnsDataHelper;
