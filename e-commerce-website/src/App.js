import Home from './routes/home/home.component.jsx'
import { Routes, Route} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx';


const Shop = () => {
  return (
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element= {<Navigation/>}>
        <Route path='shop' element= {<Shop />}></Route>
      <Route index element= {<Home/>} />
      </Route>
    </Routes>
    
  );
};

export default App;
