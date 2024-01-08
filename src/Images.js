import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Images() {

    let images=[
        {id:1, url:'./image/1.jpg'},
        {id:2, url:'./image/2.jpg'},
        {id:3, url:'./image/3.jpg'},
        {id:4, url:'./image/4.jpg'}
    ];

  return (
    <div>
        <div className='container'>
            <div className='row row-cols-4'>
                
                    {
                        images.map((image)=>{
                            return (
                                <div className="card col" style={{width:"18 rem"}}>
                                <img src={image.url} className="card-img-top img-fluid" alt="..."/>
                                <div className="card-body">
                                  <h5 className="card-title">Card title</h5>
                                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                              </div>
                            )
                        })
                    }
               
                

            </div>
        </div>
        
        
        </div>
  )
}
