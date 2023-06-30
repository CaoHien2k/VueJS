<template>
  <div class="container-fuild">
    <div class="row bg-info p-3">
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
            <span @click="showDrawer()"><i class="fa-solid fa-align-justify"></i></span>
        </div>
        <div class="col-10 col-sm-9 d-flex align-items-center justify-content-center justify-content-sm-start">
          <img src="../assets/logo.jpg" alt="logo" height="32" width="34" class="rounded-circle ms-3 me-3">
          <span class="d-none d-sm-flex">QUẢN TRỊ</span>
        </div>
        <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
          <span @click="showDrawerUser()"><i class="fa-solid fa-user"></i></span>
        </div>
        <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
          <span>Admin</span>
        </div>
    </div>
  </div>
  <a-drawer
    v-model:visible="visible"
    title="DANH MỤC"
    placement="left"
  >
    <Menu />
  </a-drawer>
  <a-drawer
    v-model:visible="visible_user"
    title="DANH MỤC"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script>
import Menu from '../components/Menu.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components : {
      Menu
  },
  setup() {
    const visible = ref(false);
    const visible_user = ref(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const showDrawerUser = () => {
      visible_user.value = true;
    };
    return {
      visible,
      visible_user,
      showDrawer,
      showDrawerUser,
    };
  },
});
</script>