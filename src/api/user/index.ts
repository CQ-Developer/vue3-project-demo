import request from '@/utils/request'
import { API } from './type'
import type { Login, UserResponse, Token, User } from './type'

export const reqLogin = (data: Login) =>
  request.post<any, UserResponse<Token>>(API.LOGIN_URL, data)

export const reqUserInfo = () =>
  request.get<UserResponse<User>>(API.USERINFO_URL)
