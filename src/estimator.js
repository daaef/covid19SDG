import { currentlyInfectedPeople, infectionsRequested, dollarsInFlightCost } from './functions';

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
  const impactHospitalBedsByRequestedTime = Math.trunc(
    (data.totalHospitalBeds * 0.35) - impactSevereCasesByRequestedTime
  );
  const severeHospitalBedsByRequestedTime = Math.trunc(
    (data.totalHospitalBeds * 0.35) - severeSevereCasesByRequestedTime
  );

  const impactCasesForICUByRequestedTime = Math.trunc(impactInfectionsByRequestedTime * (5 / 100));
  const severeCasesForICUByRequestedTime = Math.trunc(severeInfectionsByRequestedTime * (5 / 100));

  const impactCasesForVentilatorsByRequestedTime = Math.trunc(impactInfectionsByRequestedTime
    * (2 / 100));
  const severeCasesForVentilatorsByRequestedTime = Math.trunc(impactInfectionsByRequestedTime
    * (2 / 100));

  const impactDollarsInFlight = dollarsInFlightCost(
    impactInfectionsByRequestedTime,
    data.avgDailyIncomePopulation,
    data.avgDailyIncomeInUSD,
    data.timeToElapse,
    data.periodType
  );
  const severeDollarsInFlight = dollarsInFlightCost(
    severeInfectionsByRequestedTime,
    data.avgDailyIncomePopulation,
    data.avgDailyIncomeInUSD,
    data.timeToElapse,
    data.periodType
  );


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
