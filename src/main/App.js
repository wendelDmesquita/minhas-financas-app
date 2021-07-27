import React from 'react'

import Rotas from './rotas'
import Navbar from '../components/nav-bar'

class App extends React.Component{

  render(){
    return(
      <>
        <Navbar />
          <div className="container">
            <Rotas/>
          </div>
      </>
      
    );
  }
}

export default App;
