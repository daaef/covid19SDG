export function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * 10 * times;
}

export function getNumOfDays({ timeToElapse, periodType = 'days' }) {
  let numOfDays;
  switch (periodType) {
    case 'weeks':
      numOfDays = timeToElapse * 7;
      break;
    case 'months':
      numOfDays = timeToElapse * 30;
      break;
    default:
      numOfDays = timeToElapse;
      break;
  }
  return numOfDays;
}


export function dollarsInFlightCost(
  infectionsByRequestedTime,
  days, {
    avgDailyIncomePopulation,
    avgDailyIncomeInUSD
  }
) {
  Math.floor(
    (infectionsByRequestedTime * avgDailyIncomeInUSD * avgDailyIncomePopulation)
    / days
  );
}

export function deriveImpact({ region, ...content }, multiplier = 1) {
  const days = getNumOfDays(content);

  const infectionFactor = Math.floor(days / 3);

  const currentlyInfected = currentlyInfectedPeople(content.reportedCases, multiplier);

  const infectionsByRequestedTime = currentlyInfected * (2 ** infectionFactor);

  const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 0.15);

  const hospitalBedsByRequestedTime = Math.trunc((content.totalHospitalBeds * 0.35)
    - severeCasesByRequestedTime);

  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);

  const casesForVentilatorsByRequestedTime = Math.round(infectionsByRequestedTime * 0.02);

  const dollarsInFlight = dollarsInFlightCost(
    infectionsByRequestedTime, days,
    region
  );

  return {
    currentlyInfected,
    infectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };
}
