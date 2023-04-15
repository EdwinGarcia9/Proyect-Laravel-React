import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShowUsers from './components/ShowUsers';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import CreateRoom from './components/CreateRooms';
import EditRoom from './components/EditRoom';
import ShowRoom from './components/ShowRooms';
import CreateService from './components/CreateService';
import EditService from './components/EditService';
import ShowServices from './components/ShowServices';
import ShowReservations from './components/ShowReservations';
import EditReservation from './components/EditReservations';
import CreateReservation from './components/CreateReservation';
import NavigationIcons from './components/NavigationIcons';
import { FaUsers, FaBed, FaWrench, FaCalendar } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <NavigationIcons 
          items={[
            { icon: <FaUsers />, to: '/showUsers' },
            { icon: <FaBed />, to: '/showRooms' },
            { icon: <FaWrench />, to: '/ShowServices' },
            { icon: <FaCalendar />, to: '/showReservations' },
          ]}
        />
        <Routes>
          <Route path='/showUsers' element={<ShowUsers/>}/>
          <Route path='/editUser/:id' element={<EditUser/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>
          <Route path='/createRoom' element={<CreateRoom/>}/>
          <Route path='/editRoom/:id' element={<EditRoom/>}/>
          <Route path='/showRooms' element={<ShowRoom/>}/>
          <Route path='/createService' element={<CreateService/>}/>
          <Route path='/editService/:id' element={<EditService/>}/>
          <Route path='/showServices' element={<ShowServices/>}/>
          <Route path='/showReservations' element={<ShowReservations/>}/>
          <Route path='/editReservation/:id' element={<EditReservation/>}/>
          <Route path='/createReservation' element={<CreateReservation/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
