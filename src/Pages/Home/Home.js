import React from 'react'

import bannerImage from '../../Assets/banner.jpg'
import CardComponent from '../../components/CardCompo/CardComponent'

const Home = () => {
  return (
    <div>
      <div>
        <img src={bannerImage} alt="" height="600"  width="100%"/>
      </div>
      <CardComponent/>
    </div>
  )
}

export default Home