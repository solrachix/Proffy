import { Request, Response, NextFunction } from 'express'
import db from './../database/connection'
import { verifyToken } from '../models/user'

require('dotenv').config()

export default async function (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).send({ error: 'No token provided' })

  const [scheme, token] = String(authHeader).split(' ')

  const decoded = await verifyToken(token)
  const user = await db('users').select('*').where('id', '=', decoded?.id || '').first()

  if (!user && !decoded) return res.status(401).send({ error: 'Token invalid' })

  req.headers.userId = String(decoded?.id)

  return next()
};
