<template>
    <div>
        trang roles
    </div>
</template>
<script>
import { useMenu } from "../../../stores/use-menu.js"
export default{
  setup() {
    const store = useMenu();
    store.onSelectedKeys(["admin-roles"]);
  },
};
</script>