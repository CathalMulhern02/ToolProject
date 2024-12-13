import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ReadTool from './components/readtool';
import CreateTool from './components/createtool';
import EditTool from './components/edittool';
import Home from './components/home'; // Import your Home component

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default route */}
        <Route path="/readtool" element={<ReadTool />} />
        <Route path="/createtool" element={<CreateTool />} />
        <Route path="/edittool/:id" element={<EditTool />} />
      </Routes>
    </Router>
  );
}

export default App;
