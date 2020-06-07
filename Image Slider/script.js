var photos = ["image/ar.jpg", "image/arn.jpg", "image/arno.jpeg", "image/arnob1.jpeg", "image/arnob2.jpeg"];
var imgtag = document.querySelector("#photo");
var count = 0;

function next() {
    count++;
    if (count >= photos.length) {
        count = 0;
        imgtag.src = photos[count];
    } else {
        imgtag.src = photos[count];
    }
}

function pre() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        imgtag.src = photos[count];
    } else {
        imgtag.src = photos[count];
    }
}
