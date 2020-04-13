<template>
    <div class="card-body">
        <h2 class="uk-heading-primary">
            Covid-19 Estimator
        </h2>
        <form class="uk-form-stacked uk-text-left" @submit.stop.prevent="submitForm(data)">

            <div class="uk-margi-small">
                <label class="uk-form-label" for="periodType">Period Type</label>
                <div class="uk-form-controls">
                    <select
                            class="uk-select"
                            name="periodType"
                            v-model="data.periodType"
                            data-period-type="data-period-type"
                            required="true"
                            id="periodType"
                    >
                        <option
                                v-for="type in periodTypes"
                                :key="type.value"
                                :value="type.value"
                        >
                            {{ type.label }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="uk-margin-small">
                <label class="uk-form-label" for="population">Current Population</label>
                <div class="uk-form-controls">
                    <input
                            class="uk-input"
                            id="population"
                            type="number"
                            placeholder="Population"
                            data-population="data-population"
                            v-model="data.population"
                            required="true"
                            min="0"
                    >
                </div>
            </div>
            <div class="uk-margin-small">
                <label class="uk-form-label" for="hbeds">Number of Hospital Beds</label>
                <div class="uk-form-controls">
                    <input
                            class="uk-input"
                            id="hbeds"
                            type="number"
                            placeholder="Number of Hospital Beds"
                            min="0"
                            data-total-hospital-beds="data-total-hospital-beds"
                            v-model="data.totalHospitalBeds"
                            required="true"
                    >
                </div>
            </div>
            <div class="uk-margin-small">
                <label class="uk-form-label" for="period">Number of {{ data.periodType }} to calculate for</label>
                <div class="uk-form-controls">
                    <input
                            class="uk-input"
                            id="period"
                            type="number"
                            :placeholder="'Number of ' + data.periodType"
                            data-time-to-elapse="data-time-to-elapse"
                            v-model="data.timeToElapse"
                            required="true"
                            min="0"
                    >
                </div>
            </div>
            <div class="uk-margin-small">
                <label class="uk-form-label" for="reported"> Reported Cases</label>
                <div class="uk-form-controls">
                    <input
                            class="uk-input"
                            id="reported"
                            type="text"
                            min="0"
                            placeholder="Reported Cases"
                            data-reported-cases="data-reported-cases"
                            v-model="data.reportedCases"
                            required="true"
                    >
                </div>
            </div>
            <div class="uk-margin-small">
                <button data-go-estimate class="uk-button uk-button-bright">Calculate</button>
            </div>
        </form>
        <div class="illustration">
            <img src="@/assets/covid-19.png" alt="">
        </div>
        <div class="triangle-top-right">
            <Triangle/>
        </div>
        <div class="triangle-bottom-right">
            <Triangle2 />
        </div>
    </div>
</template>

<script>
  import Triangle from './Triangle';
  import Triangle2 from './Triangle2';

  export default {
    name: 'EstimatorForm',
    props: {
      formData: {
        type: Object,
        required: true
      }
    },
    components: { Triangle2, Triangle },
    data() {
      return {
        data: {...this.formData},
        periodTypes: [
          {
            label: 'Days',
            value: 'days'
          },
          {
            label: 'Weeks',
            value: 'weeks'
          },
          {
            label: 'Months',
            value: 'months'
          }
        ]
      }
    },
    methods: {
      submitForm: function (data) {
        this.$store.commit('estimate', data);
        this.$router.push('/report');
      }
    }
  };
</script>

<style lang="scss">
    .triangle-top-right{
        position: absolute;
        top: 30px;
        right: 0;
    }
    .triangle-bottom-right{
        position: absolute;
        bottom: 30px;
        right: 0;
    }
    .uk-select:not([multiple]):not([size]) option {
        color: #ffffff!important;
    }
    .card-body {
        width: 100%;
        height: 100%;
        padding: 70px 100px;
        background: #112337;
        @media (max-width: 990px) {
            padding: 50px;
        }
        position: relative;
        label{
            color: white;
        }
        input, select{
            border: none;
            background: transparent;
            border-bottom: solid 1px #a3a3a3;
            &:focus {
                background: rgba(17, 35, 55, 0.82);
                color: white!important;
            }
            color: white;
        }
        * , * *{
            color: white;
        }
        form{
            height: calc((100%) - (100px));
            overflow: auto;
            .uk-button-bright{
                background: #ffffff;
                color: #112337;
            }
        }
    }

    .illustration {
        position: absolute;
        height: 90%;
        width: 90%;
        top: 5%;
        left: 0;
        transform: translateX(-100%);
        padding: 20px 0 20px 20px;
        background: rgba(255, 255, 255, 0.67) url("/assets/img/bg.jpg");
        @media (max-width: 992px) {
            display: none;
        }
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
</style>
