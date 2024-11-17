
setInterval(()=>{
    document.querySelector('.MCD').style.height=`${screen.height-70}px`;//MCD
    document.querySelector('.MCD_U').style.height=`${screen.height-70}px`;//MCD_U
    document.querySelector('.MCD_A').style.height=`${screen.height-70}px`;//MCD_A

    //
    document.querySelector('.MCD_UB').style.height=`${screen.height-100-70}px`;//MCD_UB
    document.querySelector('.VR_DB').style.height=`${screen.height-70-70}px`;//VR_DB

    
},100)



//CALA_page_B
setInterval(()=>{

    if(localStorage.getItem("Login") != null && localStorage.getItem("Submit") != "True"){

        if(localStorage.getItem("Login") === "USER"){

            document.querySelector('.CALA_page_B').style.display="none";
            document.querySelector('.MCD_U').style.zIndex="1";
            document.querySelector('.MCD_A').style.zIndex="0";

        }else{

            document.querySelector('.CALA_page_B').style.display="none";
            document.querySelector('.MCD_U').style.zIndex="0";
            document.querySelector('.MCD_A').style.zIndex="1";

        }
        
    }

},100)


setInterval(()=>{
    if(document.querySelector('.CALA_page_Button') != null){

        document.querySelector('.CALA_page_Button').addEventListener("click",()=>{
            
            if(document.querySelector('.IN').value === ""){

                if(document.querySelector('.IR').value === ""){
                    document.querySelector('.IN').style.outline="2px solid red";
                    document.querySelector('.IR').style.outline="2px solid red";

                    if(document.querySelector('.IEC').value === ""){
                        document.querySelector('.IEC').style.outline="2px solid red";
                    }else{
                        document.querySelector('.IEC').style.outline="2px solid green";
                    }
                    
                }else if(document.querySelector('.IEC').value === ""){
                    document.querySelector('.IN').style.outline="2px solid red";
                    document.querySelector('.IEC').style.outline="2px solid red";

                    if(document.querySelector('.IR').value === ""){
                        document.querySelector('.IR').style.outline="2px solid red";
                    }else{
                        document.querySelector('.IR').style.outline="2px solid green";
                    }
                }else{
                    document.querySelector('.IN').style.outline="2px solid red";
                    document.querySelector('.IR').style.outline="2px solid green";
                    document.querySelector('.IEC').style.outline="2px solid green";
                }
            }else if(document.querySelector('.IR').value === ""){

                if(document.querySelector('.IEC').value === ""){

                    document.querySelector('.IR').style.outline="2px solid red";
                    document.querySelector('.IEC').style.outline="2px solid red";
                }else{
                    document.querySelector('.IR').style.outline="2px solid red";
                    document.querySelector('.IEC').style.outline="2px solid green";
                }

                document.querySelector('.IN').style.outline="2px solid green";

            }else{

                if(document.querySelector('.IEC').value === ""){
                    
                    document.querySelector('.IEC').style.outline="2px solid red";
                    document.querySelector('.IN').style.outline="2px solid green";
                    document.querySelector('.IR').style.outline="2px solid green";

                }else{

                    if(Number(document.querySelector('.IEC').value) > 0 && Number(document.querySelector('.IEC').value) === Number(localStorage.getItem("EXAM_NUMBER"))){

                    
                        document.querySelector('.IEC').style.outline="2px solid transparent";
                        document.querySelector('.IN').style.outline="2px solid transparent";
                        document.querySelector('.IR').style.outline="2px solid transparent";


                        //USER INFORMATION TO LS
                        localStorage.setItem("IN",`${document.querySelector('.IN').value}`.toUpperCase())
                        localStorage.setItem("IR",`${document.querySelector('.IR').value}`.toUpperCase())
                        localStorage.setItem("IEC",`${document.querySelector('.IEC').value}`.toUpperCase())
                        localStorage.setItem("EXAM_NO",Number(document.querySelector('.IEC').value))


                        //LOGIN SUCCESSFUL
                        setTimeout(()=>{

                            document.querySelector('.CALA_page').innerHTML=`
                            <div class="CALA_page_confirm">
                                <span class="confirm_N">${localStorage.getItem("IN")}</span> ensure that your registration number is correct.
                                
                            </div>
                            <p class="regNumber">${localStorage.getItem("IR")}</p>
                        
                            <div class="BC_BD">
                                <p class="B_B">Back</p>
                                <p class="C_B">Confirm</p>
                            </div>
                        
                            <p class="Start_B">Start</p>
                            `;

                        },500)


                    }else{

                        document.querySelector('.IEC').style.outline="2px solid red";
                        document.querySelector('.IN').style.outline="2px solid green";
                        document.querySelector('.IR').style.outline="2px solid green";
                    }
                    
                }

                
            }

            


            //ADMIN
            if(`${document.querySelector('.IEC').value}` === `${localStorage.getItem("PASSWORD")}`){

                localStorage.setItem("Login","ADMIN")

                //IEC && EXAM_NO
                localStorage.setItem("IEC",1)
                localStorage.setItem("EXAM_NO",1)
            }
            
        })
    }
},100)


setInterval(()=>{

    if(document.querySelector('.B_B') != null){

        document.querySelector('.B_B').addEventListener("click",()=>{

            if(localStorage.getItem("Submit")==="True"){
                document.querySelector('.CALA_page_B').style.display="none";
                localStorage.removeItem("Submit")
            }else{
                
            
                document.querySelector('.CALA_page').innerHTML=`
                <div class="CALA_page_LGD">
                        <p class="CALA_page_LG">
                            <img src="" class="CALA_page_LG_I">
                        </p>
                        <p class="CALA_page_N"> Welcome! Please enter your credentials below to access your CA tests</p>
                    </div>

                    <div class="CALA_page_I">
                        <p class="IT">Fullname</p>
                        <input type="text" class="IP IN">
                    </div>

                    <div class="CALA_page_I">
                        <p class="IT">Reg Number</p>
                        <input type="text" class="IP IR">
                        
                    </div>

                    <div class="CALA_page_I">
                        <p class="ExamCode_p">Exam code:</p>
                        <input type="number" class="IPC IEC">
                    </div>

                <div class="CALA_page_Button">Login</div>
                `;

                document.querySelector('.IN').value=localStorage.getItem("IN");
                document.querySelector('.IR').value=localStorage.getItem("IR");
                document.querySelector('.IEC').value=localStorage.getItem("IEC");
            }
        })
        document.querySelector('.C_B').addEventListener("click",()=>{

            if(localStorage.getItem("Submit")==="True"){
                localStorage.setItem("Confirm_Submit","True")
                document.querySelector('.CALA_page_B').style.display="none";
                localStorage.removeItem("Submit")
            }else{
                document.querySelector('.BC_BD').style.display="none";

                if(document.querySelector('.Start_B') != null){
                    document.querySelector('.Start_B').style.display="block";
                }
            }
            

            
        })

    }

    if(document.querySelector('.Start_B') != null){
        document.querySelector('.Start_B').addEventListener("click",()=>{
            localStorage.setItem("Login","USER")
            localStorage.setItem("User_start","True")
            
        })
    }

    
},100)


















//RULES_R
setInterval(()=>{

    if(localStorage.getItem("RULES_R") === "FALSE"){
        document.querySelector('.MCD_R').style.display="none";
    }

},100)


document.querySelector('.MCD_R_BTN').addEventListener("click",()=>{
    localStorage.setItem("RULES_R","FALSE")
})