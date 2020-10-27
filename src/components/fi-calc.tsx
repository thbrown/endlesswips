import React, { ChangeEvent } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Grid from "@material-ui/core/Grid";

type CalcProps = {
  title: string;
  paragraph: string;
};

type State = {
  cost: string | undefined;
  age: string | undefined;
  savings: string | undefined;
  expenses: string | undefined;
  contributions: string | undefined;
  returnOnInvestment: string | undefined;
  swr: string | undefined;
  inputPanelExpanded: boolean;
  assumptionsPanelExpanded: boolean;
  outputPanelExpanded: boolean;
};

export default class FiCalc extends React.Component<CalcProps, State> {
  static readonly SAVINGS_MIN: number = 0;
  static readonly SAVINGS_MAX: number = 1000000;
  static readonly SAVINGS_STEP: number = 5000;
  static readonly CONTRIBUTIONS_MIN: number = 0;
  static readonly CONTRIBUTIONS_MAX: number = 50000;
  static readonly CONTRIBUTIONS_STEP: number = 1000;
  static readonly EXPENSES_MIN: number = 0;
  static readonly EXPENSES_MAX: number = 100000;
  static readonly EXPENSES_STEP: number = 1000;
  static readonly AGE_MIN: number = 15;
  static readonly AGE_MAX: number = 70;
  static readonly AGE_STEP: number = 1;
  static readonly COST_MIN: number = 1;
  static readonly COST_MAX: number = 10000;
  static readonly COST_STEP: number = 100;
  static readonly RETURN_ON_INVESTMENT_MIN: number = 0;
  static readonly RETURN_ON_INVESTMENT_MAX: number = 15;
  static readonly RETURN_ON_INVESTMENT_STEP: number = 0.1;
  static readonly SWR_MIN: number = 0;
  static readonly SWR_MAX: number = 15;
  static readonly SWR_STEP: number = 0.1;

  constructor(props: CalcProps) {
    super(props);
    this.state = {
      savings: "60000",
      contributions: "4378",
      expenses: "57311",
      age: "30",
      returnOnInvestment: "6.11",
      cost: "5000",
      swr: "4",
      inputPanelExpanded: true,
      assumptionsPanelExpanded: false,
      outputPanelExpanded: true,
    };
  }

  onSavingsTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        savings: event.target.value,
      });
    }
  }

  onSavingsChange(event: any, value: number | number[]) {
    this.setState({
      savings: value.toString(),
    });
  }

  onContributionsTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        contributions: event.target.value,
      });
    }
  }

  onContributionsChange(event: any, value: number | number[]) {
    this.setState({
      contributions: value.toString(),
    });
  }

  onCostTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        cost: event.target.value,
      });
    }
  }

  onCostChange(event: any, value: number | number[]) {
    this.setState({
      cost: value.toString(),
    });
  }

  onAgeTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        age: event.target.value,
      });
    }
  }

  onAgeChange(event: any, value: number | number[]) {
    this.setState({
      age: value.toString(),
    });
  }

  onExpenseTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        expenses: event.target.value,
      });
    }
  }

  onExpenseChange(event: any, value: number | number[]) {
    this.setState({
      expenses: value.toString(),
    });
  }

  onReturnTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        returnOnInvestment: event.target.value,
      });
    }
  }

  onReturnChange(event: any, value: number | number[]) {
    this.setState({
      returnOnInvestment: value.toString(),
    });
  }

  onSWRTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (this.isNumeric(event.target.value)) {
      this.setState({
        swr: event.target.value,
      });
    }
  }

  onSWRChange(event: any, value: number | number[]) {
    this.setState({
      swr: value.toString(),
    });
  }

  toggleInputAccordion() {
    let newState = this.state.inputPanelExpanded ? false : true;
    this.setState({
      inputPanelExpanded: newState,
    });
  }

  toggleAssumptionsAccordion() {
    let newState = this.state.assumptionsPanelExpanded ? false : true;
    this.setState({
      assumptionsPanelExpanded: newState,
    });
  }

  toggleOutputAccordion() {
    let newState = this.state.outputPanelExpanded ? false : true;
    this.setState({
      outputPanelExpanded: newState,
    });
  }

  isNumeric(str: string) {
    if (str === "-" || str === "." || str === "-.") {
      return true;
    }
    let num = Number(str);
    return !isNaN(num);
  }

  parse(input: string | undefined) {
    if (input === undefined) {
      return 0;
    }
    let result = parseFloat(input);
    result = this.replaceNaN(result, 0);
    return this.replaceUndefined(result, 0);
  }

  cleanInput(input: string) {
    // If a decimal is the last part of the input string, remove it
    if (input[input.length - 1] === ".") {
      return input.slice(0, -1);
    }
    return input;
  }

  formatYears(years: number): string {
    return isNaN(years) || !isFinite(years)
      ? "With these parameters, you will never reach FI!"
      : years.toFixed(2);
  }

  replaceNaN(value: number, alternative: number) {
    return isNaN(value) ? alternative : value;
  }

  replaceUndefined(value: number | undefined, alternative: number) {
    return value === undefined ? alternative : value;
  }

  formatMoney(value: number) {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let formattedMoney = formatter.format(value);
    if (formattedMoney.slice(-3) === ".00") {
      return formattedMoney.slice(0, -3);
    }
    return formattedMoney;
  }

  calculateYearsToRetirement(
    netRate: number,
    contributions: number,
    savings: number,
    moneyToRetire: number
  ): number {
    return this.nper(
      netRate /* rate */,
      -contributions /* paymentAmount */,
      -savings /* presentValue */,
      moneyToRetire /* futureValue */
    );
  }

  nper(
    rate: number,
    paymentAmount: number,
    presentValue: number,
    futureValue: number
  ) {
    if (rate === 0) {
      // presentValue and paymentAmount are inverted because nper is traditionally drawn down,
      // not accumulated up.
      // We need to uninvert them here.
      return (futureValue - presentValue * -1.0) / (paymentAmount * -1.0);
    }

    const endOrBeginning: number = 0;
    const numerator: number =
      paymentAmount * (1 + rate * endOrBeginning) - futureValue * rate;
    const denominator =
      presentValue * rate + paymentAmount * (1 + rate * endOrBeginning);
    //console.log("Num", numerator, "DEN", denominator);
    return Math.log(numerator / denominator) / Math.log(1 + rate);
  }

  //formatMoney(n: number): string {
  //  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  //}

  secondsToFormattedTimeString(seconds: number): string {
    if (isNaN(seconds)) {
      return "With these parameters, you will never reach FI!";
    }

    if (seconds === 0) {
      return "0 seconds";
    }

    let numYears;
    let numDays;
    let numHours;
    let numMinutes;
    let numSeconds;
    if (seconds > 0) {
      numYears = Math.floor(seconds / 31536000);
      numDays = Math.floor((seconds % 31536000) / 86400);
      numHours = Math.floor(((seconds % 31536000) % 86400) / 3600);
      numMinutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
      numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    } else {
      numYears = Math.ceil(seconds / 31536000);
      numDays = Math.ceil((seconds % 31536000) / 86400);
      numHours = Math.ceil(((seconds % 31536000) % 86400) / 3600);
      numMinutes = Math.ceil((((seconds % 31536000) % 86400) % 3600) / 60);
      numSeconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    }

    return (
      (numYears == 0 ? "" : numYears + " years ") +
      (numDays == 0 ? "" : numDays + " days ") +
      (numHours == 0 ? "" : numHours + " hours ") +
      (numMinutes == 0 ? "" : numMinutes + " minutes and ") +
      (numSeconds == 0 ? "" : numSeconds.toFixed(0) + " seconds")
    );
  }

  render() {
    // Convert state strings to numbers
    let swr = this.parse(this.state.swr);
    let returnOnInvestment = this.parse(this.state.returnOnInvestment);
    let expenses = this.parse(this.state.expenses);
    let contributions = this.parse(this.state.contributions);
    let savings = this.parse(this.state.savings);
    let age = this.parse(this.state.age);
    let cost = this.parse(this.state.cost);

    // Math
    let swrPercentage = swr / 100.0;
    let roiPercentage = returnOnInvestment / 100.0;
    let moneyToRetire = expenses / swrPercentage;
    let yearsToRetirementWithCost = this.calculateYearsToRetirement(
      roiPercentage,
      contributions,
      savings - cost,
      moneyToRetire
    );
    let yearsToRetirementWithCostFormatted = this.formatYears(
      yearsToRetirementWithCost
    );
    let ageAtRetirementFormatted = this.formatYears(
      this.replaceUndefined(age, 0) + yearsToRetirementWithCost
    );
    let yearsToRetirement = this.calculateYearsToRetirement(
      roiPercentage,
      contributions,
      savings,
      moneyToRetire
    );
    let difference = yearsToRetirementWithCost - Math.max(yearsToRetirement, 0);

    let retirementDiffString;
    if (yearsToRetirementWithCost > 0) {
      retirementDiffString = this.secondsToFormattedTimeString(
        difference * 31536000
      );
    } else {
      retirementDiffString = "You are already FI! Congrats!";
    }

    return (
      <div>
        <ExpansionPanel
          expanded={this.state.inputPanelExpanded}
          onChange={this.toggleInputAccordion.bind(this)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="accordion-heading-1">Inputs</div>
            <div className="accordion-heading-2">Your $$$</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="accordion-content">
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Cost of the Thing You Want to Buy"
                      value={this.state.cost}
                      onChange={this.onCostTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={cost}
                      onChange={this.onCostChange.bind(this)}
                      step={FiCalc.COST_STEP}
                      min={FiCalc.COST_MIN}
                      max={FiCalc.COST_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.COST_MIN,
                          label: "$" + FiCalc.COST_MIN.toString(),
                        },
                        {
                          value: FiCalc.COST_MAX,
                          label: "$" + FiCalc.COST_MAX.toString(),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Age (Today)"
                      value={this.state.age}
                      onChange={this.onAgeTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start"> </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={age}
                      onChange={this.onAgeChange.bind(this)}
                      step={FiCalc.AGE_STEP}
                      min={FiCalc.AGE_MIN}
                      max={FiCalc.AGE_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.AGE_MIN,
                          label: FiCalc.AGE_MIN.toString(),
                        },
                        {
                          value: FiCalc.AGE_MAX,
                          label: FiCalc.AGE_MAX.toString(),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Savings (Today)"
                      value={this.state.savings}
                      onChange={this.onSavingsTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={savings}
                      onChange={this.onSavingsChange.bind(this)}
                      step={FiCalc.SAVINGS_STEP}
                      min={FiCalc.SAVINGS_MIN}
                      max={FiCalc.SAVINGS_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.SAVINGS_MIN,
                          label: "$" + FiCalc.SAVINGS_MIN.toString(),
                        },
                        {
                          value: FiCalc.SAVINGS_MAX,
                          label: "$" + FiCalc.SAVINGS_MAX.toString(),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Expenses (Annual)"
                      value={this.state.expenses}
                      onChange={this.onExpenseTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={expenses}
                      onChange={this.onExpenseChange.bind(this)}
                      step={FiCalc.EXPENSES_STEP}
                      min={FiCalc.EXPENSES_MIN}
                      max={FiCalc.EXPENSES_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.EXPENSES_MIN,
                          label: "$" + FiCalc.EXPENSES_MIN.toString(),
                        },
                        {
                          value: FiCalc.EXPENSES_MAX,
                          label: "$" + FiCalc.EXPENSES_MAX.toString(),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Savings (Annual)"
                      value={this.state.contributions}
                      onChange={this.onContributionsTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">$</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={contributions}
                      onChange={this.onContributionsChange.bind(this)}
                      step={FiCalc.CONTRIBUTIONS_STEP}
                      min={FiCalc.CONTRIBUTIONS_MIN}
                      max={FiCalc.CONTRIBUTIONS_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.CONTRIBUTIONS_MIN,
                          label: "$" + FiCalc.CONTRIBUTIONS_MIN.toString(),
                        },
                        {
                          value: FiCalc.CONTRIBUTIONS_MAX,
                          label: "$" + FiCalc.CONTRIBUTIONS_MAX.toString(),
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={this.state.assumptionsPanelExpanded}
          onChange={this.toggleAssumptionsAccordion.bind(this)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className="accordion-heading-1">Assumptions</div>
            <div className="accordion-heading-2">
              Things that affect the outputs
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className="accordion-content">
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Average Annual Real ROI"
                      value={this.state.returnOnInvestment}
                      onChange={this.onReturnTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">%</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={returnOnInvestment}
                      onChange={this.onReturnChange.bind(this)}
                      step={FiCalc.RETURN_ON_INVESTMENT_STEP}
                      min={FiCalc.RETURN_ON_INVESTMENT_MIN}
                      max={FiCalc.RETURN_ON_INVESTMENT_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.RETURN_ON_INVESTMENT_MIN,
                          label:
                            FiCalc.RETURN_ON_INVESTMENT_MIN.toString() + "%",
                        },
                        {
                          value: FiCalc.RETURN_ON_INVESTMENT_MAX,
                          label:
                            FiCalc.RETURN_ON_INVESTMENT_MAX.toString() + "%",
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="accordion-row">
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="accordion-textfield-grid"
                  >
                    <TextField
                      className="accordion-textfield"
                      id="standard-basic"
                      label="Safe Withdrawal Rate (SWR)"
                      value={this.state.swr}
                      onChange={this.onSWRTextChange.bind(this)}
                      variant="standard"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">%</InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} className="accordion-slider-grid">
                    <Slider
                      className="accordion-slider"
                      aria-labelledby="discrete-continuous"
                      value={swr}
                      onChange={this.onSWRChange.bind(this)}
                      step={FiCalc.SWR_STEP}
                      min={FiCalc.SWR_MIN}
                      max={FiCalc.SWR_MAX}
                      valueLabelDisplay="off"
                      marks={[
                        {
                          value: FiCalc.SWR_MIN,
                          label: FiCalc.SWR_MIN.toString() + "%",
                        },
                        {
                          value: FiCalc.SWR_MAX,
                          label: FiCalc.SWR_MAX.toString() + "%",
                        },
                      ]}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={this.state.outputPanelExpanded}
          onChange={this.toggleOutputAccordion.bind(this)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="accordion-heading-1">Outputs</div>
            <div className="accordion-heading-2">Your FI prognosis</div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="output-accordion">
            <div>
              <div className="output-row">
                <div className="output-label">$$$ needed to reach FI</div>
                <div className="output-value">
                  {this.formatMoney(moneyToRetire)}
                </div>
              </div>
              <div className="output-row">
                <div className="output-label">Years until FI</div>
                <div className="output-value">
                  {yearsToRetirementWithCostFormatted}
                </div>
              </div>
              <div className="output-row">
                <div className="output-label">Your age at FI</div>
                <div className="output-value">{ageAtRetirementFormatted}</div>
              </div>
            </div>
            <div>
              <div className="retirement-delay">
                By spending {this.formatMoney(cost)} today, you're delaying your
                FI by:
              </div>
              <div>
                <strong>{retirementDiffString}</strong>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
