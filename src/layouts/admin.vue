<template>
    <Header/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered style="width:100%">
                    <template #header>
                        <div>BẢNG ĐIỀU KHIỂN</div>
                    </template>
                    <Menu/>
                </a-list>
            </div>
            <div class="col-12 col-sm-9">
                <!-- render route con -->
                <router-view></router-view> 
            </div>
        </div>
    </div>
    
</template>
<script>
import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";

export default {
    components : {
        Header,
        Menu
    }
}
</script>