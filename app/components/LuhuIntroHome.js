import React from 'react'
import ContactButton from './ContactButton'

const LuhuIntroHome = () => (

  <div className="jumbotron white-bg intro-home">
    <div className="container">
      <div className="content-container">
        <p className="lead">Luhu Design helps startups and hardware companies achieve their product goals through mechanical engineering and design support. This ranges from industrial and CAD design to mechanical support for your minimal viable product (MVP) to production CAD and drawings.</p>
            <div className="divider">
              <hr/>
            </div>
            <p className="lead">Talk to us today to see how we can help solve your mechanical engineering and design challenges.</p>
            <ContactButton/>
      </div>
    </div>
  </div>
)

export default LuhuIntroHome
