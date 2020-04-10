import { deriveImpact } from './functions';

const covid19ImpactEstimator = (data) => {
  const input = data;
  return {
    data: input,
    impact: deriveImpact(data),
    severeImpact: deriveImpact(data, 5)
  };
};

export default covid19ImpactEstimator;
