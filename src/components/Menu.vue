
<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
    >
        <a-menu-item key="admin-users">
            <router-link :to="{name: 'admin-users'}">
                <span><UserOutlined/> Tài khoản</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-roles">
            <router-link :to="{name: 'admin-roles'}">
                <span><TagOutlined/> Vài trò</span>
            </router-link>
        </a-menu-item>
        <a-menu-item key="admin-settings">
            <router-link :to="{name: 'admin-settings'}">
                <span><SettingOutlined/> Cài đặt</span>
            </router-link>
        </a-menu-item>
    </a-menu>
</template>
<script>
import { defineComponent} from 'vue';
import { useMenu } from "../stores/use-menu.js";
import { storeToRefs } from 'pinia';
import { UserOutlined, TagOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    UserOutlined,
    SettingOutlined,
    TagOutlined
  },
  setup() {
    const store = useMenu();
    return {
        ...storeToRefs(store)
    };
  },
});
</script>