<template>
    <div id="login">
        <div id="box">
            <div class="form">
                <div>
                    <div class="flex_lr">
                        <p class="font w_70">账户:</p>
                        <el-input placeholder="请输入账户" v-model="name" clearable></el-input>
                    </div>
                    <div class="flex_lr" style="margin-top:20px">
                        <p class="font w_70">密码:</p>
                        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                    </div>
                </div>
                <div class="login_btn flex_left">
                    <div>
                        <el-button type="primary" round>Login</el-button>
                    </div>
                    <div>
                        <el-button type="info" round>Reset</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password: ""
        };
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
    #box {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .form {
            width: 300px;
            .login_btn {
                margin-top: 30px;
                padding: 20px;
            }
        }
    }
}
</style>