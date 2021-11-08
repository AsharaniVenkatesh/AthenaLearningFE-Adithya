import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CoursePage from './components/coursePage/CoursePage';
import ApptWelcome from './components/AppointmentModule/ApptWelcome';
import DoctorsList from './components/AppointmentModule/DoctorsList';
import Testing from './components/Tools/Testing';
import SlotAvailability from './components/AppointmentModule/SlotAvailability';

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />

          <Route path="/courses" component={Courses} />
          <Route path="/coursepage/:courseId" component={CoursePage} />
          <Route path="/apptWelcome" component={ApptWelcome}/>
          <Route path="/doctorsList" component={DoctorsList}/>
          <Route path="/testing" component={Testing}/>
          <Route path="/slotAvailability" component={SlotAvailability}/>
          <Route path="*" component={HomePage} />
        
        </Switch>
      </Router>


    </>
  );
}

export default App;
