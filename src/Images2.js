import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Image2() {
    const [items,setitems]=useState([])
    const [pagenumber,setpagenumber]=useState(1)
    const getdata=()=>{
        fetch(`https://dummyjson.com/products?limit=96`)
            .then(response => response.json())
            .then(json => setitems(json.products))

            console.log(items)
      };
      useEffect(()=>{
        getdata();
      },[]);
  return (
    <div>
          <div className='container'> //bootstrap here (internet required to run this app)
            <div className='row row-cols-4'>
        {
            items.map((item)=>{
                return( 
                    <div className='col border border-secondary-subtle'>
                <img src={item.images[0]} alt={item.title} className='img-fluid'/>
                </div>
                )
            })
        }
        </div>

</div>    
</div>
  )
}
