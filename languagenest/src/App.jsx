import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your components
import Body from './bdy';
import Team from './team';

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/student-body/:name" element={<Team />} /> 
  </Routes>
  );
};

export default App;
