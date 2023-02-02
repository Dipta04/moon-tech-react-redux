import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
           <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
