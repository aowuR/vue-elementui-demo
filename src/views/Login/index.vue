<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{'current':tabName=='login'}" @click="tabClick('login')">Login</li>
                <li :class="{'current':tabName=='reset'}" @click="tabClick('reset')">Reset</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            password: "",
            tabName: "login"
        };
    },
    methods: {
        tabClick(txt) {
            this.tabName = txt;
        }
    }
};
</script>

<style lang="scss" scoped>
#login {
    height: 100vh;
    background-color: #344a5f;
}
.login-wrap {
    width: 330px;
    margin: 0 auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current {
        background-color: rgba(0, 0, 0, 0.1);
    }
}
</style>