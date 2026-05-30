import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/home/home.jsx';
import AddJob from './components/addjob/addjob.jsx';
import JobDetails from './components/jobdetails/jobdetails.jsx';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-job"
          element={<AddJob />}
        />

        <Route
          path="/jobs/:id"
          element={<JobDetails />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;