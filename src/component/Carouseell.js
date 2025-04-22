import React from 'react'

function Carouseell() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
      <img src='https://www.shutterstock.com/image-photo/turin-italy-02-february-2019-600nw-1302982387.jpg'/>
      </div>
      <div className="carousel-item">
      <img src='https://www.arabtimesonline.com/uploads/imported_images/2024/02/Soccer_PSG_Mbappe__16648-64703-1708017678-scaled.jpg'/>
      </div>
      <div className="carousel-item">
      <img src='https://img.20mn.fr/gxHpwTIYQl64wnok71oeyg/1444x920_iker-casillas-lors-match-coupe-roi-contre-valence-15-janvier-2013-a-madrid'/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}

export default Carouseell
