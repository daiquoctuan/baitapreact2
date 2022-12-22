import React, { Component } from 'react'

export default class ChangeGlasses extends Component {

  constructor(props) {
    super(props)
    this.state = {
      urlIng: "./imges/v1.png" ,

    }
  }
  changerglasse= (urlIng)=>{
    console.log(urlIng)
    this.setState({urlIng})
  }
  render() {
    const {urlIng}= this.state
    return (<>
    
      <div className='carusel container' >
        <div className=''>
          <img className='img-fluid h1' src='./imges/model.jpg' />
          <img className='img-fluid h2' src={urlIng} />
        </div>

      </div>
      <div className='container'>
        <div className='col-mx-2'>
          <img className='img' src='./imges/g1.jpg' onClick={()=>this.changerglasse('./imges/v1.png')}/>
          <img className='img' src='./imges/g2.jpg'onClick={()=>this.changerglasse('./imges/v2.png')} />
          <img className='img' src='./imges/g3.jpg' onClick={()=>this.changerglasse('./imges/v3.png')}/>
          <img className='img' src='./imges/g4.jpg' onClick={()=>this.changerglasse('./imges/v4.png')}/>
          <img className='img' src='./imges/g5.jpg'onClick={()=>this.changerglasse('./imges/v5.png')} />
          <img className='img' src='./imges/g6.jpg' onClick={()=>this.changerglasse('./imges/v6.png')}/>
          <img className='img' src='./imges/g7.jpg'onClick={()=>this.changerglasse('./imges/v7.png')} />
          <img className='img' src='./imges/g8.jpg' onClick={()=>this.changerglasse('./imges/v8.png')}/>
          <img className='img' src='./imges/g9.jpg' onClick={()=>this.changerglasse('./imges/v9.png')}/>


        </div>

      </div>
    </>
    )
  }
}
