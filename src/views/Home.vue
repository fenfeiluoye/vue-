<template>
    <div class="home-wrap">
        <Header></Header>
        <main>
            <router-view></router-view>
        </main>
        <TabBar></TabBar>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'


export default {
  components: {
    Header,
    TabBar,
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
.home-wrap
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    overflow hidden
  
</style>

