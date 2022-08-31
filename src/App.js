import logo from './logo.svg';
import './App.css';
import Events from './components/Events/Events';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/Form/Form';
// import EventList from './components/EventList/EventList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Events />}></Route>
            <Route path='/home' element={<Events></Events>}></Route>
            {/* <Route path='/my_events' element={<EventList></EventList>}></Route> */}
            <Route path='/create_events' element={<Form></Form>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
