import { useState } from 'react';
import { useCallback } from 'react';
import './Menus.css';
import './gg-menu-menuspage.css'


function Menus(){

const [islunchActive, setlunchIsActive] = useState(false);
const [isdinnerActive, setIsdinnerActive] = useState(false);
const [isdessertActive, setIsdessertActive] = useState(false);
const [iswineActive, setIswineActive] = useState(false);
const accordianIcon = islunchActive ? "gg-math-minus": "gg-math-plus";
const accordianIcon_dinner = isdinnerActive ? "gg-math-minus": "gg-math-plus";
const accordianIcon_dessert = isdessertActive ? "gg-math-minus": "gg-math-plus";
const accordianIcon_wine = iswineActive ? "gg-math-minus": "gg-math-plus";
    return(
     <div className="restaurant-menu">  
         <button className='accordian-button' onClick={()=> setlunchIsActive(!islunchActive)}
         aria-label={islunchActive ? "Open Lunch-Menu" : "Close Lunch-Menu"}><span className='button-text'>Lunch</span> 
         <span className= {accordianIcon}/>
         </button>
             <ul id="lunch-menu-list">
                {islunchActive &&
             <ul className="lunch-menu-items" >
                 <ul className="lunch-menu-starter">Starters
                <li className="lunch-menu-item">Bruschetta.....$15</li>
                 <li className="lunch-menu-item">Caprese.....$20</li>
                 <li className="lunch-menu-item">Clams And Mussels...$10</li>
                <li className="lunch-menu-item">Fried Calamari...$10</li>  
                 </ul>
                 <ul className="lunch-menu-salads">Salads
                 <li className="lunch-menu-item">Mista Salad....$15</li>
                 <li className="lunch-menu-item">Caesar Salad....$30</li>
                 <li className="lunch-menu-item">Arugula Salad....$25</li>
                 </ul>
                 <ul className="lunch-menu-pasta">Pastas
                 <li className="lunch-menu-item">Ravioli Gorgonzola....$30</li>
                 <li className="lunch-menu-item">Fettuccini White Sauce....$25</li>
                 <li className="lunch-menu-item">Penne With Chicken.....$35</li>
                 <li className="lunch-menu-item">Gnochi Pesto.....$35</li>
                 </ul>
             </ul> 
               } 

              </ul>


         <button className='accordian-button1' onClick={()=> setIsdinnerActive(!isdinnerActive)}
         aria-label={islunchActive ? "Open Dinner-Menu" : "Close Dinner-Menu"}><span className='button-text'>Dinner</span>
         <span className= {accordianIcon_dinner}/></button>
             <ul id="lunch-menu-list1">
                {isdinnerActive &&
             <ul className="lunch-menu-items1" >
                 <ul className="lunch-menu-starter">Starters
                <li className="lunch-menu-item">Bruschetta.....$15</li>
                 <li className="lunch-menu-item">Clams And Mussels...$10</li>
                 <li className="lunch-menu-item">Caprese.....$20</li>
                <li className="lunch-menu-item">Fried Calamari...$10</li>  
                 </ul>
                 <ul className="lunch-menu-salads">Salads
                 <li className="lunch-menu-item">Mista Salad....$15</li>
                 <li className="lunch-menu-item">Caesar Salad....$30</li>
                 <li className="lunch-menu-item">Arugula Salad....$25</li>
                 </ul>
                 <ul className="lunch-menu-pasta">Pastas
                 <li className="lunch-menu-item">Linguini Seafood....$25</li>
                 <li className="lunch-menu-item">Pear & Gorgonzola Borsettini....$40</li>
                 <li className="lunch-menu-item">Cappellini Pomodoro....$40</li>
                 <li className="lunch-menu-item">Gnochi Pesto.....$35</li>
                 </ul>
             </ul> 

               } 
               </ul>


        <button className='accordian-button2' onClick={()=> setIsdessertActive(!isdessertActive)}
         aria-label={isdessertActive ? "Open Dessert-Menu" : "Close Dessert-Menu"}><span className='button-text'>Desserts</span>
         <span className= {accordianIcon_dessert}/></button>
             <ul id="lunch-menu-list1">
                {isdessertActive &&
             <ul className="lunch-menu-items1" >
                 <ul className="dessert-menu-starter">
                <li className="lunch-menu-item">Classic Chocolate Tiramisu....$20</li>
                <li className="lunch-menu-item">Bread Pudding....$12</li>
                <li className="lunch-menu-item">Chocolate Cake....$13</li>
                <li className="lunch-menu-item">Gelato....$10</li>  
                <li className="lunch-menu-item">Mango Costa....$15</li>
                <li className="lunch-menu-item">Choco Lava Cake....$10</li>
                 </ul>
                 
             </ul> 

               } 
               </ul>


        <button className='accordian-button3' onClick={()=> setIswineActive(!iswineActive)}
         aria-label={iswineActive ? "Open Wine-Menu" : "Close Wine-Menu"}><span className='button-text'>Cocktails</span>
         <span className= {accordianIcon_wine}/></button>
             <ul id="lunch-menu-list1">
                {iswineActive &&
             <ul className="lunch-menu-items" >
                 <ul className="lunch-menu-starter">Sparkling
                <li className="lunch-menu-item">Lamberti Rose Strumante....$50</li>
                 <li className="lunch-menu-item">Domaine Chandon.....$40</li> 
                 </ul>
                 <ul className="lunch-menu-salads">White
                 <li className="lunch-menu-item">Chardonnay, Canyon Road...$48</li>
                 <li className="lunch-menu-item">Rose, Malene Central Coast....$50</li>
                 <li className="lunch-menu-item">Pinot Grigio, Torre Di Luna....$50</li>
                 </ul>
                 <ul className="lunch-menu-pasta">Red
                 <li className="lunch-menu-item">Camigliano Rossa Di Montalcino....$52</li>
                 <li className="lunch-menu-item">Cabernet Sauvignon, Cline....$56</li>
                 <li className="lunch-menu-item">Merlot, Cline....$42</li>
                 <li className="lunch-menu-item">Domaine Chandon.....$50</li>
                 </ul>
             </ul> 

               } 
               </ul>
                 
     </div> 


    );
}
 







export default Menus;