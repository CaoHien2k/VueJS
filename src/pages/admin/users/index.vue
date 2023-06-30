<template>
     <a-card title="Tài khoản" style="width: 100%">
      <div class="row mb-3">
        <div class="col-12 d-flex justify-content-end">
          <a-button type="primary">
            <router-link :to="{ name: 'admin-users-create' }">
              <i class="fa-solid fa-plus"></i>
            </router-link>
          </a-button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <a-table :dataSource="users" :columns="columns" :scroll="{ x: 576 }">
            <template #bodyCell="{ column, index, record }">
              <template v-if="column.key === 'index'">
                <span>{{index + 1}}</span>
              </template>
              <template v-if="column.key === 'status'">
                <a-tag v-if="record.status_id == 1" color="#87d068">{{ record.status.name }}</a-tag>
                <a-tag v-else-if="record.status_id == 2" color="#f50">{{ record.status.name }}</a-tag>
              </template>
              <template v-if="column.key === 'action'">
                <router-link :to="{name : 'admin-users-edit',params : {id : record.id}}">
                  <a-button type="primary" class="me-1">
                  <i class="fa-solid fa-pen-to-square"></i>
                </a-button>
                </router-link>
                <a-popconfirm
                  title="Are you sure delete this user?"
                  ok-text="Yes"
                  cancel-text="No"
                  @confirm="deleteUser(record.id)"
                  @cancel="cancel"
                >
                    <a-button type="danger" html-type="submit">
                      <i class="fa-solid fa-trash"></i>
                  </a-button>
                </a-popconfirm>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </a-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMenu } from "../../../stores/use-menu.js"
import { message } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const store = useMenu();
    store.onSelectedKeys(["admin-users"]);

    const users = ref([]);
    const columns = [
      {
        title: '#',
        key: 'index',
      },
      {
        title: 'Ảnh',
        dataIndex: 'avatar',
        key: 'avatar',
      },
      {
        title: 'Tên tài khoản',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Phòng ban',
        dataIndex: 'department_id',
        key: 'department',
      },
      {
        title: 'Trạng thái',
        dataIndex: 'status_id',
        key: 'status',
      },
      {
        title: 'Công cụ',
        key: 'action',
        fixed: 'right',
      },
    ]
    const getUser = () => {
      axios.get('http://127.0.0.1:8000/api/users')
        .then(function (response) {
          users.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    };
    const cancel = e => {
      message.error('Click on No');
    };
    const deleteUser = (id) => {
      axios.post(`http://127.0.0.1:8000/api/users/${id}/delete`)
        .then(function (response) {
          message.success('xóa thành công')
          getUser()
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    getUser();
    return {
      users,
      columns,
      cancel,
      deleteUser
    }
  },
});
</script>