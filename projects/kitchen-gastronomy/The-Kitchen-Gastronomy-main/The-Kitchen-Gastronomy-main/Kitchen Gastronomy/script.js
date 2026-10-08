// VIDEO PLAYER
const videos = document.querySelectorAll('.showcase_videos video');

videos.forEach(video => {
    video.pause();
    
    video.parentElement.addEventListener('mouseenter', () => {
        video.play();
    });
    
    video.parentElement.addEventListener('mouseleave', () => {
        video.pause();
    });
});

// FAQ'S DROPDOWN
var acc = document.getElementsByClassName
("ques");
var i;

for(i = 0; i < acc.length ; i++){
    acc[i].addEventListener("click", function()
    {
        this.classList.toggle("active");
        this.parentElement.classList.toggle
        ("active");

        var panel = this.nextElementSibling;
        
        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else {
                panel.style.display ='block';
            }
        }
    );
}