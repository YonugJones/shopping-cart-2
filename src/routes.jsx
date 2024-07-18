import App from './App.jsx'
import Home from './Home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> }
    ]
  }
]

export default routes;