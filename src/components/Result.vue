<template>
    <div class="result">
        <h3>{{ title }}</h3>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Currently Infected People</label>
            <p>{{ report.currentlyInfected }}</p>
        </div>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Estimated infections in {{input.timeToElapse}} {{input.periodType}}</label>
            <p class="value">{{report.infectionsByRequestedTime}}</p>
        </div>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Cases that might be hospitalised in {{input.timeToElapse}} {{input.periodType}}</label>
            <p class="value">{{report.severeCasesByRequestedTime}}</p>
        </div>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Number of hospital beds available in {{input.timeToElapse}} {{input.periodType}}</label>
            <p class="value">{{report.hospitalBedsByRequestedTime}}</p>
        </div>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Cases that might be in the ICU in {{input.timeToElapse}} {{input.periodType}}</label>
            <p class="value">{{report.casesForICUByRequestedTime}}</p>
        </div>
        <div class="data">
            <label :class="'uk-label ' + labelClass">Cases that might be on ventilators in {{input.timeToElapse}} {{input.periodType}}</label>
            <p class="value">{{report.casesForVentilatorsByRequestedTime}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Result',
    props: {
      title: String,
      report: Object,
      input: Object,
      labelClass: String
    }
  };
</script>

<style scoped>

    .uk-label{
        white-space: normal;
    }
    .result{

        @media (min-width: 993px) {
            width: 48%;
        }
    }

    .pl-5 {
        padding-left: 20px;
    }
</style>
