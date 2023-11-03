import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Game from './pages/Game';
import { Provider } from './context/Provider';
import './index.css';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <h1>DEU RUIM</h1>,
  children: [
    {
      index: true,
      element: <Login />,
    },
    {
      path: 'game',
      element: <Game />,
    },
  ],
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>,
);
