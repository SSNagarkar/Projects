
const button = document.querySelectorAll('.accordian-button');
const i = 0;

function ToggleMenu(e){
    e.stopPropagation(); 
    if(this.classList.contains('active')){
        this.classList.remove('active');
    }
    else if(this.parentElement.parentElement.classList.contains('active')){
        this.classList.add('active');
    }
    else{
        for(i=0; i < button.length; i++){
          button[i].classList.remove('active');
        }
            this.classList.add('active');
        }
}
for(i = 0; i < button.length; i++ ){
    button[i].addEventListener('click', ToggleMenu);
}


    


export default ToggleMenu;