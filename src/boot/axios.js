import { boot } from 'quasar/wrappers'
import axios from 'axios'

let jailors_url = `https://jailors-staging.herokuapp.com/jailors/api/${process.env.BASE_URL}/${process.env.BUILD_ENV}/${process.env.NODE_ENV}/`;

if (process.env.VUE_APP_BUILD_ENV == 'production')
{
  jailors_url = `https://jailors.herokuapp.com/jailors/api/${process.env.VUE_APP_BUILD_ENV}/${process.env.BUILD_ENV}/${process.env.NODE_ENV}`;
}

const api = axios.create({ baseURL: jailors_url });

export default boot(({ app }) => {
  api.defaults.withCredentials = true;
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
