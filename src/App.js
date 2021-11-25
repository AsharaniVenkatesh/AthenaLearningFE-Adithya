import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CoursePage from './components/coursePage/CoursePage';
import ShowDoctorsList from './components/AppointmentModule/ShowDoctorsList';

import SlotAvailability from './components/AppointmentModule/SlotAvailability';
import ShowCalender from './components/AppointmentModule/ShowCalender';
import Testing1 from './components/TestingComp/Testing1';
import Testing2 from './components/TestingComp/Testing2';
import Doctor from './components/TestingComp/Doctor';
import ApptHome from './components/AppointmentModule/ApptHome';
import FetchCompanies from './components/AppointmentModule/FetchCompanies';
import TestList from './components/AppointmentModule/TestList';
import TestingList from './components/AppointmentModule/TestingList';
import ListTst from './components/AppointmentModule/ListTst';
import Cookies from 'js-cookie';
import AvailableDoctors from './components/AppointmentModule/AvailableDoctors';
import ShowLocations from './components/AppointmentModule/ShowLocations';

function App() {

  const[patientname,setpatientname]=useState("");
  const[cmpId,setcmpId]=useState("");
  const[empId,setempId]=useState("");
const[locaId,setlocaId] = useState("");
const[selDate,setDate] = useState("");

  return (
    <>
      <Router>

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />
          <Route path="/courses" component={Courses} />
          <Route path="/coursepage/:courseId" component={CoursePage} />
          
          <Route path="/showDoctorsList" component={ShowDoctorsList}/>
          <Route path="/testing1" component={Testing1}/>
          <Route path="/tst2" component={Testing2}/>
          <Route path="/doctor" component={Doctor}/>
          <ProtectedRoute path="/apptHome" component={props =><ApptHome setcmpId={setcmpId}/>} isAuth={Cookies.get("user")}/>
          <Route path="/fetchCmp" component={FetchCompanies}/>
          <Route path="/testList" component={TestList}/>
          <ProtectedRoute path="/list" component={props => <TestingList  setpatientname={setpatientname} patientname={patientname}/>} isAuth={Cookies.get("user")}/>
          <ProtectedRoute path="/showCalender" component={props => <ShowCalender setDate={setDate} />} isAuth={Cookies.get("user")}/>
          <ProtectedRoute path="/abcLis"  component={props => <ListTst cmpId={cmpId}  patientname={patientname}/>} isAuth={Cookies.get("user")}/>
          <ProtectedRoute path="/availableDoctors" component={props => <AvailableDoctors locaId={locaId} setcmpId={setcmpId} selDate={selDate} setempId={setempId} cmpId={cmpId} />} isAuth={Cookies.get("user")}/>
          <ProtectedRoute path="/slotAvailability" component={props => <SlotAvailability locaId={locaId} cmpId={cmpId} selDate={selDate} empId={empId}/>} isAuth={Cookies.get("user")}/>
          <ProtectedRoute path="/showLocation" component={ props => <ShowLocations setlocaId={setlocaId} cmpId={cmpId}/>} isAuth={Cookies.get("user")}/>
          <Route path="*" component={HomePage} />
        
        </Switch>
      </Router>


    </>
  );
}

export default App;
