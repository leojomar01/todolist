import Header from './components/header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DisplayAssignment from './components/DisplayAssignment';

function App() {
  return (
    <Router >
      
        <Header />

        <Routes>
            <Route path="/" element={<DisplayAssignment />} />
            


        </Routes>

        
    </Router>
  );
}

export default App;
