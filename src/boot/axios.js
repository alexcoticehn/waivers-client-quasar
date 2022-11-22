import { boot } from 'quasar/wrappers'
import axios from 'axios'

let jailors_url = 'https://o03g45wsza.execute-api.us-east-2.amazonaws.com/prod/jailors/api';

if (process.env.APP_ENV == 'production')
{
  jailors_url = 'https://o03g45wsza.execute-api.us-east-2.amazonaws.com/prod/jailors/api'
}

const api = axios.create({ baseURL: jailors_url });

export default boot(({ app }) => {
  api.defaults.withCredentials = true;
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
