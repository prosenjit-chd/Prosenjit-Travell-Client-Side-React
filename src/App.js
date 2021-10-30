import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import TourRegestration from './components/TourRegestration/TourRegestration';
import Footer from './components/Footer/Footer';
import Tour from './components/Tour/Tour';
import MyTour from './components/MyTour/MyTour';
import AddMore from './components/AddMore/AddMore';
import AllTours from './components/AllTours/AllTours';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signin">
              <SignIn> </SignIn>
            </Route>
            <Route path="/tour">
              <Tour> </Tour>
            </Route>

            <PrivateRoute path="/mytour">
              <MyTour> </MyTour>
            </PrivateRoute>
            <PrivateRoute path="/addmore">
              <AddMore> </AddMore>
            </PrivateRoute>
            <PrivateRoute path="/alltours">
              <AllTours> </AllTours>
            </PrivateRoute>
            <PrivateRoute path="/tourregistration/:id">
              <TourRegestration> </TourRegestration>
            </PrivateRoute>

            <Route path="*">
              <NotFound> </NotFound>
            </Route>
          </Switch>

          <Footer> </Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
