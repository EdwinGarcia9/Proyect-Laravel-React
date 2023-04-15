import { Link } from 'react-router-dom';
import { House, Person, Calendar, Building } from 'react-bootstrap-icons';

function NavigationIcons() {
  return (
    <div className="d-flex justify-content-around p-2 bg-light">
      <Link to="/ShowServices" style={{ textDecoration: 'none' }}>
        <House size={32} />
        <p>Services</p>
      </Link>
      <Link to="/showUsers" style={{ textDecoration: 'none' }}>
        <Person size={32} />
        <p>Users</p>
      </Link>
      <Link to="/showReservations" style={{ textDecoration: 'none' }}>
        <Calendar size={32} />
        <p >Reservations</p>
      </Link>
      <Link to="/showRooms" style={{ textDecoration: 'none' }}>
        <Building size={32} />
        <p >Rooms</p>
      </Link>
    </div>
  );
}

export default NavigationIcons;