import logo from './logo.svg';
import './App.css';
import Postlist from './postlist';
import Addpost from './addpost';
import Editpost from './editpost';
import{BrowserRouter,Route}from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
     <h1 style={{backgroundcolor:'black',color:'white',padding:'10px'}}>MERN CRUD APPLICATION</h1>
     <BrowserRouter>
     <Route path='/' component={Postlist} exact/>
     <Route path='/addpost' component={Addpost} exact/>
     <Route path='/editpost' component={Editpost} exact/>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
