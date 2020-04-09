function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * times;
}

function infectionsRequested(currentlyInfected, period, type) {
  let infectionsRequestedTime;
  switch (type) {
    case 'weeks':
      infectionsRequestedTime = currentlyInfected * (2 ** Math.floor((period * 7) / 3));
      break;
    case 'months':
      infectionsRequestedTime = currentlyInfected * (2 ** (period * 10));
      break;
    default:
      infectionsRequestedTime = currentlyInfected * (2 ** Math.floor(period / 3));
  }
  return infectionsRequestedTime;
}


function dollarsInFlightCost(
  infectionsByRequestedTime,
  avgDailyIncomePopulation,
  avgDailyIncomeInUSD,
  period,
  type
) {
  let dollarsInFlight;
  switch (type) {
    case 'weeks':
      dollarsInFlight = Math.ceil((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * (period * 7));
      break;
    case 'months':
      dollarsInFlight = Math.ceil((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * (period * 30));
      break;
    default:
      dollarsInFlight = Math.ceil((infectionsByRequestedTime * avgDailyIncomePopulation)
        * avgDailyIncomeInUSD * period);
  }

  return dollarsInFlight;
}

const covid19ImpactEstimator = (data) => {
  const input = data;
  const currentlyInfectedImpact = currentlyInfectedPeople(data.reportedCases, 10);
  const currentlyInfectedSevere = currentlyInfectedPeople(data.reportedCases, 50);
  const impactInfectionsByRequestedTime = infectionsRequested(currentlyInfectedImpact,
    data.timeToElapse, data.periodType);
  const severeInfectionsByRequestedTime = infectionsRequested(currentlyInfectedSevere,
    data.timeToElapse, data.periodType);
  const impactSevereCasesByRequestedTime = impactInfectionsByRequestedTime * 0.15;
  const severeSevereCasesByRequestedTime = severeInfectionsByRequestedTime * 0.15;
  const impactHospitalBedsByRequestedTime = (Math.floor(data.totalHospitalBeds * 0.35)
    - impactSevereCasesByRequestedTime);
  const severeHospitalBedsByRequestedTime = (Math.floor(data.totalHospitalBeds * 0.35)
    - severeSevereCasesByRequestedTime);
  const impactCasesForICUByRequestedTime = Math.floor(impactInfectionsByRequestedTime * 0.05);
  const severeCasesForICUByRequestedTime = Math.floor(severeInfectionsByRequestedTime * 0.05);
  const impactCasesForVentilatorsByRequestedTime = Math.floor(
    impactInfectionsByRequestedTime * 0.02
  );
  const severeCasesForVentilatorsByRequestedTime = Math.floor(
    severeInfectionsByRequestedTime * 0.02
  );
  const impactDollarsInFlight = dollarsInFlightCost(impactInfectionsByRequestedTime,
    data.avgDailyIncomePopulation,
    data.avgDailyIncomeInUSD, data.timeToElapse, data.periodType);
  const severeDollarsInFlight = dollarsInFlightCost(severeInfectionsByRequestedTime,
    data.avgDailyIncomePopulation,
    data.avgDailyIncomeInUSD, data.timeToElapse, data.periodType);


  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedImpact,
      infectionsByRequestedTime: impactInfectionsByRequestedTime,
      severeCasesByRequestedTime: impactSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
      casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
      dollarsInFlight: impactDollarsInFlight
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: severeInfectionsByRequestedTime,
      severeCasesByRequestedTime: severeSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime,
      casesForICUByRequestedTime: severeCasesForICUByRequestedTime,
      casesForVentilatorsByRequestedTime: severeCasesForVentilatorsByRequestedTime,
      dollarsInFlight: severeDollarsInFlight
    }
  };
};

export default covid19ImpactEstimator;
