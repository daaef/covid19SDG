function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * times;
}

function infectionsRequested(currentlyInfected, period) {
  return currentlyInfected * 2 ** (period / 3);
}

const covid19ImpactEstimator = (data) => {
  const input = data;
  const currentlyInfectedImpact = currentlyInfectedPeople(data.reportedCases, 10);
  const currentlyInfectedSevere = currentlyInfectedPeople(data.reportedCases, 50);
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedImpact,
      infectionsByRequestedTime: infectionsRequested(currentlyInfectedImpact, data.timeToElapse)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedSevere,
      infectionsByRequestedTime: infectionsRequested(currentlyInfectedSevere, data.timeToElapse)
    }
  };
};

export default covid19ImpactEstimator;
