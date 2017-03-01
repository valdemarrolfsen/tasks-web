// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/coreLayout'
import Home from './home'
import Login from './login'
import Tasks from './tasks';

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Login(store),
    Tasks(store)
  ]
});

export default createRoutes