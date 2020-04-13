<template>
    <div id="app">
        <Navigation/>
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    .slide-up-enter-active {
      transition: all .3s ease;
    }
    .slide-up-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-up-enter, .slide-up-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
</style>
<script>
  import Navigation from './components/Navigation';

  export default {
    components: { Navigation },
    data () {
      return {
        transitionName: 'slide-up'
      }
    }
  };
</script>
