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

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-image: url(./assets/bg.jpg);
        background-size: cover;
        background-position: center;
        min-height: 100vh;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .slide-up-enter-active {
      transition: all .3s ease;
    }
    .slide-up-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-up-enter, .slide-up-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
      /*transform: translateY(-100%);*/
      opacity: 0;
    }
    .slide-down-enter-active {
      transition: all .3s ease;
    }
    .slide-down-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-down-enter, .slide-down-leave-to
      /* .slide-fade-leave-active below version 2.1.8 */ {
      /*transform: translateY(100%);*/
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
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transitionName = toDepth < fromDepth ? 'slide-up' : 'slide-down'
      }
    }
  };
</script>
