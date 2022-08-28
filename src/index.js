import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Header';
import Cards from './Cards';
import Data from './Data'


function Wrapper(props) {
  const cardData = Data.map(item => {
    return (
        
          <Cards
            {...item}
          />
          
        
    )

  })
  return(
    <section>
      <div className='wrapper'>
        <Header/>
        {cardData}
       
        
        
      </div>
     

    </section>

  )
}






ReactDOM.createRoot(document.getElementById('root')).render(<Wrapper/>)
 


