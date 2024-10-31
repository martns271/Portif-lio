document.addEventListener('DOMContentLoaded', ()=>{
        new TypeIt(".animated", {  
            speed: 200 ,
            loop: true
            
        })
     
        .type('JavaScript' ,{delay: 900})
        .delete(10)
        .type('Html' ,{delay: 500})
        .delete(4)
        .type('Css' ,{delay: 500})
        .delete(3)
        .type('C#.' ,{delay: 500})
        .go()
    })