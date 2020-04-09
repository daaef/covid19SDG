function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * times;
}

function infectionsRequested(currentlyInfected, period, type) {
  let infectionsRequestedTime;
  switch (type) {
    case 'weeks':
      infectionsRequestedTime = currentlyInfected * (2 ** ((period * 7) / 3));
      break;
    case 'months':
      infectionsRequestedTime = currentlyInfected * (2 ** ((period * 30) / 3));
      break;
    default:
      infectionsRequestedTime = currentlyInfected * (2 ** (period / 3));
  }
  return infectionsRequestedTime;
}

const covid19ImpactEstimator = (data) => {
  const input = data;
  const currentlyInfectedImpact = currentlyInfectedPeople(data.reportedCases, 10);
  const currentlyInfectedSevere = currentlyInfectedPeople(data.reportedCases, 50);
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedImpact,
      infectionsByRequestedTime: infectionsRequested(currentlyInfectedImpact,
        data.timeToElapse, data.periodType)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: infectionsRequested(currentlyInfectedSevere,
        data.timeToElapse, data.periodType)
    }
  };
};

export default covid19ImpactEstimator;
