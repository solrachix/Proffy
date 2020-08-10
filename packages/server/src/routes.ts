/* eslint-disable import/first */
import express from 'express'

const routes = express.Router()

/**
 * Rota /
 */
routes.get('/', (req, res) => {
  return res.json({
    app: '#2 NLW - Next Level Week',
    author: 'Carlos Miguel',
    email: 'carlos.miguel.oliveira.17@gmail.com'
  })
})

/**
 * Autenticação do Header Authorization em todas as rotas após essa!!
 */
import auth from './middlewares/auth'
routes.use(auth)

/**
 * Rota "classes"
 * default Controllers = index, show, create, update, delete
 */

import ClassesController from './controllers/classesController'
const classesController = new ClassesController()
routes.get('/classes', classesController.index)
routes.post('/classes', classesController.create)

/**
 * Rota "classes"
 * default Controllers = index, show, create, update, delete
 */

import ConnectionsController from './controllers/connectionsController'
const connectionsController = new ConnectionsController()
routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes
