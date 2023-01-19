import React from 'react';
import Header from '../../Subcomponent/Header/Header';
import Sidebar from '../../Subcomponent/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='Main-Container'>

      <div>

        <Header />

      </div>

      <div className="SM-div">


        <div>


          <Sidebar />

        </div>

        <div class="Middle-content">

        </div>

      </div>

    </div>
  )
}

export default Home;