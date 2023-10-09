


import "./global.css"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeerror } from "./redux/reducer/galleryReducer";
import { asyncAddImages } from "./redux/actions/galleryAction";


const page = () => {
  const { images, errors } = useSelector((state) => state.galleryReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncAddImages());
}, []);
if (errors) {
  alert(errors);
  dispatch(removeerror());
}
console.log(images);
return (
  
   <section>
      <h1 className="heading"> Gallery</h1>
     <div className='card card1'>
     
    {images.length !== 0
                  ? images.map((p) => 
                
                                   <div className='card-list' key={p.id}>
                  <div className='poster-img'><img src={p.download_url} alt="" /></div>
                <div className='content'>
                  <h1>{p.author}</h1>
                
                 </div>
                  
              </div>
            
        
                     )
                   : "Loading..."}
              

       
    </div>
 
   </section>
  
  );
};
export default page;