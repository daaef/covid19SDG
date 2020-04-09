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
  const impactHospitalBedsByRequestedTime = Math.ceil((data.totalHospitalBeds * 0.35)
    - impactSevereCasesByRequestedTime);
  const severeHospitalBedsByRequestedTime = Math.ceil((data.totalHospitalBeds * 0.35)
    - severeSevereCasesByRequestedTime);

  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedImpact,
      infectionsByRequestedTime: impactInfectionsByRequestedTime,
      severeCasesByRequestedTime: impactSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: severeInfectionsByRequestedTime,
      severeCasesByRequestedTime: severeSevereCasesByRequestedTime,
      hospitalBedsByRequestedTime: severeHospitalBedsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
