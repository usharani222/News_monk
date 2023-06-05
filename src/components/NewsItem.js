import React, { Component } from 'react'

export default class NewsItem extends Component {
  
  render() {
    let {title,description,imageurl,newsurl}=this.props;
    return (
      <div className='contanier my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageurl?"https://i.guim.co.uk/img/media/944fd20c6c2c119b64ed91ef8aaf2a870afa7567/0_0_5360_3217/master/5360.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a2b32b804ec4172d51ab64a47e21829a":imageurl}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}  </p>
            <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
