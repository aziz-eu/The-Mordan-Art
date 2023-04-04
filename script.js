//nav 

const container = document.querySelector('.container')

const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener('click',() =>{

    container.classList.add('show-nav')
})
close.addEventListener('click',() =>{

    container.classList.remove('show-nav')
})






//feature Images


const featureImages = document.querySelectorAll('.feature-images');

featureImages.forEach(featureImage=>{

    featureImage.addEventListener('click',()=>{
        window.location.href = 'artical.html'
        window.addEventListener('load', ()=>{
            
        })

        })
        
    });


// function articalPage(){
//     const articalImages = [

//         {
//             name: "Heading of Art",
//             artist : 'Abdul Aziz',
//             art: 'Heloo.jpg',
//             description: "lfjlssssssssss"
//         },
//         {
//             name: "Heading of Art",
//             artist : 'Abdul Aziz',
//             art: 'Heloo.jpg',
//             description: "lfjlssssssssss"
//         },
//         {
//             name: "Heading of Art",
//             artist : 'Abdul Aziz',
//             art: 'Heloo.jpg',
//             description: "lfjlssssssssss"
//         },
    
//     ]
    
    
    
//     const heading = document.querySelector(".artical-heading");
//     const artist = document.querySelector(".artist");
//     const art = document.querySelector(".art");
//     const description = document.querySelector(".description");
    
//     console.log(art)
// }





//Art galery 

const panels = document.querySelectorAll(".panel")


panels.forEach(panel=>{

    panel.addEventListener('click',()=>{
        removeActiveClass();
        panel.classList.add('active')
    })


})

function removeActiveClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })

}