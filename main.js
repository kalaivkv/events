function changecolor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    document.body.style.backgroundColor = randomColor;
}

function addimage() {
    const images = [
        { src: 'img/dragon_1.jpg', alt: '' },
        { src: 'img/dragon_2.jpg', alt: '' },
        { src: 'img/dragon_3.jpg', alt: '' },
        { src: 'img/dragon_4.jpg', alt: '' },
        { src: 'img/dragon_5.jpg', alt: '' },
        { src: 'img/dragon_6.jpg', alt: '' },
        { src: 'img/dragon_7.jpg', alt: '' },
        { src: 'img/dragon_8.jpg', alt: '' },
        { src: 'img/dragon_9.jpg', alt: '' },
    ];

    const randomimage = Math.floor(Math.random() * images.length);
    const newimage = images[randomimage];

    const addimage = document.createElement('div');
    addimage.classList.add('image');

    const dragonimg = document.createElement('img');
    dragonimg.src = newimage.src;
    dragonimg.alt = newimage.alt;

    addimage.appendChild(dragonimg);
    document.getElementById('gallery').appendChild(addimage);
}

function remove() {
    const gallery = document.getElementById('gallery');
    if (gallery.children.length > 0) {
        gallery.removeChild(gallery.lastChild); 
    }
}

function reset() {
    const gallery = document.getElementById('gallery');
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }

    const original = [
        { src: 'img/dragon_10.jpg', alt: '' },
        { src: 'img/pic_1.jpg', alt: '' },
        { src: 'img/pic_2.jpg', alt: '' }
    ];

    original.forEach(image => {
        const addimage = document.createElement('div');
        addimage.classList.add('image');

        const dragonimg = document.createElement('img');
        dragonimg.src = image.src;
        dragonimg.alt = image.alt;

        addimage.appendChild(dragonimg);
        gallery.appendChild(addimage);
    });
}

document.getElementById("changeColor").addEventListener("click", function () {
    changecolor();
});

document.getElementById("addimage").addEventListener("click", function () {
   addimage();
});

document.getElementById("remove").addEventListener("click", function () {
   remove();
});

document.getElementById("reset").addEventListener("click", function () {
   reset();
});

document.addEventListener('keydown', function (event) {
   if (event.key.toLowerCase() === 'c') {
       changecolor();
   }
});