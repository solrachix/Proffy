import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

require('dotenv').config()

interface VerifyResponse {
  id:number;
  iat: number;
  exp: number;
}

export function compareHash (hash: string, password: string) {
  return bcrypt.compare(password, hash)
}

export async function generateHash (password: string) {
  return await bcrypt.hash(password, 8)
}

export function generateToken (id: number) {
  return jwt.sign({ id }, process.env.JWTSecretKey || '', {
    expiresIn: 86400
  })
}

export async function verifyToken (token: string): Promise<VerifyResponse | undefined> {
  try {
    return jwt.verify(token, process.env.JWTSecretKey || '') as VerifyResponse
  } catch (error) {
    return undefined
  }
}
