<template>
  <div class="navbar">
    <div class="logo-site">
      <div class="logo-box">
        <div @click="isShow = !isShow" class="toggle-icon"></div>
        <div class="amis-logo"></div>
      </div>
    </div>
    <div class="navbar-content">
      <router-link to="/dictionary/introduce" class="nav-item">
        <div class="nav-item-icon nav-item-dashboard"></div>
        <div class="nav-item-text">Tổng quan</div>
      </router-link>
      <router-link to="/dictionary/report" class="nav-item">
        <div class="nav-item-icon nav-item-report"></div>
        <div class="nav-item-text">Báo cáo</div>
      </router-link>
      <router-link to="/dictionary/buy" class="nav-item">
        <div class="nav-item-icon nav-item-dashboard"></div>
        <div class="nav-item-text">Mua hàng</div>
      </router-link>
      <router-link class="nav-item" to="/dictionary/customer">
        <div class="nav-item-icon nav-item-dic"></div>
        <div class="nav-item-text">Danh mục khách hàng</div>
      </router-link>
      <router-link class="nav-item" to="/dictionary/employee">
        <div class="nav-item-icon nav-item-dic"></div>
        <div class="nav-item-text">Danh mục nhân viên</div>
      </router-link>
      <router-link to="/dictionary/setting" class="nav-item">
        <div class="nav-item-icon nav-item-setting"></div>
        <div class="nav-item-text">Thiết lập hệ thống</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  isShow: true,
  name: "MenuBarLinks",
  data() {
    return {
      customer: "/dictionary/customer",
      employee: "/dictionary/employee",
    };
  },
};
</script>
