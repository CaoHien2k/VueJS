import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin.js";

const routes = [...admin];
const router = createRouter({
    history: createWebHistory(), //sử dụng trình duyệt với chế độ history chứ k tắt
    routes
});
export default router;