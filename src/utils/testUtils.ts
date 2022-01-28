import { createServer } from 'miragejs'
import { URLS } from '@constants/urls'
import { setAccessTokenToAsyncStorage } from './asyncStorageUtils'
import { ITEMS } from '@src/assets/data/items'


declare global {
  interface Window {
    server: any;
  }
}

export const setupServer = () => {
  if (window.server) {
    window.server.shutdown()
  }

  window.server = createServer({
    routes() {
      this.get(URLS.unboxing_api, () => {
        return {
          text: 'hello world!'
        }
      })

      this.get(URLS.unboxing_api + 'item', () => {
        return ITEMS
      })
    }
  })
}

export const login = () => {
  setAccessTokenToAsyncStorage('access token')
}