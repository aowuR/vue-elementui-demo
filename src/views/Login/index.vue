<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{'current':tabName=='login'}" @click="tabClick('login')">Login</li>
                <li :class="{'current':tabName=='reset'}" @click="tabClick('reset')">Reset</li>
            </ul>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                size="medium"
                class="login-form"
            >
                <el-form-item prop="email" class="item-form">
                    <label>邮箱</label>
                    <el-input type="txt" v-model="ruleForm.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="pass" class="item-form">
                    <label>密码</label>
                    <el-input
                        v-model="ruleForm.pass"
                        autocomplete="off"
                        minlength="6"
                        maxlength="25"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-form" v-if="tabName=='reset'">
                    <label>再次输入密码</label>
                    <el-input
                        show-password
                        v-model="ruleForm.password"
                        autocomplete="off"
                        minlength="6"
                        maxlength="25"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-form">
                    <label>验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item class="btn-login">
                    <el-button type="danger" @click="submitForm('ruleForm')" class="block">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang=js>
export default {
    data() {
        
        

         var validateEmail = (rule, value, callback) => {
            let emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (value === "") {
                callback(new Error("请输入邮箱"));
            } else if(!emailReg.test(value)){
                
                callback(new Error("邮箱地址输入有误"));
            } else{
                callback()
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                
                callback();
            }
        };
        var validatePassword = (rule, value, callback) => {
            console.log(this.ruleForm.pass)
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if(this.ruleForm.pass != value){
                
                callback(new Error("两次输入密码不一致"));
            } else {
                callback()
            }
        };
        var validateCode = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入验证码"));
            } else {
                
                callback();
            }
        };
       

        return {
            tabName: "login",
            ruleForm: {
                email: "",
                pass: "",
                password:"",
                code: ""
            },
            rules: {
                email: [{ validator: validateEmail, trigger: "blur" }],
                pass: [{ validator: validatePass, trigger: "blur" }],
                password: [{ validator: validatePassword, trigger: "blur" }],
                code: [{ validator: validateCode, trigger: "blur" }]
            }
        };
    },
    methods: {
        tabClick(txt) {
            this.tabName = txt;
            this.$refs["ruleForm"].resetFields(); //重置表单
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
       
    }
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
.login-form {
    margin-top: 30px;
    label {
        display: block;
        font-size: 14px;
        color: #fff;
        margin-bottom: 3px;
    }
    .item-form {
        margin-bottom: 3px;
    }
    .btn-login {
        margin-top: 20px;
    }
}
.block {
    display: block;
    width: 100%;
}
</style>