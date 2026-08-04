const images=["YUH03603.JPG","YUH03565.JPG","YUH03533.JPG","YUH03467.JPG","YUH03330.JPG","YUH03277.JPG","YUH03140.JPG","YUH03026.JPG","YUH02941.JPG","YUH02564.JPG","YUH02555.JPG","YUH02497.JPG","YUH02448.JPG","YUH02406.JPG","YUH02357.JPG","YUH02325.JPG","YUH02232.JPG","YUH02024.JPG","YUH01980.JPG","YUH01660.JPG","YUH01642.JPG","YUH01353.JPG","YUH01347.JPG","YUH01177.JPG","YUH00387.JPG","YUH00322.JPG","YUH00239.JPG","YUH00167.JPG","YUH00087.JPG"];
const gallery=document.getElementById("galleryGrid"),moreBtn=document.getElementById("moreBtn"),viewer=document.getElementById("viewer"),viewerImg=document.getElementById("viewerImg"),closeBtn=document.getElementById("closeBtn"),prevBtn=document.getElementById("prevBtn"),nextBtn=document.getElementById("nextBtn"),current=document.getElementById("current"),total=document.getElementById("total");
total.textContent=images.length;let currentIndex=0,visibleCount=6;
function render(){gallery.innerHTML="";images.slice(0,visibleCount).forEach((f,i)=>{const d=document.createElement("div");d.className="gallery-item";d.innerHTML=`<img src="images/${f}" loading="lazy">`;d.onclick=()=>open(i);gallery.appendChild(d);});}
render();
moreBtn.onclick=()=>{visibleCount=images.length;render();moreBtn.style.display="none";}
function open(i){currentIndex=i;viewer.classList.add("show");update();}
function update(){viewerImg.src=`images/${images[currentIndex]}`;current.textContent=currentIndex+1;}
closeBtn.onclick=()=>viewer.classList.remove("show");
prevBtn.onclick=()=>{currentIndex=(currentIndex-1+images.length)%images.length;update();}
nextBtn.onclick=()=>{currentIndex=(currentIndex+1)%images.length;update();}
document.addEventListener("keydown",e=>{if(e.key==="Escape")viewer.classList.remove("show");if(e.key==="ArrowLeft")prevBtn.click();if(e.key==="ArrowRight")nextBtn.click();});
viewer.addEventListener("click",e=>{if(e.target===viewer)viewer.classList.remove("show");});