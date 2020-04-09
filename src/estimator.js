function currentlyInfectedPeople(reportedCases, times) {
  return reportedCases * times;
}

function infectionsRequested(currentlyInfected, period) {
  return currentlyInfected * 2 ** (period / 3);
}

const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedPeople(data.reportedCases, 10),
      infectionsByRequestedTime: infectionsRequested(this.currentlyInfected, data.timeToElapse)
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedPeople(data.reportedCases, 50),
      infectionsByRequestedTime: infectionsRequested(this.currentlyInfected, data.timeToElapse)
    }
  };
};

export default covid19ImpactEstimator;
