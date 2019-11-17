<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-if="active_view=='settings'" to="/admin/account-info?active=settings">
        <p>Account Info</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='settings'" to="/admin/users?active=settings">
        <p>Users</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='settings'" to="/admin/social-accounts?active=settings">
        <p>Social Account</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='settings'" to="/admin/billing?active=settings">
        <p>Billing</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='calendar'" to="/admin/social-calendar?active=calendar">
        <p>Social Calendar</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='dashboard'" to="/admin/overview?active=dashboard">
        <p>Categories</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='dashboard'" to="/admin/starred-posts?active=dashboard">
        <p>Starred Posts</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='dashboard'" to="/admin/drafts?active=dashboard">
        <p>Drafts</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='dashboard'" to="/admin/upcoming-posts?active=dashboard">
        <p>Upcoming Posts</p>
      </sidebar-link>
      <sidebar-link v-if="active_view=='dashboard'" to="/admin/previously-posted?active=dashboard">
        <p>Previously Posted</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->

      <!-- <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>

  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    data(){
      return{
        ops:'dashboard'
      }
    },
    computed:{
      // active_view(){
        // console.log(localStorage.getItem("options"))
      //   this.ops=localStorage.getItem("options")
      //   return localStorage.getItem("options")
      // },
      active_view(){
        console.log(this.$route.query.active) // outputs 'yay'
        return this.$route.query.active
      }
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
