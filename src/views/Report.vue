<template>
    <div class="report">
        <div class="report-data">
            <h2 v-if="report" class="uk-heading-primary uk-text-center uk-width-1-1@m">
                Covid-19 Calculation Report
            </h2>
            <div v-show="report != null" class="uk-flex uk-flex-between uk-child-width-1-2@m uk-flex-wrap uk-text-left uk-column-divider">
                <Result class="uk-width-1-2@m" :report="report.impact" :input="formData" title="Current Impact" />
                <Result class="uk-width-1-2@m" :report="report.severeImpact" :input="formData" title="Severe Impact" :labelClass="'uk-label-danger'" />
            </div>
            <div v-show="report == null" class="uk-height-1-1 uk-width-1-1@m uk-flex uk-flex-center uk-flex-middle">

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
        @media (max-width: 992px){
            padding: 50px 10px;
        }

        .report-data {
            background: #ffffff;
            padding: 30px 50px;
            height: 100%;
            width: 100%;
            overflow: auto;
            @media (max-width: 992px){
                padding: 20px;
            }
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
    }
  };

</script>
