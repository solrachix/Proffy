/* eslint-disable import/first */
import express from 'express'
import multer from 'multer'

const routes = express.Router()

import multerConfig from './config/multer'
const upload = multer(multerConfig)

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
 * Rota "user"/
 * default Controllers = index, show, create, update, delete
 */
import UserController from './controllers/userController'
const userController = new UserController()
routes.get('/user', userController.index)
routes.post('/user/create', userController.create)
routes.get('/user/authenticate', userController.show)

/**
 * Autenticação do Header Authorization em todas as rotas após essa!!
 */
import auth from './middlewares/auth'
routes.use(auth)

routes.post('/user/update', userController.update)

/**
 * Rota "classes"
 * default Controllers = index, show, create, update, delete
 */

import ClassesController from './controllers/classesController'
const classesController = new ClassesController()
routes.get('/classes', classesController.index)
routes.get('/classes/list', classesController.show)
routes.get('/classes/list/:id', classesController.show)
routes.post('/classes', classesController.create)
routes.post('/classes/update', classesController.update)

import MidiaController from './controllers/midiaController'
const midiaController = new MidiaController()
routes.get('/classes/:id/listMidia', midiaController.index)
routes.post(
  '/classes/:id/newMidia',
  upload.array('files', 6),
  midiaController.create
)

/**
 * Rota "classes"
 * default Controllers = index, show, create, update, delete
 */

import ConnectionsController from './controllers/connectionsController'
const connectionsController = new ConnectionsController()
routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes
