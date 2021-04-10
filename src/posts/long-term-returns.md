---
slug: "/long-term-returns"
title: "Long term returns: 4%? 7%? 14%? 6.13%?"
subtitle: "Analysis of S&P 500 Returns From 1871 to 2021"
firstposted: "2020-10-26"
lastupdated: "2021-04-08"
titleimage: "https://live.staticflickr.com/65535/50334903467_5586168163_o.png"
titleimagetopmargin: -3
hidden: false
---

One of my favorite financial graphics was included in the [NY times in 2011](http://archive.nytimes.com/www.nytimes.com/interactive/2011/01/02/business/20110102-metrics-graphic.html?_r=2). The chart was produced by [Crestmont Research](https://www.crestmontresearch.com/) and it showcases the returns of an investment in the S&P 500 starting in any given year since 1920 and ending any other year (until 2011).

The reason I like the chart so much is that it addresses some concepts that I find difficult to conceptualize: **historic long-term market returns, short-term volatility, and what lies in between.**

I decided to reproduce a few different versions of this chart myself using [Robert Shiller's publicly available S&P 500 data](http://www.econ.yale.edu/~shiller/data.htm). This gives me control over both the data used and the assumptions. Here is the first one:

<div class="graphic-title">

## S&P 500 Returns Matrix - Lump Sum Investment

</div>

<return-pyramid mode="CAGR_URL"></return-pyramid>

This chart includes re-invested dividends and is adjusted for inflation via CPI but **does not** account for any taxes or fees.

I chose to do this because the original graphic sparked some curiosities:

1. The Times/Crestmont chart suggests a median return of 4.1%, which seems low to me based on other estimates. The chart accounts for inflation and dividends. It also includes "taxes and fees", but doesn't specify what those are in the article (though their website does have an [assumptions page](https://www.crestmontresearch.com/docs/Stock-Matrix-Assumptions.pdf) that were likely used).

1. More data could be included. Almost a decade of data has accumulated since this article was published and there exists S&P 500 data dating all the way back to the 1870s[^1].

1. The analysis shows how a lump sum investment has faired over the last century or so, but it would also be interesting to see how periodic investments and dollar cost averaging affect the results.

## How do the charts compare?

According to the Times, the original chart was made by Ed Easterling, a financial researcher at [Crestmont Research](https://www.crestmontresearch.com/), after a debate with a client regarding expected market returns. If you are interested, Crestmont research has [updated matrices on their website](https://www.crestmontresearch.com/stock-matrix-options/), which, though styled differently, contain additional data such as P/E ratios, significant events of the year, and more.

My chart has the same general shape of the [Crestmont/Times graph](http://archive.nytimes.com/www.nytimes.com/interactive/2011/01/02/business/20110102-metrics-graphic.html?_r=2). You can see various lengthy bull markets in 1920s, 1950s, 1980s, and 1990s. There is the great depression, high inflation of 1970s, and the 2008 financial meltdown.

However, you'll also notice that the returns in my version of the graphic are significantly higher. This is most likely due to my exclusion of taxes and fees. But which is more relevant for your situation? Personally, I really just wanted to know what expected return to plug into my retirement calculator. If you don't care for all the assumptions talk, just [skip to the answer](#so-whats-the-answer).

## Assumptions Affect Historic Long-Term Market Returns

I've seen so many different estimates for long term expected market returns that are supposedly based on historical performance of the S&P500. As stated earlier, the Times chart suggests a median annual return of 4.1%, while I've seen other estimates as high as [12%](https://www.daveramsey.com/blog/the-12-reality). Why is such a concrete question so hard to get a consistent answer to?

One reason there are many different estimates is that there are many variables.

- How is the average return calculated?
- Which funds are considered?
- How long is the time period?
- Does it account for inflation?
- Does it include dividends?
- What about taxes? In which capital gains bracket? Are taxes applied to re-invested dividends?
- What kind of fees are applied?

Luckily for us, we can narrow this down because there are reasonable answers to many of these questions. Here are the parameters I'm using for this post:

- **How is the average return calculated?**

  Using CAGR

<div className="rant">

### Tangent: CAGR Calculation

Say you invest $100 in a stock. It goes up 200% the next day (cha ching), to $300. The day after that, it goes down 100%, to \$0. You now have no money, but you can brag to your friends that your investment averaged (`(200% + -100%)/2`) a 50% daily return!

This kind of average is useless for our purposes, for a couple of reasons:

1.  The 200% and the 100% in the example are not percentages of the same number, so it doesn't make sense to average them.
1.  Even if you were a bit smarter and calculated average gain from the start price to the end price (instead of using percentages), and divided that by the number of periods, your answer would still be wrong because the growth isn't linear, it's compounded.

        THIS IS WRONG:
        AVG RETURN = (endValue - startValue) / (startValue)) / numberOfPeriods

    Calculating the average returns this way makes it look higher then it really is.

What we really want when we talk about average yearly returns: **What would the yearly return be if it was evenly spread out over each year of the investment period?** This is the kind of number we can plug into a financial function/calculator as 'expected returns' or 'discount rate'.

To calculate this, we need to use a type of average that accounts for compounded growth: the geometric mean. In finance, it's known as the Compound Annual Growth Rate, or CAGR.

    CAGR = (endValue / startValue) ^ (1 / numberOfPeriods) - 1

CAGR provides the equivalent constant rate of return over the given time interval, which is much more useful.

For example, from 1999 to 2004:

    Adjusted S&P 500 price in Jan 1999: $829,362.65
    Adjusted S&P 500 price in Jan 2004: $716,325.33

    CAGR = ($716,325.33 / $829,362.65) ^ (1 / (2004-1999)) - 1
    CAGR = -0.0289 = -2.89%

    Not a great stretch for the S&P 500

</div>
<br>

- **Which funds?**

  We'll use the underlying S&P 500 index. This is widely considered the "market". There are [lots of different funds](https://www.doughroller.net/investing/the-5-best-sp-500-index-funds-and-the-worst-one/) that track this index. You can purchase them as an ETF (Exchange Traded Fund) or a mutual fund. It doesn't matter much for our purposes, but you can read about the differences [here](https://investor.vanguard.com/etf/etf-vs-mutual-fund).

- **Time period?**

  The chart shows returns for every yearly period between 1871 and 2021 (~mid Jan to ~mid Jan of the following year). For the final CAGR number, we'll use the longest period available (1871-2021).

- **Inflation?**

  Included, using CPI provided in Shilller's data.

- **Reinvested dividends?**

  Included, using values from Shilller's data.

- **Taxes?**

  Determining the capital gains tax rate to apply gets complicated for several reasons:

  - Different accounts are subject to different tax rates (e.g., pre-tax, Roth, not tax-sheltered)
  - Different income levels are subject to different tax rates
  - Different capital gains tax rates through history
  - Different tax rates depending on how long assets are held
  - Different tax rates on capital gains in different states/countries
  - Different funds produce different amounts of taxable gains when selling underlying assets

  So, in order to keep the charts on this page broadly applicable, taxes have been excluded. However, to get a feel for how taxes affect long-term returns, I've included a [table](#sp-500-cagr-adjusted-by-capital-gains-rate-and-expense-ratio-br-1871-2021) with long-term CAGR calculations for all the current federal U.S. capital gains tax rates.

  In the table we'll account for capital gains that show up in two different places:

  1.  Each time an investor is paid a dividend in a non-tax sheltered account, taxes usually must be paid on that dividend in that year. This tax reduces the amount of the dividend that gets re-invested.

          I'm assuming all dividends are qualified dividends, which makes them subject to long-term capital gains tax rates instead of the higher short-term capital gains rates. The percentage of dividends paid out that are qualified is called Qualified Dividend Income or QDI. QDI can vary from year to year, but for a fund tracking the S&P 500, the vast majority of dividends are qualified.

          I'm also taking out the capital gains tax as soon as the dividends are paid, not waiting until the end of the year.

  2.  Capital gains are applied in the final year when all the money is withdrawn. Because of re-invested dividends, the basis varies. For these calculations I'm using the [average cost basis method](https://www.irs.gov/faqs/capital-gains-losses-and-sale-of-home/mutual-funds-costs-distributions-etc/mutual-funds-costs-distributions-etc-1) to account for this variation.

  And we will not account for capital gains that can show up in one other place:

  3.  Capital gains also occur when a fund sells underlying appreciated securities. Funds don't pay capital gains taxes; their shareholders do. Funds are required by the IRS to distribute almost all of their capital gains to investors; the investors must pay the capital gains on those distributions if the funds are held in a taxable account.

          The words used to describe this distribution are "capital gains disbursements". The word "disbursement" makes it sound exciting, like you are getting a dividend, but really it's just a forced liquidation of a portion of the fund you own. The value of the assets within the fund drop by the amount of the disbursement. So all you're really getting is tax bill which increases the ongoing cost of holding the investment.

          The good news is that funds that track indices (like the S&P 500) are less susceptible to tax-inducing churn than actively managed funds that might buy and sell more frequently because of management transitions or their investing philosophies.

          ETFs are particularly tax efficient in this regard because funds can interact with brokers via special IRS rules, allowing ETFs to defer gains. How exactly this works is topic for another post.

- **Fees?**

  Just like taxes, fees can vary significantly from situation to situation. So, in order to keep the charts on this page broadly applicable, fees have been excluded as well. However, like with capital gains, I've included long-term CAGR calculations for a handful of different fee levels.

  There are a few kinds of fees I'm aware of when dealing with S&P 500 ETFs or mutual funds. Many fees are reasonable to exclude because they are zero or are practically zero for several popular large S&P 500 ETFs/Mutual Funds. Therefore, the only fee we take into consideration is the expense ratio.

  - _Expense Ratio_ (included) - This fee is applied, over a year-long period, on the whole value of the investment. This covers the operating expenses for the fund.

  - _Advisory Fee_ (excluded) - If you hold the S&P 500 ETF/Mutual Fund indirectly through a financial advisor/wealth manager/robo-advisor, you're likely paying this fee. Many (but not all) advisors charge clients a percentage fee based on the client's total assets under their management. This fee is typically in the neighborhood of ~1% for human advisors and ~0.25% for robo-advisors.

         These percentages may sound small, but you'll see that they have a _significant_ negative effect on returns. If this applies to you, you can add your advisory fee percentage to the expense ratio when looking up your CAGR in the table below. That said, you can hold the fund directly in a brokerage account (e.g., Vanguard, Fidelity) to avoid paying this fee.

  - _Commissions_ (excluded) - Any kinds of sales fees, including front-end or back-end load fees on mutual funds. You can easily find commission-free trades for S&P 500 ETFs or no-load S&P 500 mutual funds.

  - _Ask-Bid Spread_ and _Net Asset Value (NAV) vs Market Price Differences_ (excluded) - These fees are a side effect of ETF intraday trading. Neither of these apply to mutual funds, which are priced daily. Unlike the expense ratio, these fees apply only on buy/sell transactions.

         For large S&P 500 ETFs, ask/bid spread is typically, small e.g. ~[0.01%](https://advisors.vanguard.com/investments/bidaskspread). NAV differences can end up effectively being a fee or a credit. On average, it's [a wash](https://ycharts.com/companies/VOO/discount_or_premium_to_nav). You can read more details on these ETF fees [here](https://www.schwab.com/resource-center/insights/content/etfs-how-much-do-they-really-cost#:~:text=When%20investing%20in%20ETFs%2C%20consider,premiums%20to%20net%20asset%20value).

### So What's the Answer?

For your reference, based of the Shiller data:

_Between January 1871 and January 2021, the S&P 500's annualized real return, measured using CAGR, including dividends, excluding any taxes and fees is **7.01%**._

How do taxes and fees affect this value? Here is a table.

<div class="graphic-title">

### S&P 500 CAGR Adjusted by Capital Gains Rate and Expense Ratio <br> (1871-2021)

</div>

<div class="table-container">

<table style="width: 100%">
      <thead>
        <tr>
          <th colspan="2" rowspan="1"></th>
          <th colspan="5" rowspan="1"><div style="text-align: center; margin: 0px;">Long Term Capital Gains Tax Rate</div></th>
        </tr>
        <tr>
          <th colspan="1" rowspan="8" style="text-align: center; white-space: nowrap"><div style="transform: translate(0,1000%) rotate(-90deg); width: 17px;">Expense      
Ratio</div></th>
          <th colspan="1" rowspan="1"></th>
          <th colspan="1" rowspan="1">0%</th> <th colspan="1" rowspan="1">15%</th> <th colspan="1" rowspan="1">18.8%</th> <th colspan="1" rowspan="1">20%</th> <th
colspan="1" rowspan="1">23.8%</th>
        </tr>
      </thead>
      <tbody>
        <tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">0%</th><td colspan="1" rowspan="1">7.03%</td><td colspan="1" rowspan="1">6.22%</td><td colspan="1" rowspan="1">6.02%</td><td colspan="1" rowspan="1">5.95%</td><td colspan="1" rowspan="1">5.75%</td></tr><tr><th colspan="1" rowspan="1"></th><th colspan="1"
rowspan="1">0.015%</th><td colspan="1" rowspan="1">7.01%</td><td colspan="1" rowspan="1">6.21%</td><td colspan="1" rowspan="1">6%</td><td colspan="1"
rowspan="1">5.94%</td><td colspan="1" rowspan="1">5.73%</td></tr><tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">0.03%</th><td colspan="1"
rowspan="1">7%</td><td colspan="1" rowspan="1">6.19%</td><td colspan="1" rowspan="1">5.99%</td><td colspan="1" rowspan="1">5.92%</td><td colspan="1"
rowspan="1">5.71%</td></tr><tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">0.25%</th><td colspan="1" rowspan="1">6.76%</td><td colspan="1"
rowspan="1">5.96%</td><td colspan="1" rowspan="1">5.75%</td><td colspan="1" rowspan="1">5.69%</td><td colspan="1" rowspan="1">5.48%</td></tr><tr><th colspan="1"
rowspan="1"></th><th colspan="1" rowspan="1">0.5%</th><td colspan="1" rowspan="1">6.49%</td><td colspan="1" rowspan="1">5.69%</td><td colspan="1" rowspan="1">5.49%</td><td colspan="1" rowspan="1">5.42%</td><td colspan="1" rowspan="1">5.22%</td></tr><tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">0.75%</th><td colspan="1"   
rowspan="1">6.22%</td><td colspan="1" rowspan="1">5.43%</td><td colspan="1" rowspan="1">5.22%</td><td colspan="1" rowspan="1">5.16%</td><td colspan="1"
rowspan="1">4.95%</td></tr><tr><th colspan="1" rowspan="1"></th><th colspan="1" rowspan="1">1%</th><td colspan="1" rowspan="1">5.96%</td><td colspan="1"
rowspan="1">5.16%</td><td colspan="1" rowspan="1">4.96%</td><td colspan="1" rowspan="1">4.89%</td><td colspan="1" rowspan="1">4.69%</td></tr><tr><th colspan="1"
rowspan="1"></th><th colspan="1" rowspan="1">2%</th><td colspan="1" rowspan="1">4.89%</td><td colspan="1" rowspan="1">4.11%</td><td colspan="1" rowspan="1">3.91%</td><td  
colspan="1" rowspan="1">3.84%</td><td colspan="1" rowspan="1">3.64%</td></tr>
      </tbody>
    </table>

</div>

Note: This table assumes a constant capital gains rate and expense ratio for the entire life of the investment. There are at least two major reasons this might not be the case:

1.  You are in a different capital gains bracket due to income differences when reinvesting dividends vs. withdrawing money.
1.  Capital gains tax rates have varied over the ~150 years, and will likely continue to do so.

Overall, my assumptions about taxes and fees represent a departure from the philosophy of the original Crestmont/Times chart. The intention of that chart seems to be tracking the returns of an actual investment from one point in history to another (including historic fees and tax rates).

In contrast, the analysis in this table only takes the raw growth and dividend numbers from history and applies modern taxes and fees. Essentially, I assume that modern taxes and fees are more indicative of future taxes and fees than historical taxes and fees. This has the added benefit of being easier to calculate.

How much does a percentage point matter? Quite a bit. Here are the returns of hypothetical \$100 investment at various rates and periods:

<div class="graphic-title">

### Future Value of a \$100 Investment

</div>
<div class="table-container">

<table style="width: 100%">
<thead><tr><th colspan="2"></th><th colspan="5" style="text-align: center; margin: 0px;">Investment Period In Years</th></tr></thead><tbody>
 <tr><th colspan="2"></th><th>10</th><th>20</th><th>30</th><th>40</th><th>100</th></tr>
 <tr><th rowspan="8" style="text-align: center; white-space: nowrap"><div style="transform: translate(0,700%) rotate(-90deg); width: 17px;">CAGR</div></th><th>7.00%</th><td>$197</td><td>$387</td><td>$761</td><td>$1,497</td><td>$86,772</td></tr>
 <tr><th>6.00%</th><td>$179</td><td>$321</td><td>$574</td><td>$1,029</td><td>$33,930</td></tr>
 <tr><th>5.00%</th><td>$163</td><td>$265</td><td>$432</td><td>$704</td><td>$13,150</td></tr>
 <tr><th>4.00%</th><td>$148</td><td>$219</td><td>$324</td><td>$480</td><td>$5,050</td></tr>
 <tr><th>3.00%</th><td>$134</td><td>$181</td><td>$243</td><td>$326</td><td>$1,922</td></tr>
 <tr><th>2.00%</th><td>$122</td><td>$149</td><td>$181</td><td>$221</td><td>$724</td></tr>
 <tr><th>1.00%</th><td>$110</td><td>$122</td><td>$135</td><td>$149</td><td>$270</td></tr>
 <tr><th>-2.02%</th><td>$82</td><td>$67</td><td>$54</td><td>$44</td><td>$13</td></tr>
</tbody></table>

</div>

The last row shows the effect of holding cash, which loses purchasing power due to an an inflation CAGR of about -2% since 1871 based on CPI data.

You can see all my data and calculations [here](https://docs.google.com/spreadsheets/d/1XW8W1ik4HbWxrs48l9yAvCG5cduDnU2SOnNB0a6w6eI/edit?usp=sharing).

## How Short Is Short Term Volatility

150 years is a long time. How long does it take for this 6.95% rate to come to fruition?

Over small time intervals, the market is unpredictable. Day traders make investments that can last just hours, minutes, or even seconds. Besides the whiplash at this timescale, these kinds of investments are also subject to a short-term capital gains tax rates and have the potential to accumulate lots of transaction fees.

Zoom out a bit and it's still pretty wild; let's take a look at what you might expect historically for a one year investment period.

<div class="graphic-title">

### One Year Returns of the S&P 500, 1871-2021

</div>
<return-histogram title="S&P 500 Returns"></return-histogram>

You shouldn't be surprised if you lose money in a 1 year period. 45 of 149 years in the data above (~30%) had negative real returns. But how long is the "short term"? It might be longer than you think.

If your timing is really bad, e.g., buying in the midst of the tech bubble in 1999 and selling right after the great recession in 2009, you'd have lost money even after 10 years (which doesn't seem like a short amount of time). But if this theoretical bad-luck investor hadn't sold in 2009, he or she would still be up over 4% annually as of Jan 2021 thanks to recent returns.

This following table shows the best/worst/median return for investment periods of various lengths. Keep in mind that these figures are Jan of one year to Jan of the next, so it's possible there are some inter-year periods with bigger or smaller returns.

<div class="graphic-title">

### Returns of S&P 500 - Lump Sum Investment

</div>

<div class="table-container">

| Period in Years | Worst Return | Worst Return Years | Best Return | Best Return Years | Median Return |
| --------------- | ------------ | ------------------ | ----------- | ----------------- | ------------- |
| 5               | -10.13%      | 1916 - 1921        | 29.60%      | 1924 - 1929       | 7.60%         |
| 10              | -4.41%       | 1999 - 2009        | 18.33%      | 1919 - 1929       | 6.89%         |
| 20              | 0.69%        | 1962 - 1982        | 12.97%      | 1980 - 2000       | 6.64%         |
| 30              | 3.24%        | 1892 - 1922        | 10.24%      | 1932 - 1962       | 6.71%         |
| 40              | 3.62%        | 1881 - 1921        | 9.94%       | 1921 - 1961       | 6.44%         |
| 50              | 4.72%        | 1929 - 1979        | 9.18%       | 1949 - 1999       | 6.37%         |
| 60              | 5.25%        | 1889 - 1949        | 8.23%       | 1942 - 2002       | 6.71%         |
| 70              | 5.38%        | 1912 - 1982        | 7.85%       | 1932 - 2002       | 6.82%         |
| 80              | 5.26%        | 1902 - 1982        | 8.44%       | 1921 - 2001       | 6.74%         |

</div>

## How Does Spreading Out Investments Affect the Return?

While interesting, this isn't always how investments work. Most people don't just have a stockpile of money they invest in totality in a single year. Many people invest money as they can, every paycheck, with consistent contributions to a retirement plan or taxable investment account.

Say an investor decided to invest a fixed (but inflation adjusted) dollar amount each year. How does this affect risk and average return? CAGR won't be sufficient here since we have multiple investment start times. Instead, we can use Internal Rate of Return or IRR.

<div className="rant">

### Tangent: IRR Calculation

For this example, we'll discuss a 5 year period from 1999 to 2004. We'll treat each time we buy and sell a unit of S&P 500 as a separate investment. So over 5 years, we have 5 investments, with their respective CAGRs:

    1999-2004: -2.89% per year over 5 years
    2000-2004: -6.39% per year over 4 years
    2001-2004: -5.64% per year over 3 years
    2002-2004: -0.90% per year over 2 years
    2003-2004: 26.15% per year over 1 year

My first inclination to determine the effective rate of all these investments was to take their arithmetic average, weighted by their hold period (in years). **This is wrong**.

    THIS IS WRONG:
    -0.0289 * 5 +
    -0.0639 * 4 +
    -0.0564 * 3 +
    -0.0090 * 2 +
    +0.2615 * 1
    / (5 + 4 + 3 + 2 + 1)
    = -0.0217 = -2.17%

Why is this wrong? Once again, we are comparing rates of different values. The arithmetic average method treats all years of a given investment equally. But we know that's not true because these rates are compounded each year. For positive rates, we are giving too much credence to the earlier years and not enough to the later years. For negative rates, it's the opposite.

So what's the right way? We can account for compounding by using the time value of money equation. Time value of money allows us to see the final value of each investment if the initialValue was \$1. This \$1 figure was chosen to make the math easy; you can use any value here - the math will come out the same:

Time value of money: `finalValue = initialValue(1 + rate)^(numberOfTimePeriods)`

    1999-2004: -2.89%, 5 years | $1(1 + -0.0289)^5 = $0.8636
    2000-2004: -6.39%, 4 years | $1(1 + -0.0639)^4 = $0.7679
    2001-2004: -5.64%, 3 years | $1(1 + -0.0564)^3 = $0.8402
    2002-2004: -0.90%, 2 years | $1(1 + -0.0090)^2 = $0.9821
    2003-2004: 26.15%, 1 year  | $1(1 + +0.2615)^1 = $1.2615
                                             Total = $4.7152

Now, the tricky part. What single rate of return for the five different $1 investments would have give us an ending value of \$4.7152?

The same question, but in mathematical terms:

    Solve for 'r' (rate):

    $1(1+r)^5 + $1(1+r)^4 + $1(1+r)^3 + $1(1+r)^2 + $1(1+r)^1 = $4.7152

Often, this type of equation can't be solved algebraically, so we usually resort to numerical methods. Type that equation into [Wolfram Alpha](https://www.wolframalpha.com/input/?i=1%281%2Br%29%5E5+%2B+1%281%2Br%29%5E4+%2B+1%281%2Br%29%5E3+%2B+1%281%2Br%29%5E2+%2B+1%281%2Br%29%5E1+%3D+4.7152) and it will calculate the value of 'r' for you.

... **[Magic]** ...

    r = IRR = -0.0195 = -1.95%

Most people resort to ~~Excel~~ Google Sheets, which resorts to numerical methods. The IRR function in Sheets fits our use case, as it accepts cash flows as an argument. The cash flows in this example are -$1 each year, then a $4.7152 payout at the end:

    =IRR({-1, -1, -1, -1, -1, 4.7152})

... **[Magic]** ...

    r = -1.95%

This results in a better annualized rate of return than the -2.89% CAGR from 1999-2004 (single lump-sum investment in 1999). So, in this particular case, periodic investments did reduce losses.

</div>

In the following charts and tables, I use the IRR calculator supplied [here](https://gist.github.com/ghalimi/4591338). I believe this function was ported from Apache OpenOffice, an open source spreadsheet program.

I regenerated the earlier chart with yearly investments instead of a single lump-sum investment in the first year:

<div class="graphic-title">

### S&P 500 Returns Matrix - Yearly Investments

</div>

<return-pyramid mode="IRR_URL"></return-pyramid>

A few observations about this chart:

1.  Each square represents a combination of all squares below its position on the original chart. So it's sort of like smearing the chart upward.
1.  The further in the past an investment is, the more likely it will stabilize to roughly the long-term median value (somewhere around 6% to 7%). One might think that periodic purchases reduce volatility, but in reality, they expose you to volatility for longer because recent investments are a bigger part of your portfolio.

The following table summarizes the worst/best/median return for investment periods of various lengths, if investing an equal amount every year.

<div class="graphic-title">

### S&P 500 Returns - Yearly Investments

</div>

<div class="table-container">

| Period in Years | Worst Return | Worst Return Years | Best Return | Best Return Years | Median Return |
| --------------- | ------------ | ------------------ | ----------- | ----------------- | ------------- |
| 5               | -14.20%      | 1970 - 1975        | 32.17%      | 1924 - 1929       | 7.32%         |
| 10              | -7.97%       | 1965 - 1975        | 23.32%      | 1919 - 1929       | 7.18%         |
| 20              | -1.85%       | 1901 - 1921        | 14.31%      | 1980 - 2000       | 7.00%         |
| 30              | 1.18%        | 1891 - 1921        | 10.90%      | 1970 - 2000       | 6.69%         |
| 40              | 2.64%        | 1881 - 1921        | 9.49%       | 1919 - 1959       | 6.47%         |
| 50              | 4.24%        | 1871 - 1921        | 9.25%       | 1916 - 1966       | 6.46%         |
| 60              | 4.93%        | 1882 - 1942        | 8.63%       | 1940 - 2000       | 6.66%         |
| 70              | 5.31%        | 1879 - 1949        | 8.26%       | 1930 - 2000       | 6.87%         |
| 80              | 5.63%        | 1902 - 1982        | 8.22%       | 1920 - 2000       | 6.95%         |

</div>

Over shorter periods, you can see the increased volatility in the magnitudes of the best returns and the worst returns. In contrast, the median returns are largely the same at all time periods measured. It takes about 40 or 50 years, but eventually all the numbers start to look similar to the lump sum case.

### Dollar Cost Averaging (DCA)

But what if you do have a giant pile of money? Is it better to...

- Invest it all right away? **or**
- Embrace the concept of dollar cost averaging and spread it out over time?

<div className="rant">

### Tangent: IRR and CAGR with Dollar Cost Averaging

We're back to having a pile of cash at the beginning of our investment period - we're not earning money a little bit at a time. We will reserve all our cash at the beginning of the investment period. Our cash will be in two different buckets:

1. The first bucket does no work, earning a 0% return.

   Note that this is a 0% _inflation adjusted_ return, so it would need to be invested via some "safe" mechanism that keeps up with inflation, e.g., TIPS, _maybe_ a money market investment fund or a high-yield savings account.

1. The second bucket is invested in the market.

The share of the _initial_ cash allocated to each bucket look like this each year:

<svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg"> <defs></defs> <g transform="matrix(0.319583, 0, 0, 0.319583, 16.641726, 44.171867)" style=""></g> <g transform="matrix(0.319515, 0, 0, 0.319515, 16.64171, 44.171867)" style=""></g> <g transform="matrix(0.320039, 0, 0, 0.320039, 16.641693, 44.171841)" style=""></g> <g transform="matrix(0.216577, 0, 0, 0.216577, 206.424789, 50.941322)" style=""></g> <g transform="matrix(0.320319, 0, 0, 0.320319, 16.641693, 44.171841)" style=""></g> <g transform="matrix(0.216766, 0, 0, 0.216766, 127.215866, 52.994423)" style=""></g> <g transform="matrix(0.318847, 0, 0, 0.318847, 28.308897, 309.446655)" style=""></g> <g transform="matrix(1, 0, 0, 1, 98.642891, 81.444298)"></g> <g transform="matrix(1, 0, 0, 1, 98.642891, 81.444298)"></g> <g transform="matrix(1, 0, 0, 1, 98.642891, 81.444298)"></g> <g transform="matrix(0.598895, 0, 0, 0.598895, 78.720329, 9.057091)" style=""> <path d="M74,74L74,8A66,66,0,0,1,112.79382665130322,127.39512162874652L74,74A0,0,0,0,0,74,74" stroke="#000000" stroke-width="2" fill="#9aa675" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 78.720329, 9.057091)" style=""> <path d="M74,74L112.79382665130322,127.39512162874652A66,66,0,1,1,74,8L74,74A0,0,0,1,0,74,74" stroke="#000000" stroke-width="2" fill="#cda49b" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 160.429565, 8.543625)" style=""> <path d="M74,74L35.20617334869678,127.39512162874652A66,66,0,0,1,74,8L74,74A0,0,0,0,0,74,74" stroke="#000000" stroke-width="2" fill="#cda49b" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 160.429565, 8.543625)" style=""> <path d="M74,74L74,8A66,66,0,1,1,35.20617334869678,127.39512162874652L74,74A0,0,0,1,0,74,74" stroke="#000000" stroke-width="2" fill="#9aa675" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 242.636108, 9.035553)" style=""> <path d="M74,74L11.230269924519867,53.60487837125345A66,66,0,0,1,74,8L74,74A0,0,0,0,0,74,74" stroke="#000000" stroke-width="2" fill="#cda49b" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 242.636108, 9.035553)" style=""> <path d="M74,74L74,8A66,66,0,1,1,11.230269924519867,53.60487837125345L74,74A0,0,0,1,0,74,74" stroke="#000000" stroke-width="2" fill="#9aa675" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.598895, 0, 0, 0.598895, 324.906067, 8.621937)" style=""> <ellipse cx="74" cy="74" rx="66" ry="66" stroke="#000000" stroke-width="1" fill="#9aa675"></ellipse> </g> <g transform="matrix(0.216268, 0, 0, 0.216268, 375.443512, 55.826019)" style=""> <text class="slice" style="text-anchor: middle; font-size: 37px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" y="-4.604" x="-27.744">100%</text> <text x="-32.368" y="-209.248" class="pieTitleText" style="white-space: pre; font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 40px; line-height: 40px; text-anchor: middle;">2003</text> <g class="legend" transform="matrix(2, 0, 0, 2, 169.761139, -39.752213)"> <rect width="18" height="18" style="paint-order: stroke markers; fill: rgb(205, 164, 155); stroke: rgb(0, 0, 0);" y="-13.872"></rect> <text style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 17px; white-space: pre;" x="22" y="0.128">0% Bucket</text> </g> <g class="legend" transform="matrix(2, 0, 0, 2, 169.761139, 9.247784)"> <rect width="18" height="18" style="fill: rgb(154, 166, 117); paint-order: stroke; stroke: rgb(0, 0, 0);" y="-13.872"></rect> <text style="font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 17px; white-space: pre;" x="22" y="0.128">S&amp;P 500 Bucket</text> </g> </g> <g transform="matrix(0.589084, 0, 0, 0.589084, -2.31773, 9.1269)" style=""> <path d="M74,74L74,8A66,66,0,0,1,136.76973007548014,53.60487837125348L74,74A0,0,0,0,0,74,74" stroke="#000000" stroke-width="2" fill="#9aa675" style="paint-order: stroke;"></path> </g> <g transform="matrix(0.589084, 0, 0, 0.589084, -2.31773, 9.1269)" style=""> <path d="M74,74L136.76973007548014,53.60487837125348A66,66,0,1,1,74,8L74,74A0,0,0,1,0,74,74" stroke="#000000" stroke-width="2" fill="#cda49b" style="paint-order: stroke;"></path> </g> <g transform="matrix(1, 0, 0, 1, 26.180211, 58.809049)"></g> <g transform="matrix(0.216222, 0, 0, 0.216222, 289.194336, 53.705833)" style=""> <text class="slice" style="text-anchor: middle; font-size: 37px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-83.52" y="-80.577">20%</text> <text class="slice" style="text-anchor: middle; font-size: 37px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="15.97" y="78.341">80%</text> <text x="-15.275" y="-201.118" class="pieTitleText" style="white-space: pre; font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 40px; line-height: 40px; text-anchor: middle;">2002</text> <text class="slice" style="text-anchor: middle; font-size: 37.1px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-483.595" y="-17.989">40%</text> <text class="slice" style="text-anchor: middle; font-size: 37.1px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-321.236" y="48.523">60%</text> <text x="-395.478" y="-198.937" class="pieTitleText" style="white-space: pre; font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 40.1px; line-height: 40px; text-anchor: middle;">2001</text> <text class="slice" style="text-anchor: middle; font-size: 37.1px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-852.772" y="51.147">60%</text> <text class="slice" style="text-anchor: middle; font-size: 37.1px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-682.285" y="-20.04">40%</text> <text class="pieTitleText" style="white-space: pre; font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 40.1px; line-height: 40px; text-anchor: middle;" x="-769.841" y="-196.512">2000</text> <text class="slice" style="text-anchor: middle; font-size: 36.9px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-1202.746" y="81.757">80%</text> <text class="slice" style="text-anchor: middle; font-size: 36.9px; white-space: pre; fill: rgb(51, 51, 51); font-family: &quot;trebuchet ms&quot;, verdana, arial;" x="-1075.385" y="-76.849">20%</text> <text x="-1146.003" y="-197.129" class="pieTitleText" style="white-space: pre; font-family: &quot;trebuchet ms&quot;, verdana, arial; font-size: 36.9px; line-height: 40px; text-anchor: middle;">1999</text> </g> </svg>

Once again, we'll calculate the ending price by summing each of the individual investments returns:

    S&P 500 Bucket
    1999-2004: -2.89%, 5 years | $1(1 + -0.0289)^5 = $0.8636
    2000-2004: -6.39%, 4 years | $1(1 + -0.0639)^4 = $0.7679
    2001-2004: -5.64%, 3 years | $1(1 + -0.0564)^3 = $0.8402
    2002-2004: -0.90%, 2 years | $1(1 + -0.0090)^2 = $0.9821
    2003-2004: 26.15%, 1 year  | $1(1 + +0.2615)^1 = $1.2615
                                          SubTotal = $4.7152

    0% Bucket
    1999-2000: 0%, 1 year  | $1(1 + 0)^1 = $0
    1999-2001: 0%, 2 years | $1(1 + 0)^2 = $0
    1999-2002: 0%, 3 years | $1(1 + 0)^3 = $0
    1999-2003: 0%, 4 years | $1(1 + 0)^4 = $0
                                SubTotal = $0

    Total = $4.7152 + $0.00 = $4.7152

The good news is we once again have a single `startValue` and single `endValue`. Which means we can use CAGR again!

    CAGR = (endValue / startValue) ^ (1 / numberOfPeriods) - 1
    CAGR = ($4.7152/ $5) ^ (1 / (2004-1999)) - 1
    CAGR = -0.01166 ~= -1.17%

With some changes to the ["yearly investment" IRR approach](#tangent-irr-calculation), we can also use IRR to calculate the annualized return. Instead of a series of -\$1 cash flows followed by a withdrawal windfall, we put all \$5 into our investments in year one. It doesn't matter at this point that they are in two separate investment buckets.

Each subsequent year we take out a dollar from our 0% investment bucket (+$1) and re-invest it into the S&P 500 bucket (-\$1) resulting intermediate net cashflows of zero.

At the end of the period, we get the same return value we just calculated. This last part is where we've accounted for the different investment buckets. So, the IRR calculation for yearly DCA from 1999-2004 would look like this:

`=IRR({-5, 0, 0, 0, 0, 4.7152}) = -1.17%`

It's the same!

</div>

Here is the same table as above, but with DCA instead of a lump sum or yearly investment. I've bolded the returns that are higher than the corresponding returns in the lump sum investment table.

<div class="graphic-title">

### Returns of S&P 500 - Yearly Investments As An Alternative to Lump Sum (DCA)

</div>

<div class="table-container">

| Period in Years | Worst Return | Worst Return Years | Best Return | Best Return Years | Median Return |
| --------------- | ------------ | ------------------ | ----------- | ----------------- | ------------- |
| 5               | **-8.35%**   | 1970 - 1975        | 20.04%      | 1924 - 1929       | 4.44%         |
| 10              | **-4.20%**   | 1965 - 1975        | 14.20%      | 1919 - 1929       | 4.09%         |
| 20              | -0.95%       | 1901 - 1921        | 8.79%       | 1980 - 2000       | 4.00%         |
| 30              | 0.62%        | 1891 - 1921        | 6.81%       | 1970 - 2000       | 3.93%         |
| 40              | 1.46%        | 1881 - 1921        | 6.07%       | 1919 - 1959       | 3.91%         |
| 50              | 2.49%        | 1871 - 1921        | 6.12%       | 1916 - 1966       | 4.03%         |
| 60              | 3.03%        | 1882 - 1942        | 5.82%       | 1940 - 2000       | 4.30%         |
| 70              | 3.39%        | 1879 - 1949        | 5.69%       | 1930 - 2000       | 4.58%         |
| 80              | 3.71%        | 1902 - 1982        | 5.81%       | 1920 - 2000       | 4.77%         |

</div>

Comparing to the lump sum investment returns reveals that any money that is earning nothing when it could be invested in the market takes a significant chunk out of the median long-term earnings (about 2-3%, which out of 7% is about 29-43% of your total returns!). DCA also reduces the best case returns in all measured time intervals.

Yearly DCA has a smaller beneficial effect on the worst case returns, but that effect tails off somewhere between a 10 and 20 year investment period. In fact, long-term worst case returns are lower for DCA than they are for lump sum investments!

It's potentially worse though. Remember that these numbers are adjusted for inflation. Therefore, the values above only apply if the dollars that aren't in the market are in some sort of investment vehicle that keeps up with inflation. If that money is all in cash, the cash drag will have an even larger negative effect.

In summary, DCA is sometimes portrayed as a good long-term strategy, but this analysis shows just the opposite, it reduces short-term downside risk at the expense of:

- Reduced best and median returns for all time periods included in the table
- Reduced long-term returns in the worst case

So unless you have an important reason to minimize downside risk in the short term, it makes sense to invest the entire giant pile of money right away, even if your market timing is really bad.

Here is the chart for DCA:

<div class="graphic-title">

### S&P 500 Returns Matrix - Yearly Investments with DCA

</div>

<return-pyramid mode="IRR_DCA_URL"></return-pyramid>

And I'll leave you with a table of all three investment strategies (lump sum, yearly, yearly DCA) so you can compare them side by side.

<div class="graphic-title">

### Returns of S&P 500 - Summary By Investment Strategy

</div>

<div class="table-container">

<table><thead><tr><th style="vertical-align:middle; font-size:x-small" rowspan="2">Period in Years</th><th colspan="3" style="text-align: center">Worst Return</th><th     
colspan="3" style="text-align: center">Median Return</th><th colspan="3" style="text-align: center">Best Return</th></tr><tr><th>Lump Sum</th><th>Yearly</th><th>Yearly    
DCA</th><th>Lump Sum</th><th>Yearly</th><th>Yearly DCA</th><th>Lump Sum</th><th>Yearly</th><th>Yearly DCA</th></tr></thead><tbody><tr><td>5</td><td>-10.13%</td><td>-14.20%</td><td>-8.35%</td><td>7.60%</td><td>7.32%</td><td>4.44%</td><td>29.60%</td><td>32.17%</td><td>20.04%</td></tr><tr><td>10</td><td>-4.41%</td><td>-7.97%</td><td>-4.20%</td><td>6.89%</td><td>7.18%</td><td>4.09%</td><td>18.33%</td><td>23.32%</td><td>14.20%</td></tr><tr><td>20</td><td>0.69%</td><td>-1.85%</td><td>-0.95%</td><td>6.64%</td><td>7.00%</td><td>4.00%</td><td>12.97%</td><td>14.31%</td><td>8.79%</td></tr><tr><td>30</td><td>3.24%</td><td>1.18%</td><td>0.62%</td><td>6.71%</td><td>6.69%</td><td>3.93%</td><td>10.24%</td><td>10.90%</td><td>6.81%</td></tr><tr><td>40</td><td>3.62%</td><td>2.64%</td><td>1.46%</td><td>6.44%</td><td>6.47%</td><td>3.91%</td><td>9.94%</td><td>9.49%</td><td>6.07%</td></tr><tr><td>50</td><td>4.72%</td><td>4.24%</td><td>2.49%</td><td>6.37%</td><td>6.46%</td><td>4.03%</td><td>9.18%</td><td>9.25%</td><td>6.12%</td></tr><tr><td>60</td><td>5.25%</td><td>4.93%</td><td>3.03%</td><td>6.71%</td><td>6.66%</td><td>4.30%</td><td>8.23%</td><td>8.63%</td><td>5.82%</td></tr><tr><td>70</td><td>5.38%</td><td>5.31%</td><td>3.39%</td><td>6.82%</td><td>6.87%</td><td>4.58%</td><td>7.85%</td><td>8.26%</td><td>5.69%</td></tr><tr><td>80</td><td>5.26%</td><td>5.63%</td><td>3.71%</td><td>6.74%</td><td>6.95%</td><td>4.77%</td><td>8.44%</td><td>8.22%</td><td>5.81%</td></tr></tbody></table>

</div>

<div className="rant">

### Disclaimer

I, the author of this post, have no formal tax, accounting, or financial background. I've done my best to ensure the information is accurate, but it's possible that I've missed important information, miscalculated something, or made some other errors/omissions. If you see something that's incorrect, please [contact me](/about/#contact). As always, the [site disclaimer](/about/#disclaimer) applies.

</div>

[^1]: Even though the S&P 500 index was established in 1926, work has been done to project the index backward into the early 1800s. This projection is known as the Cowles extension and it's included as part of Shiller's data set.
