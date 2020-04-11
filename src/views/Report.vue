<template>
    <div class="report">
        <div class="report-data">
            <h2 v-if="report" class="uk-heading-primary uk-text-center uk-width-1-1@m">
                Covid-19 Calculation Report
            </h2>
            <div v-if="report != null" class="uk-flex uk-flex-between uk-flex-wrap uk-text-left uk-column-divider">
                <Result :report="report.impact" :input="formData" title="Current Impact" />
                <Result :report="report.severeImpact" :input="formData" title="Severe Impact" :labelClass="'uk-label-danger'" />
            </div>
            <div v-else class="uk-height-1-1 uk-width-1-1@m uk-flex uk-flex-center uk-flex-middle">

                <h2 class="uk-heading-primary uk-text-center uk-width-1-1@m">
                    Sorry, Nothing To Show Until you
                    <router-link class="uk-link-muted" to="/">Generate</router-link>
                    a Report
                </h2>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .report {
        padding: 70px 100px;
        height: 100vh;

        .report-data {
            background: #ffffff;
            padding: 30px 50px;
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }


</style>

<script>


  import Result from '../components/Result';
  export default {
    name: 'Report',
    components: { Result },
    data() {
      return {
        counter: 0
      };
    },
    computed: {
      formData() {
        return this.$store.getters.formData;
      },
      report() {
        return this.$store.getters.report;
      }
    },
    mounted() {
      if (this.report) {
        console.log(this.report.impact);
        console.log(this.report.severeImpact);
      }
    }
  };

</script>
