<template>
    <form @submit.prevent="createUser()" enctype="multipart/form-data">
        <a-card width="100%">
            <div class="row mb-3">
                <div class="col-12 col-sm-4">
                    <div class="row">
                        <div class="col-12 mb-3 d-flex justify-content-center">
                            <a-avatar :size="200">
                                <template #icon>
                                    <img v-if="previewImage" :src="previewImage"/>
                                    <img v-else src="../../../assets/user.jpg" alt="">
                                </template>
                            </a-avatar>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <a-input id="fileUpload" type="file" hidden @change="changeImage" v-model:value="avatar"/>
                            <a-button type="primary" @click="chooseFiles">
                                <i class="fa-solid fa-plus me-2"></i>
                                <span>Chọn ảnh</span>
                            </a-button>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-8">
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Tình trạng:</label>
                        <div class="col-12 col-sm-5">
                            <a-select show-search placeholder="tình trạng" style="width: 100%" :options="status_user"
                                :filter-option="filterOption" allow-clear v-model:value="status_id" :class="{'select-danger': errors.status_id}"></a-select>
                                <div class="w-100"></div>
                                <small v-if="errors.status_id" class="text-danger">{{ errors.status_id[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Tên tài khoản:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Tên tài khoản" allow-clear v-model:value="username" :class="{'input-danger': errors.username}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.username" class="text-danger">{{ errors.username[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Họ và tên:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Họ và tên" allow-clear v-model:value="name" :class="{'input-danger': errors.name}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.name" class="text-danger">{{ errors.name[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Email:</label>
                        <div class="col-12 col-sm-5">
                            <a-input placeholder="Email" allow-clear v-model:value="email" :class="{'input-danger': errors.email}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-12 col-sm-2 text-start text-sm-end">Phòng ban:</label>
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
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Mật khẩu:</label>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="mật khẩu" allow-clear v-model:value="password" :class="{'input-danger': errors.password}"/>
                            <div class="w-100"></div>
                            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="" class="col-12 col-sm-2 text-start text-sm-end">Xác nhận mật khẩu:</label>
                        <div class="col-12 col-sm-5">
                            <a-input-password placeholder="Xác nhận mật khẩu" allow-clear v-model:value="password_confirmation"/>
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
import { message } from 'ant-design-vue';
import { useMenu } from "../../../stores/use-menu.js"
import axios from 'axios';
export default defineComponent({
    setup() {
        const store = useMenu();
        store.onSelectedKeys(["admin-users"]);
        const router = useRouter();
        const previewImage = ref(null);
        const department = ref([]);
        const formData = ref([]);
        const errors = ref({});
        const status_user = ref([]);
        const users = reactive({
            username : "",
            name : "",
            email  : "",
            password : "",
            password_confirmation : "",
            department_id :[],
            status_id : [],
            avatar : ""
        });
        const getUsersCreate = () => {
            axios.get('http://localhost:8000/api/users/create')
            .then((response) => {
                status_user.value = response.data.status;
                department.value = response.data.department;
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getUsersCreate();
        const createUser = () => {
            axios.post('http://localhost:8000/api/users/store',users)
            .then((response) => {
                console.log(response);
                if(response.status == 200) {
                    message.success('Tạo mới thành công');
                    router.push({name : "admin-users"})
                }
            })
            .catch((error) => {
                errors.value = error.response.data.errors;
            })
        }
        const chooseFiles = () => {
            document.getElementById("fileUpload").click()
        }
        const changeImage = (e) => {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e =>{
                previewImage.value = e.target.result;
            };        
        }
        const filterOption = (input, option) => {
            return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        };
        return {
            status_user,
            department,
            errors,
            previewImage,
            ...toRefs(users),
            filterOption,
            chooseFiles,
            changeImage,
            createUser
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