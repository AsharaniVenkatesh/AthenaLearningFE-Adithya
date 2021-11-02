import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CoursePage from './components/coursePage/CoursePage';


function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />

          <Route path="/courses" component={Courses} />
          <Route path="/coursepage/:courseId" component={CoursePage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </Router>


    </>
  );
}

export default App;
