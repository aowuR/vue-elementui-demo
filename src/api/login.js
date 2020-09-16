import server from "../utils/request";

/**
 * 登录验证码
 */

export function getSms(data) {
    server.request({
        method: 'post',
        url: '/getSms/',
        data: {
            username: data.username
        }
    })
}