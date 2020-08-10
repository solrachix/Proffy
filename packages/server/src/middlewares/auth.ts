import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

require('dotenv').config()

export default async function (req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).send({ error: 'No token provided' })

  const [scheme, token] = String(authHeader).split(' ')

  // const decoded = await promisify(jwt.verify)(token, "secret");
  const decoded = await jwt.verify(token, process.env.JWTSecretKey || '')
  if (!decoded) return res.status(401).send({ error: 'Token invalid' })

  req.headers.userId = decoded.id

  return next()
};
