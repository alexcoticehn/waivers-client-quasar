import { boot } from 'quasar/wrappers'
import axios from 'axios'

let jailors_url = 'http://jailorsstagingserver-env.eba-qyctp9dj.us-east-2.elasticbeanstalk.com/';

if (process.env.APP_ENV == 'production')
{
  jailors_url = 'http://jailorsserver-env.eba-eqwj2iy4.us-east-2.elasticbeanstalk.com/jailors/api'
}

const api = axios.create({ baseURL: jailors_url });

export default boot(({ app }) => {
  api.defaults.withCredentials = true;
  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
