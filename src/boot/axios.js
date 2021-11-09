import { boot } from 'quasar/wrappers'
import axios from 'axios'

let jailors_url = 'https://jailors-staging.herokuapp.com/jailors/api/';

if (process.env.AWS_BRANCH == 'production-branch')
{
  jailors_url = 'https://jailors.herokuapp.com/jailors/api/'
}

const api = axios.create({ baseURL: jailors_url });

export default boot(({ app }) => {
  api.defaults.withCredentials = true;
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
