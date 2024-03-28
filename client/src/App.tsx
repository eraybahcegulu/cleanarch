import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;