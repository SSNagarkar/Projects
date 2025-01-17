import './Gallery.css'

function Gallery({onNav}){
    return(
     <div className='gallery'>
    <div class="image-gallery">
     <nav className='image-nav'>
     <a href='#image1'>
        <img className="image-gallery-img1" src="/image1.jpg" 
             alt="Restaurant Interior">
               
          </img>
          
         
     </a>
     <a href='#image2'>
        <img className="image-gallery-img1" src="/image2.jpg" 
             alt="Restaurant exterior"/>
     </a>
     <a href='#image3'>
        <img className="image-gallery-img1" src="/image3.jpg" 
             alt="Famous Chocolate Tiramisu"/>
     </a>
     <a href='#image4'>
        <img className="image-gallery-img1" src="/image4.jpg" 
             alt="Food Making"/>
     </a>
     <a href='#image5'>
        <img className="image-gallery-img1" src="/chefs.jpg" 
             alt="Our Chefs"/>
     </a>
     <a href='#image6'>
        <img className="image-gallery-img1" src="/pizza.jpg" 
             alt="Hand tossed pizza"/> 
     </a>
     <a href='#image7'>
        <img className="image-gallery-img1" src="/mocktail.jpg" 
             alt="Freshly served mocktails"/>  
     </a>
     
     </nav>

          
          <div className='image-gallery-slides'>
               <img className='img1'  id='image1' src="/image1.jpg" 
             alt="Restaurant Interior"/>
             

             <img className='img1'  id='image2' src="/image2.jpg"
             alt="Restaurant exterior"/>

             <img className='img1'  id='image3' src="/image3.jpg" 
             alt="Famous Chocolate Tiramisu"/>

             <img className='img1'  id='image4' src="/image4.jpg" 
             alt="Food Making"/>

             <img className='img1'  id='image5' src="/chefs.jpg" 
             alt="Our Chefs"/> 

             <img className="img1"  id='image6' src="/pizza.jpg" 
             alt="Hand tossed pizza"/>

             <img className="img1" id='image7' src="/mocktail.jpg" 
             alt="Freshly served mocktails"/> 
          </div>
          
    </div>
    </div>
    );
}

export default Gallery;