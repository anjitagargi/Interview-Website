import React from 'react'
import './Contributor.css'
import Contricard from './../Contricard/Contricard';
import profile from '../../assets/pic.jpg'
const Contributor = () => {
  return (
    <div className="contributor">
      <div className="contributor_title">
        <h2>Contributors</h2>
        <div className='line'></div>

      </div>
      <div className="contributor_down">
        <Contricard name="yash sharma" desc = "Software developer" img={profile} height={10} width={10} />
        <Contricard name="yash sharma" desc = "Software developer"img={profile} height={10} width={10} />
        <Contricard name="yash sharma" desc = "Software developer"img={profile} height={10} width={10} />
      </div>
    </div>
  )
}

export default Contributor;