
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carouselDOM = document.querySelector('.carousel');
let listItemsDOM = document.querySelector('.carousel .list');
let thumbnailDOM = document.querySelector('.carousel .thumbnail');



nextBtn.onclick = function(){
    showSlider('next')
    // updateContent('next');
}
prevBtn.onclick = function(){
    showSlider('prev')
    // updateContent('prev');
}
let timerRunning = 2000;
let runTimeOut
function showSlider(type){
    let itemSlider= document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item')
    let title = document.querySelector('.carousel .list .item .title');
    let imgSrc = document.querySelector('.carousel .list .item img');
    let title2 = document.querySelectorAll('.carousel .thumbnail .item .title')
    let imgSrc2 = document.querySelectorAll('.carousel .thumbnail .item img');

    if(type === 'next'){
        listItemsDOM.appendChild(itemSlider[0]);
        thumbnailDOM.appendChild(itemThumbnail[0]);
        carouselDOM.classList.add('next');
        title.innerHTML = title2[0].innerHTML;
        imgSrc.src = imgSrc2[0].src;

    }
    else{
        let positionLastItem = itemSlider.length-1;
        listItemsDOM.prepend(itemSlider[positionLastItem]);
        thumbnailDOM.prepend(itemThumbnail[positionLastItem])
        carouselDOM.classList.add('prev')

        let lastItemTitle = itemSlider[positionLastItem].querySelector('.title') ;
        let lastItemImg = itemSlider[positionLastItem].querySelector('img'); 
        title.innerHTML = lastItemTitle.innerHTML;
        imgSrc2.src = lastItemImg.src
        console.log(itemSlider[positionLastItem].querySelector('img').src )
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDOM.classList.remove('next');
        carouselDOM.classList.remove('prev')
    },timerRunning) 
}

// function updateContent(type){
//     let title = document.querySelector('.carousel .list .item .title');
//     let imgSrc = document.querySelector('.carousel .list .item img');
//     let title2 = document.querySelectorAll('.carousel .thumbnail .item .title')
//     let imgSrc2 = document.querySelectorAll('.carousel .thumbnail .item img');

//     if(type === 'next'){                
//         title.innerHTML = title2[0].innerHTML;
//         imgSrc.src = imgSrc2[0].src;
//     }
//     else{
//         let lastTitle = title2.length-1;
//         let lastImg = imgSrc2.length-1
//         title.innerHTML = title2[lastTitle].innerHTML;
//         imgSrc.src = imgSrc2[lastImg].src
//     } 

// }