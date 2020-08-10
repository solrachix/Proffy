import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

require('dotenv').config()

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
