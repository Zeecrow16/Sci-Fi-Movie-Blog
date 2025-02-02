import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './styles/App.css'
import MoviesPage from './pages/MovieDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          {/* Home Page */}
          <Route path='/' element={<HomePage />} />
          {/* Move Page */}
          <Route path='/movies' element={<MoviesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
