const arrows = document.querySelectorAll(".arrow");
const movielist = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i)=> {
    const widthRatio = Math.floor(window.innerWidth / 300);
    
    let clickcounter = 0;
    const imageitem = movielist[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function(){
        clickcounter++;

    if(imageitem - (4+ clickcounter) + (4 - widthRatio)>=0){
        // movielist[i].style.transform = "translatex(-300px);"
        movielist[i].style.transform = `translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    }else {
        movielist[i].style.transform = "translateX(0)";
        clickcounter = 0;
    }
});

});

/*Dark mode*/ 
const ball = document.querySelectorAll(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select, .movie-list-title");

ball.forEach(ball => {
    ball.addEventListener("click", function(){
        items.forEach(item => {
            item.classList.toggle("active");
        });
    });
});