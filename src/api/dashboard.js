import request from "@/utils/request";

export function getJobs() {
    return request({
        url: '/data/jobs',
        method: 'get',
    })
}
