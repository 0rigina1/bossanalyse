<!--<template>-->
<!--    <div class="dashboard">-->
<!--        <t-button @click="getJobsHandle">发送</t-button>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--import {getJobs} from "@/api/dashboard"-->
<!--export default {-->
<!--    name: "Dashboard",-->
<!--    methods: {-->
<!--        getJobsHandle() {-->
<!--            getJobs().then(data => {-->
<!--                console.log(data)-->
<!--            })-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
    <div class="dashboard">
        <t-layout>
            <t-header>
                <t-head-menu theme="light" value="overview" height="120px">
                    <img
                        slot="logo"
                        width="136"
                        class="logo"
                        src="https://www.tencent.com/img/index/menu_logo_hover.png"
                        alt="logo"
                    />
                    <t-menu-item value="overview">数据概览</t-menu-item>
                    <t-menu-item value="post">岗位分析</t-menu-item>
                    <t-menu-item value="industry">行业分析</t-menu-item>
                    <t-menu-item value="education">学历分析</t-menu-item>
                    <t-menu-item value="salary">薪资分析</t-menu-item>
                    <t-menu-item value="skill">技能要求</t-menu-item>
                    <template #operations>
                        <a href="javascript:;"><icon class="t-menu__operations-icon" name="search" /></a>
                        <a href="javascript:;"><icon class="t-menu__operations-icon" name="notification-filled" /></a>
                        <a href="javascript:;"><icon class="t-menu__operations-icon" name="home" /></a>
                    </template>
                </t-head-menu>
            </t-header>
            <t-content>
                <div v-if="currentTab === 'overview'">
                    <!-- 数据概览的代码 -->
                </div>
                <div v-if="currentTab === 'post'">
                    <!-- 岗位分析的代码 -->
                </div>
                <div v-if="currentTab === 'industry'">
                    <!-- 行业分析的代码 -->
                </div>
                <div v-if="currentTab === 'education'">
                    <!-- 学历分析的代码 -->
                </div>
                <div v-if="currentTab === 'salary'">
                    <!-- 薪资分析的代码 -->
                </div>
                <div v-if="currentTab === 'skill'">
                    <!-- 技能要求的代码 -->
                </div>
            </t-content>
            <t-footer>
                © 2023 Company Name. All rights reserved.
            </t-footer>
        </t-layout>
    </div>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';
import { getJobs } from '@/api/dashboard';

export default {
    name: 'Dashboard',
    components: {
        Icon,
    },
    data() {
        return {
            currentTab: 'overview',
            jobList: [],
        };
    },
    methods: {
        getJobsHandle() {
            getJobs().then((data) => {
                this.jobList = data;
            });
        },
    },
    created() {
        console.log(1111111111111111111111111111)
        this.getJobsHandle();
    },
};
</script>
<style scoped>
.dashboard {
    height: 100%;
    .t-layout {
        height: 100%;
    }
    .logo {
        height: 30px;
        margin: 30px;
    }
}
</style>

