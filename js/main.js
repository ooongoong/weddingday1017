/* ======================================
   GALLERY
====================================== */

const images = [
    "YUH03603.JPG",
    "YUH03565.JPG",
    "YUH03533.JPG",
    "YUH03467.JPG",
    "YUH03330.JPG",
    "YUH03277.JPG",
    "YUH03140.JPG",
    "YUH03026.JPG",
    "YUH02941.JPG",
    "YUH02564.JPG",
    "YUH02555.JPG",
    "YUH02497.JPG",
    "YUH02448.JPG",
    "YUH02406.JPG",
    "YUH02357.JPG",
    "YUH02325.JPG",
    "YUH02232.JPG",
    "YUH02024.JPG",
    "YUH01980.JPG",
    "YUH01660.JPG",
    "YUH01642.JPG",
    "YUH01353.JPG",
    "YUH01347.JPG",
    "YUH01177.JPG",
    "YUH00387.JPG",
    "YUH00322.JPG",
    "YUH00239.JPG",
    "YUH00167.JPG",
    "YUH00087.JPG"
];

const galleryGrid = document.getElementById("galleryGrid");
const moreBtn = document.getElementById("moreBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const currentPhoto = document.getElementById("currentPhoto");
const totalPhoto = document.getElementById("totalPhoto");

totalPhoto.textContent = images.length;

let visible = 6;
let current = 0;

function renderGallery(){

    galleryGrid.innerHTML="";

    images.slice(0,visible).forEach((img,index)=>{

        const image = document.createElement("img");

        image.src=`images/${img}`;

        image.loading="lazy";

        image.onclick=()=>{

            current=index;

            updateViewer();

            lightbox.classList.add("show");

        };

        galleryGrid.appendChild(image);

    });

}

renderGallery();

moreBtn.onclick=()=>{

    visible=images.length;

    renderGallery();

    moreBtn.style.display="none";

};

function updateViewer(){

    lightboxImage.src=`images/${images[current]}`;

    currentPhoto.textContent=current+1;

}

prevBtn.onclick=()=>{

    current--;

    if(current<0){

        current=images.length-1;

    }

    updateViewer();

};

nextBtn.onclick=()=>{

    current++;

    if(current>=images.length){

        current=0;

    }

    updateViewer();

};

closeLightbox.onclick=()=>{

    lightbox.classList.remove("show");

};

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("show");

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        lightbox.classList.remove("show");

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

});


/* ======================================
   ACCOUNT
====================================== */

document.querySelectorAll(".account-toggle").forEach(btn=>{

    btn.addEventListener("click",()=>{

        const target=document.getElementById(btn.dataset.target);

        target.classList.toggle("open");

        btn.querySelector(".arrow").style.transform=
        target.classList.contains("open")
        ?"rotate(180deg)"
        :"rotate(0deg)";

    });

});


/* ======================================
   COPY
====================================== */

const toast=document.getElementById("toast");

document.querySelectorAll(".copy-btn").forEach(btn=>{

    btn.addEventListener("click",async()=>{

        const account=btn.dataset.account;

        try{

            await navigator.clipboard.writeText(account);

        }catch{

            const textarea=document.createElement("textarea");

            textarea.value=account;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            textarea.remove();

        }

        toast.classList.add("show");

        setTimeout(()=>{

            toast.classList.remove("show");

        },1800);

    });

});


/* ======================================
   SWIPE
====================================== */

let startX=0;

lightbox.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    const endX=e.changedTouches[0].clientX;

    if(startX-endX>50){

        nextBtn.click();

    }

    if(endX-startX>50){

        prevBtn.click();

    }

});
