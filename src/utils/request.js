import axios from 'axios';
import { message as MessageComponent } from 'ant-design-vue';

// 对axios的二次封装，统一处理错误情况
function request(options) {
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const { code, message } = error.response.data;
      MessageComponent.error(message);
      // FIXME 了解一下Promise是什么怎么用
      // 返回Promise.reject可以避免接口调用发现异常后继续执行then方法中的逻辑
      return Promise.reject(error);
    });
}

export default request;
