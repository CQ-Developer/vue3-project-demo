export enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/userinfo'
}

export interface Login {
  username: string
  password: string
}

interface UserInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: Array<string>
  buttons: Array<string>
  routes: Array<string>
  token: string
}

interface Message {
  message: string
}

export interface Token {
  token: string
}

export interface User {
  checkUser: UserInfo
}

export interface UserResponse<T extends Message | Token | User> {
  code: number
  data: T
}
