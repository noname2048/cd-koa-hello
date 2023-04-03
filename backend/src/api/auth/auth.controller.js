import * as Joi from 'joi'
import Account from 'models/Account'

const localRegister = async (ctx) => {
  ctx.body = 'register'
}

const localLogin = async (ctx) => {
  ctx.body = 'login'
}

const exists = async (ctx) => {
  ctx.body = 'exists';
};

// 로그아웃
const logout = async (ctx) => {
  ctx.body = 'logout';
};


export {localRegister, localLogin, exists, logout}