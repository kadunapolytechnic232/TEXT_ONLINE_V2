const video = document.querySelector('.video');
const convas = document.querySelector('.convas');






/**/
navigator.mediaDevices.getUserMedia({video: true}).then(function (stream){
    video.srcObject = stream;
}).catch(function (err){
    console.error("Error accessing the webcam: " + err)
})



setInterval(()=>{
    if(localStorage.getItem("Login") === "USER"){

        convas.width = video.videoWidth;
        convas.height = video.videoHeight;
        convas.getContext("2d").drawImage(video,0,0, convas.width, convas.height);
        const dataURL = convas.toDataURL("image/png");


        document.querySelector(".User_Img").src=dataURL;

    }

},400)





