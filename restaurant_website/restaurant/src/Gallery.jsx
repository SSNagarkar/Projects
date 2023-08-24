import './Gallery.css'

function Gallery({onNav}){
    return(
     <div>
    <div class="image-gallery">
     <nav className='image-nav'>
     <a href='#image1'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwcmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Restaurant Interior"/>
     </a>
     <a href='#image2'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnQlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Restaurant exterior"/>
     </a>
     <a href='#image3'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1624001877690-922b1e243939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFRpcmFtaXN1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Famous Chocolate Tiramisu"/>
     </a>
     <a href='#image4'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1585002400872-ec6f400e56b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Food Making"/>
     </a>
     <a href='#image5'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1611783214219-8f3662a26838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Our Chefs"/>
     </a>
     <a href='#image6'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1621538997178-8acbbcd64506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGl0YWxpYW4lMjBmb29kJTIwY2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Hand tossed pizza"/> 
     </a>
     <a href='#image7'>
        <img className="image-gallery-img1" src="https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RhdXJhbnQlMjBjb2NrdGFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Freshly served mocktails"/>  
     </a>
     
     </nav>

          
          <div className='image-gallery-slides'>
               <img className='img1'  id='image1' src="https://images.unsplash.com/photo-1561912774-79769a0a0a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwcmVzdGF1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Restaurant Interior"/>
             

             <img className='img1'  id='image2' src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnQlMjBleHRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Restaurant exterior"/>

             <img className='img1'  id='image3' src="https://images.unsplash.com/photo-1624001877690-922b1e243939?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFRpcmFtaXN1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Famous Chocolate Tiramisu"/>

             <img className='img1'  id='image4' src="https://images.unsplash.com/photo-1585002400872-ec6f400e56b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGl0YWxpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Food Making"/>

             <img className='img1'  id='image5' src="https://images.unsplash.com/photo-1611783214219-8f3662a26838?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Our Chefs"/> 

             <img className="img1"  id='image6' src="https://images.unsplash.com/photo-1621538997178-8acbbcd64506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGl0YWxpYW4lMjBmb29kJTIwY2hlZnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
             alt="Hand tossed pizza"/>

             <img className="img1" id='image7' src="https://images.unsplash.com/photo-1560963689-b5682b6440f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJlc3RhdXJhbnQlMjBjb2NrdGFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
             alt="Freshly served mocktails"/> 
          </div>
          
    </div>
    </div>
    );
}

export default Gallery;