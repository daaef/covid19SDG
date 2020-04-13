<template>
    <div class="report">
        <div class="report-data">
            <h2 v-if="report" class="uk-heading-primary uk-text-center uk-width-1-1@m">
                Covid-19 Calculation Report
            </h2>
            <div v-if="report != null" class="uk-flex uk-flex-between uk-flex-wrap uk-text-left uk-column-divider">
                <Result class="uk-width-1-2m" :report="report.impact" :input="formData" title="Current Impact"/>
                <Result class="uk-width-1-2m" :report="report.severeImpact" :input="formData" title="Severe Impact"
                        :labelClass="'uk-label-danger'"/>
                <div class="uk-text-center w-100">
                    <button class="uk-button uk-button-gen"><router-link to="/">Generate Another Report</router-link></button>
                </div>
            </div>
            <div v-else
                 class="uk-height-1-1 uk-width-1-1@m uk-flex uk-flex-center uk-card-secondary uk-flex-middle">
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
        @media (max-width: 992px) {
            padding: 50px 10px;
        }

        .report-data {
            background: #112337;
            padding: 30px 50px;
            height: 100%;
            width: 100%;
            overflow: auto;
            @media (max-width: 992px) {
                padding: 20px;
            }

            * {
                color: rgba(255, 255, 255, 0.8);
            }

            .uk-link-muted {
                color: #a3a3a3;
            }
            .uk-button-gen{
                background: rgba(34, 81, 59, 0.95);
                color: #ffffff;
                a{
                    text-decoration: none;
                }
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
