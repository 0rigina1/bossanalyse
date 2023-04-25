<template>
    <div class="login" style="width: 300px">
        <t-form>
            <t-form-item name="username">
                <t-input v-model="loginForm.username" clearable placeholder="请输入用户名">
                    <desktop-icon slot="prefix-icon"></desktop-icon>
                </t-input>
            </t-form-item>

            <t-form-item name="password">
                <t-input v-model="loginForm.password" clearable placeholder="请输入密码">
                    <lock-on-icon slot="prefix-icon"></lock-on-icon>
                </t-input>
            </t-form-item>

            <t-form-item name="submit">
                <t-button theme="primary" @click="loginHandle">登录</t-button>
            </t-form-item>
        </t-form>
    </div>
</template>

<script>
import {DesktopIcon, LockOnIcon} from 'tdesign-icons-vue'
import {login} from "@/api/user"

export default {
    components: {
        DesktopIcon,
        LockOnIcon
    },
    name: "Login",
    data() {
        return {
            loginForm: {
                username: null,
                password: null
            }
        }
    },

    methods: {
        loginHandle() {
            login(this.loginForm).then(data => {
                if (data.code) {
                    this.$store.dispatch('setAuth', data.token)
                    this.$router.push({name: 'dashboard'})

                } else {
                    this.$message.error({
                        content: data.msg
                    })
                }
            })
        }
    }
}
</script>

<style scoped>

</style>