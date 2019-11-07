<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="scss">
label{
  color: #6C6C6C !important;
}
// body{
//   background-color:white !important;
// }
.content{
  padding: 0px 15px !important;

}
.main-panel{
  background-color:white !important;
  padding: 0px 15px !important;

}
.familia{
  font-family: Monteserrat;
}
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>
