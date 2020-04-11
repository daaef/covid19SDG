<template>
    <div class="home">
        <div class="uk-flex card-parent uk-flex-right uk-width-1-1@m uk-flex-wrap">
            <div class="uk-width-1-2@m uk-height-1-1">
                <EstimatorForm :formData="formData" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home {
        padding: 50px;
    }

    .card-parent{
        height: calc((100vh) - (100px));
    }
</style>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import EstimatorForm from '../components/EstimatorForm';

  export default {
    name: 'Home',
    components: {
      EstimatorForm,
      HelloWorld
    },
    computed: {
      formData () {
        return this.$store.getters.formData
      },
      report () {
        return this.$store.getters.report
      }
    }
  };
</script>
