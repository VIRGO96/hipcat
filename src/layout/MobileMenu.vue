<template>
<!-- <div>
  
</div> -->
  <ul class="nav nav-mobile-menu">
    <!-- <base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
      </template>
      <a class="dropdown-item" href="#">Notification 1</a>
      <a class="dropdown-item" href="#">Notification 2</a>
      <a class="dropdown-item" href="#">Notification 3</a>
      <a class="dropdown-item" href="#">Notification 4</a>
      <a class="dropdown-item" href="#">Another notification</a>
    </base-dropdown> -->
    <li class="nav-item">
      <router-link to="social-accounts?active=settings">
      <a href="#" class="nav-link">
        <i class="fas fa-user hidden-lg-up"></i>
        <span class="d-lg-none">Social Media</span>
      </a>
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="social-calendar?active=calendar">
      <a href="#" class="nav-link">
        <i class="far fa-calendar-alt hidden-lg-up"></i>
        <span class="d-lg-none">Calendar</span>
      </a>
      </router-link>
    </li>
    <li class="nav-item">
          <router-link to="overview?active=dashboard">
      <a href="#" class="nav-link">
        <i class="fas fa-tachometer-alt hidden-lg-up"></i>
        <span class="d-lg-none">Dashboard</span>
      </a>
      </router-link>
    </li>
    
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-atom hidden-lg-up"></i>
        <span class="d-lg-none">Digital Coach</span>
      </a>
    </li>
    
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="fas fa-chess-knight hidden-lg-up"></i>
        <span class="d-lg-none">Marketing Profile</span>
      </a>
    </li>
    <!-- <base-dropdown title="Dropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown> -->

    <li class="nav-item">
      <a class="nav-link" href="#/">
          <i class="fas fa-sign-out-alt"></i>
        <span >Log out</span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu'
  }
</script>
<style>
</style>
