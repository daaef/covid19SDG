<template>
    <div>
        <ul class="uk-flex uk-flex-column vert-nav">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/report">Report</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Navigation'
  };
</script>

<style scoped lang="scss">
    .vert-nav{
        position: fixed;
        height: 100vh;
        justify-content: center;
        align-items: center;
        list-style: none;
        li{
            text-orientation: upright;
            writing-mode: vertical-lr;
            height: 30vh;
            font-size: 1.3rem;
            a {
                font-weight: bold;
                color: #2c3e50;
                text-decoration: none;
                &.router-link-exact-active {
                    color: #42b983;
                    border-left: solid 5px #42b983;
                }
            }
        }
    }
</style>
