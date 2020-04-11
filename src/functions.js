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

export function deriveImpact({ region, ...content }, multiplier = 1) {
  const days = getNumOfDays(content);

  const infectionFactor = Math.trunc(days / 3);

  const currentlyInfected = currentlyInfectedPeople(content.reportedCases, multiplier);

  const infectionsByRequestedTime = currentlyInfected * (2 ** infectionFactor);

  const severeCasesByRequestedTime = Math.trunc(infectionsByRequestedTime * 0.15);

  const hospitalBedsByRequestedTime = Math.trunc((content.totalHospitalBeds * 0.35)
    - severeCasesByRequestedTime);

  const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 0.05);

  const casesForVentilatorsByRequestedTime = Math.round(infectionsByRequestedTime * 0.02);

  const dollarsInFlight = Math.trunc((infectionsByRequestedTime * region.avgDailyIncomeInUSD
    * region.avgDailyIncomePopulation) / days);

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
