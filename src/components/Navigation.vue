<template>
    <div class="uk-width-1-1@m">
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
        @media (max-width: 992px){
            display: flex;
            height: 50px;
            width: 70%;
            margin-left: 50%;
            transform: translateX(-50%);
            justify-content: space-between;
            flex-direction: row;
            li{
                text-orientation: unset;
                writing-mode: unset;
                height: 50px;
                a {
                    font-weight: bold;
                    color: #2c3e50;
                    text-decoration: none;
                    &.router-link-exact-active {
                        color: #42b983;
                        border-bottom: solid 5px #42b983;
                        border-left: none;
                    }
                }
            }
        }
    }
</style>
