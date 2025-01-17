import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import './App.css';
import { useState } from "react";

function App(){
    const [page, setPage] = useState('Home');
    const [theme, setTheme] = useState('light');


 
  
    function onNav(event){
      const target = event.target.dataset.target;
      if(target){
        console.log('click',target);
        event.preventDefault();
        setPage(target);
      }
    }
    
    function toggleTheme(){
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);

    }

    return (
      <div className={`app ${theme}`}>
          <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
          <Main onNav={onNav} page={page}/>
          <Footer/> 
      </div>
  ); 
  }

export default App;