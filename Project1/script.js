function displayCaption(caption) {
    document.getElementById("caption").textContent = caption;
}

function selectThumbnail(image, caption) {
    var thumbnails = document.getElementsByClassName("thumbnail");
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.border = "none";
    }
    image.style.border = "2px solid red";
    document.getElementById("largeImage").src = image.src;
    displayCaption(caption);
}