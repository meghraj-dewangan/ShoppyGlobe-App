
import './App.css'
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './Components/Header';
import Footer from './Components/Footer';
import appStore from './Components/Utils/AppStore';







function App() {
  
  return (
    <Provider store = {appStore}>
      <Header/>
      <Outlet/>
      <Footer/>
    
    </Provider>
  )
}

export default App;
