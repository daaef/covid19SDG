export function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * times;
}

export function infectionsRequested(currentlyInfected, period, type) {
  let infectionsRequestedTime;
  switch (type) {
    case 'weeks':
      infectionsRequestedTime = currentlyInfected * (2 ** Math.round((period * 7) / 3));
      break;
    case 'months':
      infectionsRequestedTime = currentlyInfected * (2 ** (period * 10));
      break;
    default:
      infectionsRequestedTime = currentlyInfected * (2 ** Math.round(period / 3));
  }
  return infectionsRequestedTime;
}


export function dollarsInFlightCost(
  infectionsByRequestedTime,
  avgDailyIncomePopulation,
  avgDailyIncomeInUSD,
  period,
  type
) {
  let dollarsInFlight;
  switch (type) {
    case 'weeks':
      dollarsInFlight = Math.round((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * (period * 7));
      break;
    case 'months':
      dollarsInFlight = Math.round((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * (period * 30));
      break;
    default:
      dollarsInFlight = Math.round((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * period);
  }

  return dollarsInFlight;
}
