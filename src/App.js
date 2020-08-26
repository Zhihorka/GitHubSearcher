import React,{useState} from 'react';
import style from './App.css';
import MainPage from './components/MainPage/MainPage';
import NewRepositoryCard from './components/NewRepositoryCard/NewRepositoryCard';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {

  const [rerenderTrigger, setRerenderTrigger] = useState(false);

  React.useEffect(() => {
    setRerenderTrigger(false)
  }, [rerenderTrigger]);

    return (
      <div  className = {style.wrapper}>
        <BrowserRouter>    
            <Switch>
              <Route exact path  ='/' render={() => <MainPage/>}/>
              <Route  path='/repositories' render={() => <MainPage/>}/>   
              <Route  path='/repository' render={() => <NewRepositoryCard/>}/>   
            </Switch>     
        </BrowserRouter>
      </div>
    );
  }

export default App;
