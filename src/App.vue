<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created(){
        localStorage.setItem("options","dashboard")
    }
  }
</script>
<style lang="scss">

h5{
  font-weight:bold !important;
}
label{
  color: #6C6C6C !important;
  font-weight:bold !important
}
body{
  background-color:white !important;
}
.content{
  padding: 0px 15px !important;

}
.main-panel{
  background-color:white !important;
  padding: 0px 15px !important;

}
#modal-8___BV_modal_content_ {
    margin: -20vh auto 0px auto !important 
}
#modal-7___BV_modal_content_ {
    margin: -20vh auto 0px auto !important 
}
.familia{
  font-family: Monteserrat;
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.button-margins {
margin-bottom:1rem;
}
.button-margins2 {
margin-bottom:1.2rem !important;
}
.left-aligns{
  text-align:center !important;
}
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
