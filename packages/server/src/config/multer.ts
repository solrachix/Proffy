import multer from 'multer'
import crypto from 'crypto'
import { extname, resolve } from 'path'

import { Request } from 'express'
export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'uploads'),
    filename: (req: Request, file, cb) => {
      const Hash = crypto.randomBytes(16).toString('hex')
      const name = file.originalname.replaceAll(' ', '-')

      const filename = `${Hash}-${name}`

      return cb(null, filename)
    }
  })
}
