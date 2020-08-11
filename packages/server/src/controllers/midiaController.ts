import { Request, Response } from 'express'

import db from '../database/connection'

interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string
};

export default class MidiaController {
  async index (request: Request, response: Response): Promise<Response<unknown>> {
    const { id } = request.params

    const midia = await db('classes')
      .where('classes.id', '=', String(id))
      .join('midia', 'classes.id', '=', 'midia.classe_id')
      .select('midia.*')

    return response.json(midia)
  }

  async create (request: Request, response: Response): Promise<Response<unknown>> {
    const { id: classe_id } = request.params
    const files = request.files as File[]
    const {
      title,
      description
    } = request.body

    console.log(classe_id)

    files.map(async file => {
      await db('midia').insert({
        classe_id,
        name: file.filename,
        title,
        description
      })
    })
    return response.status(201).send()
  }
}
