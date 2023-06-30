<template>
    <form @submit.prevent="updateUser()">
        <a-card width="100%">
            <div class="row mb-3">
                <div class="col-12 col-sm-4">
                    <div class="row">
                        <div class="col-12 mb-3 d-flex justify-content-center">
                            <a-avatar :size="200">
                                <template #icon>
                                    <img src="../../../assets/user.jpg" alt="">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12  d-flex justify-content-center">
                            <a-button type="primary">
                                <i class="fa-solid fa-plus me-2"></i>
                                <span>Chọn ảnh</span>
                            </a-button>
                        </div>
                    </div>

                </div>
                <div class="col-12 col-sm-8">
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Tình trạng:</label>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="tình trạng" style="width: 100%" :options="status_user"
                                :filter-option="filterOption" allow-clear v-model:value="status_id" :class="{'select-danger': errors.status_id}"></a-select>
                                <div class="w-100"></div>
                                <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Tên tài khoản:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Tên tài khoản" allow-clear v-model:value="username" :class="{'input-danger': errors.username}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Họ và tên:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Họ và tên" allow-clear v-model:value="name" :class="{'input-danger': errors.name}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Email:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Email" allow-clear v-model:value="email" :class="{'input-danger': errors.email}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-12 col-sm-3 text-start text-sm-end">Phòng ban:</label>
                        <div class="col-12 col-sm-5">
                            <div class="row">
                                <div class="col-10 col-sm-10">
                                    <a-select show-search placeholder="Phòng ban" style="width: 100%" :options="department"
                                    :filter-option="filterOption" allow-clear v-model:value="department_id" :class="{'select-danger': errors.department_id}"></a-select>
                                    <div class="w-100"></div>
                                    <small v-if="errors.department_id" class="text-danger">{{ errors.department_id[0] }}</small>
                                </div>
                                <div class="col-2 col-sm-2">
                                    <a-button type="secondary">
                                        <router-link :to="{ name: 'admin-users-create' }">
                                            <i class="fa-solid fa-plus"></i>
                                        </router-link>
                                    </a-button>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div class="row mb-3" >
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Mật khẩu:</label>
                        <div class="col-12 col-sm-5">
                            <a-checkbox v-model:checked="change_password">Mật khẩu</a-checkbox>
                        </div>
                    </div>
                    <div class="row mb-3"  v-if="change_password == true">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Mật khẩu:</label>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="mật khẩu" allow-clear v-model:value="password" :class="{'input-danger': errors.password}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="change_password == true">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Xác nhận mật khẩu:</label>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear v-model:value="password_confirmation"/>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Lần đăng nhập cuối cùng:</label>
                        <div class="col-12 col-sm-5">
                            <span>{{ login_at }}</span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-3 text-start text-sm-end">Lần đổi mật khẩu cuối cùng:</label>
                        <div class="col-12 col-sm-5">
                            <span>{{ change_password_at }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-sm-flex justify-content-sm-end d-grid mx-auto">
                    <a-button class="me-0 me-sm-2 mb-3 mb-sm-0">
                        <router-link :to="{name:'admin-users'}"><span>Hủy</span></router-link>
                    </a-button>
                    <a-button type="primary" html-type="submit">
                        <span>Lưu</span>
                    </a-button>
                </div>
            </div>
        </a-card>
    </form>
    
</template>
<script>
import { defineComponent, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { message } from 'ant-design-vue';
import { useMenu } from "../../../stores/use-menu.js"
import dayjs from "dayjs";
import axios from 'axios';
export default defineComponent({
    setup() {
        const store = useMenu();
        store.onSelectedKeys(["admin-users"]);
        const router = useRouter();
        const route = useRoute();
        const status_user = ref([]);
        const department = ref([]);
        const errors = ref({});
        const users = reactive({
            username : "",
            name : "",
            email  : "",
            password : "",
            password_confirmation : "",
            department_id :[],
            status_id : [],
            change_password : false,
            login_at : "",
            change_password_at : ""
        });
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };

        const getUserEdit = () => {
            axios.get(`http://127.0.0.1:8000/api/users/${route.params.id}/edit`)
            .then((response) => {
                users.username = response.data.user.username;
                users.name = response.data.user.name;
                users.email = response.data.user.email;
                users.department_id = response.data.user.department_id;
                users.status_id = response.data.user.status_id;
                users.login_at = response.data.user.login_at ? dayjs(response.data.user.login_at).format('DD/MM/YYYY - HH:mm') : 'chưa có lượt đăng nhật';
                users.change_password_at = response.data.user.change_password_at ? dayjs(response.data.user.change_password_at).format('DD/MM/YYYY- HH:mm') :  'chưa có lượt cập nhật mật khẩu';
                status_user.value = response.data.status;
                department.value = response.data.department;
            })
            .catch((error) => {

            })
        };
        const updateUser = () => {
            axios.post(`http://127.0.0.1:8000/api/users/${route.params.id}/update`,users)
            .then((response) => {
                if(response.status == 200) {
                    message.success('cập nhật thành công')
                    router.push({name : "admin-users"})
                }
            })
            .catch((error) => {
                errors.value = error.response.data.errors;
            })
        };
        getUserEdit();
        return {
            status_user,
            department,
            errors,
            ...toRefs(users),
            filterOption,
            updateUser
        }
    }

})
</script>
<style>
    .select-danger {
        border: 1px solid red;
    }
    .input-danger {
        border-color: red;
    }
</style>