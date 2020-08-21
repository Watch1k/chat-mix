import Axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import { ENDPOINT } from '../server/socket'
import { API_URL_CONFIG } from '../constants/urls'

export class MongoAPI {
  static AXIOS_INSTANCE: AxiosInstance = Axios.create({
    baseURL: ENDPOINT,
  })

  static request(options: AxiosRequestConfig): AxiosPromise {
    return MongoAPI.AXIOS_INSTANCE.request({ ...options })
  }

  static signup(data: { name: string, password: string }): Promise<any> {
    return MongoAPI.request({
      url: API_URL_CONFIG.mongo.signup,
      method: 'POST',
      data,
    })
  }

  static login(data: { name: string, password: string }): Promise<any> {
    return MongoAPI.request({
      url: API_URL_CONFIG.mongo.login,
      method: 'POST',
      data,
    })
  }
}
