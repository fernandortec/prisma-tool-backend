import { Router } from 'express';

import usercontroller from './usercontroller';

const routes = Router();

routes.post('/users/create',usercontroller.create);

routes.get('/users/index',usercontroller.index);

routes.get('/users/index/unique',usercontroller.listone);

export default routes;