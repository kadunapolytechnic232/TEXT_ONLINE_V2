//TIME READING
setInterval(()=>{


    if(localStorage.getItem("User_start") != null){

    
        if(localStorage.getItem("Hr")===null){
            localStorage.setItem("Hr","00")
            localStorage.setItem("Mt","00")
            localStorage.setItem("Sd","00")
        }

    /*
    localStorage.setItem("Hr","00")
    localStorage.setItem("Mt","00")
    localStorage.setItem("Sd","00")
    */
        

        

        
        
        if(localStorage.getItem("Sd") === "00" && localStorage.getItem("Mt") === "00" && localStorage.getItem("Hr") === "00"){

            //EMPTY SPACE
            document.querySelector(".T_reading").style.animationName="R_sign_Stop";

        }else if(localStorage.getItem("Sd") != "00"){
            localStorage.setItem("Sd",`${localStorage.getItem("Sd")-1}`)

            if(localStorage.getItem("Sd") != "00" && localStorage.getItem("Mt") === "00" && localStorage.getItem("Hr") === "00"){

                document.querySelector(".T_reading").style.animationName="R_sign";
            }
            
        }else if(localStorage.getItem("Sd")==="00" && localStorage.getItem("Mt") != "00"){

            localStorage.setItem("Mt",`${localStorage.getItem("Mt")-1}`)
            localStorage.setItem("Sd","60")
        }else if(localStorage.getItem("Sd")==="00" && localStorage.getItem("Hr") != "00"){

            localStorage.setItem("Hr",`${localStorage.getItem("Hr")-1}`)
            localStorage.setItem("Mt","60")
            localStorage.setItem("Sd","60")
        }else{
            localStorage.setItem("Sd","60")
        }
       


        if(`${localStorage.getItem("Sd")}`.length==1){
            localStorage.setItem("Sd",`0${localStorage.getItem("Sd")}`)
        }
        if(`${localStorage.getItem("Mt")}`.length==1){
            localStorage.setItem("Mt",`0${localStorage.getItem("Mt")}`)
        }
        if(`${localStorage.getItem("Hr")}`.length==1){
            localStorage.setItem("Hr",`0${localStorage.getItem("Hr")}`)
        }
        
        document.querySelector('.T_reading').innerText=`${localStorage.getItem("Hr")}:${localStorage.getItem("Mt")}:${localStorage.getItem("Sd")}`;

    }
    
},1000)




setInterval(()=>{
    if(localStorage.getItem("User_start") != null){
        document.querySelector('.MCD_UT_R').innerHTML=`
        <span class="MCD_UT_R_N">${localStorage.getItem("IN")}, </span> <span class="MCD_UT_R_R">${localStorage.getItem("IR")}</span> your remaining time.
        `;
    }
},100)