import { create } from 'apisauce'

const api = create({
    baseURL: 'https://admin.blueteam.xyz',
    headers: { Accept: 'application/json' },
  })
  export { api as default }
  