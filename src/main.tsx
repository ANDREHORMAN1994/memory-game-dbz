import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Game from './pages/Game';
import { Provider } from './context/Provider';
import './index.css';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: '/game',
      element: <Game />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>,
);
