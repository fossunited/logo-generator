var svg = document.querySelector('svg');
var canvas = document.querySelector('canvas');
var image = document.querySelector('img');
var downloadBtn = document.getElementById('myBtn');
var color = "black";
var format = "SVG";
// Add click event to theme toggle button
document.getElementById('toggleColor').addEventListener('click', function (evt) {
    var cardTemplate = document.querySelector(".card")
    var foss = document.getElementById('FossClub')
    var logoName = document.getElementById('logoName')
    var topLeft = document.getElementById('topLeft')
    var bottomRight = document.getElementById('bottomRight')
    // DARK MODE
    if (evt.target.innerHTML === "Switch to Dark") {
        svg.style.fill = "black";
        cardTemplate.style.backgroundColor = "#191919";
        cardTemplate.firstElementChild.style.color = "white";
        foss.style.fill='white'
        logoName.style.fill = 'white'
        topLeft.style.fill = 'white'
        bottomRight.style.fill = 'white'
        topRight.style.fill = '#C8C7C7'
        bottomLeft.style.fill = '#C8C7C7'
        evt.target.innerHTML = "Switch to Light";
        document.getElementById("toggleColor").classList.remove('btn-dark');
        document.getElementById("toggleColor").classList.add('btn-light');
        document.getElementById('previewText').style.color = "white";
    } 
    // LIGHT MODE
    else {
        svg.style.fill = "white";
        cardTemplate.style.backgroundColor = "white";
        cardTemplate.firstElementChild.style.color = "#6c757d";
        foss.style.fill = "black"
        topLeft.style.fill = 'black'
        logoName.style.fill = 'black'
        bottomRight.style.fill = 'black'
        topRight.style.fill = '#22B34F'
        bottomLeft.style.fill = '#22B34F'
        evt.target.innerHTML = "Switch to Dark";
        document.getElementById("toggleColor").classList.remove('btn-light');
        document.getElementById("toggleColor").classList.add('btn-dark');
        document.getElementById('previewText').style.color = "black";
    }
    color = svg.style.fill;
})
// Show or hide select format dropdown
function toggleSelect()
{
    var divs = document.querySelectorAll(".showable");
    for(var div of divs)
        if(div.classList.contains("show"))
            div.classList.remove("show");
        else div.classList.add("show");        
}
// Set the fromat of image to be downloaded
function setFormat(newFormat)
{
    format = newFormat;
    downloadBtn.value = `Download ${format}`;
}
// Function to download image
function triggerDownload(imgURI) {
    var evt = new MouseEvent('click', {
        view: window,
        bubbles: false,
        cancelable: true
    });
    var a = document.createElement('a');
    var str = document.getElementById('collegeName').value;
    a.setAttribute('download', "FOSS Club".concat(str).concat(`.${format.toLowerCase()}`));
    a.setAttribute('href', imgURI);
    a.setAttribute('target', '_blank');
    a.dispatchEvent(evt);
}
// Add submit event to download form
document.getElementById("downloadForm").addEventListener('submit', function(event)
{
    event.preventDefault();
    changeCollegeName();
    var openTag = `<svg id="svgLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2028 594" width="2028" height="594">`;
    var closeTag = '</svg>';
    var blob = new Blob([`${openTag}${svg.innerHTML}${closeTag}`], {type: "image/svg+xml"});  
    var blobURL = window.URL.createObjectURL(blob);
    if(format === "SVG")
        return triggerDownload(blobURL);
 
    image.addEventListener("load", function gotImage() {
        window.URL.revokeObjectURL(blobURL);
        image.removeEventListener("load",gotImage);
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image,0,0);
        var imageURL = canvas.toDataURL(`image/${format.toLowerCase()}`);
        ctx.clearRect(0,0, canvas.width, canvas.height);
        triggerDownload(imageURL);
    });    
    image.setAttribute("src", blobURL);
});
// Dynamic update of college name on keychange 
var keyChange = document.getElementById('collegeName');
keyChange.onkeyup = keyChange.onkeypress = function () {
    changeCollegeName();
}
function changeCollegeName() {
    var collegeName = document.getElementById('collegeName').value;
    document.getElementById('logoName').textContent = collegeName;
}


