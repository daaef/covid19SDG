import { deriveImpact } from './functions';

const covid19ImpactEstimator = (data) => ({
  data,
  impact: deriveImpact(data),
  severeImpact: deriveImpact(data, 5)
});

export default covid19ImpactEstimator;
