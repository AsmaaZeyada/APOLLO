const liItem = document.querySelectorAll('.image-gallery li');
const imgItem = document.querySelectorAll('.image-gallery-section img');

liItem.forEach(li=>{
    li.addEventListener('click',removeactive);
    li.addEventListener('click',filterImg)
})
function removeactive(){
    liItem.forEach(li=>{
        li.classList.remove('active');
        this.classList.add("active");
       
    })
}  
function filterImg(){
    imgItem.forEach(img=>{
        img.style.display = "none";
    })    
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
     el.style.display ="block";
    });
}  

///owl caresol
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    slideBy:'1',
    slideTransition:'1',
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
}) 
///owl  caresoul for image
$('.clients .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    slideTransition:'1',
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:2,
          
        },
        1000:{
            items:4,
           
        }
    }
}) 