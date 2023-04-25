<template>
    <div class="dashboard">
        <t-button @click="getJobsHandle">发送</t-button>
    </div>
</template>

<script>

import {getJobs} from "@/api/dashboard"
export default {
    name: "Dashboard",
    methods: {
        getJobsHandle() {
            getJobs().then(data => {
                console.log(data)
            })
        }
    }
}
</script>

<style scoped>

</style>