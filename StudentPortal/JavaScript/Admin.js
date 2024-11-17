//.ADD_Q_D,.VIEW_Q_D,.VIEW_R_D,.Edith_D

document.querySelector('.ADD_Q_B').addEventListener("click",()=>{

    document.querySelector('.ADD_Q_D').style.display="block";
    document.querySelector('.VIEW_Q_D').style.display="none";
    document.querySelector('.VIEW_R_D').style.display="none";
    document.querySelector('.CHANGE_P_D').style.display="none";
})

document.querySelector('.VIEW_Q_B').addEventListener("click",()=>{

    document.querySelector('.ADD_Q_D').style.display="none";
    document.querySelector('.VIEW_R_D').style.display="none";
    document.querySelector('.CHANGE_P_D').style.display="none";

    //ExamNo_DC
    document.querySelector('.ExamNo_DC').style.display="block";
    localStorage.setItem("page_view","VIEW_Q_D")

    
})

document.querySelector('.VIEW_R_B').addEventListener("click",()=>{

    document.querySelector('.ADD_Q_D').style.display="none";
    document.querySelector('.VIEW_Q_D').style.display="none";
    document.querySelector('.CHANGE_P_D').style.display="none";


    //ExamNo_DC
    document.querySelector('.ExamNo_DC').style.display="block";
    localStorage.setItem("page_view","VIEW_R_D")


})

document.querySelector('.CHANGE_P_B').addEventListener("click",()=>{

    document.querySelector('.ADD_Q_D').style.display="none";
    document.querySelector('.VIEW_Q_D').style.display="none";
    document.querySelector('.VIEW_R_D').style.display="none";
    document.querySelector('.CHANGE_P_D').style.display="block";


    localStorage.setItem("ALLOW/STOP","TRUE")
})



/////////////////////

document.querySelector('.view_Button').addEventListener("click",()=>{

    
    if(document.querySelector('.ECODE').value != "" && Number(document.querySelector('.ECODE').value) > 0 && Number(document.querySelector('.ECODE').value) <= Number(localStorage.getItem("EXAM_NUMBER"))){

        localStorage.setItem("EXAM_NO",document.querySelector('.ECODE').value)
        document.querySelector('.ECODE').style.outline="2px solid transparent";
        document.querySelector('.ExamNo_DC').style.display="none";

        document.querySelector(`.${localStorage.getItem("page_view")}`).style.display="block";
    }else{
        document.querySelector('.ECODE').style.outline="2px solid red";
    }
    
    
})

















































//Opt_OB_D
document.querySelector('.Opt_OB_D').addEventListener("click",()=>{

    document.querySelector('.Opt_OB_C').style.display="block";
    
})

let CS="";
setInterval(()=>{


    if(localStorage.getItem("SelectType")==="Multiple-choice" && CS !=localStorage.getItem("SelectType")){
        CS=localStorage.getItem("SelectType");
        document.querySelector(".Opt_OB_D").innerHTML=`
            ${localStorage.getItem("SelectType")}
            <p class="AD_I"></p>
            <div class="Opt_OB_C">
                <p class="Opt_O">Multiple-choice</p>
                <p class="Opt_B">Dichotomous</p>
            </div>
        `;

        document.querySelector(".ADD_Q_D_Q_III").style.display="block";
        document.querySelector(".ADD_Q_D_Q_IV").style.display="block";

    }else if(localStorage.getItem("SelectType")==="Dichotomous" && CS !=localStorage.getItem("SelectType")){
        CS=localStorage.getItem("SelectType");
        document.querySelector(".Opt_OB_D").innerHTML=`
            ${localStorage.getItem("SelectType")}
            <p class="AD_I"></p>
            <div class="Opt_OB_C">
                <p class="Opt_O">Multiple-choice</p>
                <p class="Opt_B">Dichotomous</p>
            </div>
        `;

        document.querySelector(".ADD_Q_D_Q_III").style.display="none";
        document.querySelector(".ADD_Q_D_Q_IV").style.display="none";
    }




    document.querySelector('.Opt_O').addEventListener("click",()=>{
        setTimeout(()=>{
            document.querySelector('.Opt_OB_C').style.display="none";
            localStorage.setItem("SelectType","Multiple-choice")
        },100)
    })
    
    document.querySelector('.Opt_B').addEventListener("click",()=>{
        setTimeout(()=>{
            document.querySelector('.Opt_OB_C').style.display="none";
            localStorage.setItem("SelectType","Dichotomous")
        },100)
    })

},100)





setInterval(()=>{
    if(localStorage.getItem("SQ_N")=== null){
        localStorage.setItem("SQ_N",1)
    }
    

    document.querySelector('.placeholder_Q').innerText=`Qeustion ${localStorage.getItem("SQ_N")}`;
    

    
    if(`${document.querySelector('.ADD_Q_D_QI').value}`.length != 0){
        document.querySelector('.placeholder_Q').style.display="none";
    }else{
        document.querySelector('.placeholder_Q').style.display="block";
    }
    
},100)



let CST="";
let MET="FALSE";
setInterval(()=>{
    
    //Number(localStorage.getItem("SQ_N"))
    if(localStorage.getItem(`SelectType${Number(localStorage.getItem("SQ_N"))}`)==="Multiple-choice" && CST != localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`)){

        CST=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`);
        document.querySelector('.ADD_Q_D_QI').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[0];
        document.querySelector('.ADD_Q_D_QI_I').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[1];
        document.querySelector('.ADD_Q_D_QI_II').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[2];
        document.querySelector('.ADD_Q_D_QI_III').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[3];
        document.querySelector('.ADD_Q_D_QI_IV').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[4];

        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid transparent";

        MET="FALSE";

    }else if(localStorage.getItem(`SelectType${Number(localStorage.getItem("SQ_N"))}`)==="Dichotomous" && CST != localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`)){

        CST=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`);
        document.querySelector('.ADD_Q_D_QI').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[0];
        document.querySelector('.ADD_Q_D_QI_I').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[1];
        document.querySelector('.ADD_Q_D_QI_II').value=localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`).split("(^)")[2];


        document.querySelector('.ADD_Q_D_QI_III').value="";
        document.querySelector('.ADD_Q_D_QI_IV').value="";
        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid transparent";

        MET="FALSE";

    }else if(MET === "FALSE" && CST != localStorage.getItem(`SQ${Number(localStorage.getItem("SQ_N"))}`)){

        
        MET="TRUE";
        document.querySelector('.ADD_Q_D_QI').value="";
        document.querySelector('.ADD_Q_D_QI_I').value="";
        document.querySelector('.ADD_Q_D_QI_II').value="";
        document.querySelector('.ADD_Q_D_QI_III').value="";
        document.querySelector('.ADD_Q_D_QI_IV').value="";

    }

    
},100)



setInterval(()=>{

    if(localStorage.getItem("ALL_Questions") === null){
        localStorage.setItem("ALL_Questions_C","")
        localStorage.setItem("ALL_Questions","")
        localStorage.setItem("ALL_Questions_length",0)

    }

    
    
    //ALL_Questions_length
    if(Number(localStorage.getItem("SQ_N")) >= Number(localStorage.getItem("ALL_Questions_length"))){
        localStorage.setItem("ALL_Questions_length",Number(localStorage.getItem("SQ_N")))
    }


    //ALL_Questions_C
    for(let i=1;i<=Number(localStorage.getItem("ALL_Questions_length"));i++){

    
        if(i != 1 && localStorage.getItem(`SQ${i}`) != null){
            localStorage.setItem("ALL_Questions_C",localStorage.getItem("ALL_Questions_C")+"(/)"+localStorage.getItem(`SQ${i}`))
        }else if(i === 1 && localStorage.getItem(`SQ${i}`) != null){
            localStorage.setItem("ALL_Questions_C",localStorage.getItem(`SQ${i}`))
        }
        
    }
        

    //localStorage.getItem("ALL_Questions")
    if(localStorage.getItem("ALL_Questions_C") != localStorage.getItem("ALL_Questions")){

        localStorage.setItem("ALL_Questions",localStorage.getItem("ALL_Questions_C"))
        ADMIN_AQ_HTML='';
        ADMIN_Confirm='False';
    
    }
    

    
},100)





document.querySelector('.ADMIN_P_B').addEventListener("click",()=>{
    if(Number(localStorage.getItem("SQ_N")) != 1){
        localStorage.setItem("SQ_N",Number(localStorage.getItem("SQ_N"))-1)
        localStorage.setItem('ADMIN_AQ_Color',Number(localStorage.getItem("SQ_N")))
        CST="";


        ADMIN_AQ_HTML='';
        ADMIN_Confirm='False';
    }
    
})
document.querySelector('.ADMIN_N_B').addEventListener("click",()=>{

    if(`${document.querySelector('.ADD_Q_D_QI').value}`.length != 0){
        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid green";
    }else{
        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid red";
    }


    if(`${document.querySelector('.ADD_Q_D_QI_I').value}`.length != 0){
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid green";
    }else{
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid red";
    }


    if(`${document.querySelector('.ADD_Q_D_QI_II').value}`.length != 0){
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid green";
    }else{
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid red";
    }


    if(`${document.querySelector('.ADD_Q_D_QI_III').value}`.length != 0){
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid green";
    }else{
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid red";
    }


    if(`${document.querySelector('.ADD_Q_D_QI_IV').value}`.length != 0){
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid green";
    }else{
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid red";
    }


    if(`${document.querySelector('.ADD_Q_D_QI').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_I').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_II').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_III').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_IV').value}`.length != 0 && 
    localStorage.getItem("SelectType")==="Multiple-choice"){



        localStorage.setItem(`SQ${Number(localStorage.getItem("SQ_N"))}`,
        document.querySelector('.ADD_Q_D_QI').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_I').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_II').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_III').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_IV').value)
        
        localStorage.setItem(`SelectType${Number(localStorage.getItem("SQ_N"))}`,"Multiple-choice")


        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid transparent";

        document.querySelector('.ADD_Q_D_QI').value="";
        document.querySelector('.ADD_Q_D_QI_I').value="";
        document.querySelector('.ADD_Q_D_QI_II').value="";
        document.querySelector('.ADD_Q_D_QI_III').value="";
        document.querySelector('.ADD_Q_D_QI_IV').value="";


        localStorage.setItem("SQ_N",Number(localStorage.getItem("SQ_N"))+1)



    }else if(`${document.querySelector('.ADD_Q_D_QI').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_I').value}`.length != 0 && 
    `${document.querySelector('.ADD_Q_D_QI_II').value}`.length != 0 && 
    localStorage.getItem("SelectType")==="Dichotomous"){


        


        localStorage.setItem(`SQ${Number(localStorage.getItem("SQ_N"))}`,
        document.querySelector('.ADD_Q_D_QI').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_I').value
        +"(^)"+
        document.querySelector('.ADD_Q_D_QI_II').value)
        
        localStorage.setItem(`SelectType${Number(localStorage.getItem("SQ_N"))}`,"Dichotomous")


        document.querySelector('.ADD_Q_D_QI').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_I').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_II').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_III').style.outline="2px solid transparent";
        document.querySelector('.ADD_Q_D_QI_IV').style.outline="2px solid transparent";

        document.querySelector('.ADD_Q_D_QI').value="";
        document.querySelector('.ADD_Q_D_QI_I').value="";
        document.querySelector('.ADD_Q_D_QI_II').value="";
        document.querySelector('.ADD_Q_D_QI_III').value="";
        document.querySelector('.ADD_Q_D_QI_IV').value="";

        localStorage.setItem("SQ_N",Number(localStorage.getItem("SQ_N"))+1)
        

        
    }

    CST="";
    localStorage.setItem('ADMIN_AQ_Color',Number(localStorage.getItem("SQ_N")))

    ADMIN_AQ_HTML='';
    ADMIN_Confirm='False';
})







let ADMIN_AQ_HTML='';
let ADMIN_Confirm='False';
setInterval(()=>{
    if(ADMIN_Confirm==="False"){
        ADMIN_Confirm="True";

        for(let i=1;i<=Number(localStorage.getItem("ALL_Questions_length"));i++){


            ADMIN_AQ_HTML+=`<p class="ADMIN_AQ ADMIN_AQ${i}"; onclick="

            localStorage.setItem('SQ_N',${i})
            localStorage.setItem('ADMIN_AQ_Color',${i})
            ADMIN_AQ_HTML='';
            ADMIN_Confirm='False';
            "; style="background-color: rgb(72, 226, 0);"; data-id="${i}";>${i}</p>`;
        }

        document.querySelector('.ADMIN_MCD_UB_AQ').innerHTML=ADMIN_AQ_HTML;

        

       
    }

    if(localStorage.getItem(`ADMIN_AQ_Color`) != null){
        document.querySelector(`.ADMIN_AQ${localStorage.getItem('ADMIN_AQ_Color')}`).style.backgroundColor="green";
    }
    
},100)




//ADD_back_B
setInterval(()=>{

    document.querySelector(".ADD_back_B").addEventListener("click",()=>{
        document.querySelector(".ADD_Q_D").style.display="none";
    })

},100)

















if(localStorage.getItem("HOUR_I") === null){
    localStorage.setItem("HOUR_I","00")
    localStorage.setItem("MINUTE_I","00")
    localStorage.setItem("SECOND_I","00")

}


localStorage.setItem("R_TIME","TRUE")
setInterval(()=>{

    if(localStorage.getItem("R_TIME") === "TRUE"){
    
        //HOUR_I
        if(localStorage.getItem("HOUR_I") != null || localStorage.getItem("HOUR_I") === "00"){
            document.querySelector('.HOUR_I').value=localStorage.getItem("HOUR_I");
        }
        //MINUTE_I
        if(localStorage.getItem("MINUTE_I") != null || localStorage.getItem("MINUTE_I") === "00"){
            document.querySelector('.MINUTE_I').value=localStorage.getItem("MINUTE_I");
        }
        //SECOND_I
        if(localStorage.getItem("SECOND_I") != null || localStorage.getItem("SECOND_I") === "00"){
            document.querySelector('.SECOND_I').value=localStorage.getItem("SECOND_I");
        }


        localStorage.setItem("R_TIME","FALSE")

    }
    
},100)



//SET TIME HOUR
document.querySelector('.HOUR_I').addEventListener("input",(event)=>{

    
    if(`${document.querySelector('.HOUR_I').value}`.length < 3){
        localStorage.setItem("HOUR_I",document.querySelector('.HOUR_I').value)
    }else{
        document.querySelector('.MINUTE_I').focus();
        localStorage.setItem("MINUTE_I",event.data)
    }

    localStorage.setItem("R_TIME","TRUE")
    
})


//SET TIME MINUTE_I
document.querySelector('.MINUTE_I').addEventListener("input",(event)=>{

    
    if(event.data === null  && document.querySelector('.MINUTE_I').value === ""){
        document.querySelector('.HOUR_I').focus();
        localStorage.setItem("MINUTE_I",document.querySelector('.MINUTE_I').value)
    }else if(`${document.querySelector('.MINUTE_I').value}`.length < 3){
        localStorage.setItem("MINUTE_I",document.querySelector('.MINUTE_I').value)
    }else{
        document.querySelector('.SECOND_I').focus();
        localStorage.setItem("SECOND_I",event.data)
    }

    localStorage.setItem("R_TIME","TRUE")
    
})


//SET TIME SECOND_I
document.querySelector('.SECOND_I').addEventListener("input",(event)=>{

    if(event.data === null && document.querySelector('.SECOND_I').value === ""){
        document.querySelector('.MINUTE_I').focus();
        localStorage.setItem("SECOND_I",document.querySelector('.SECOND_I').value)
    }else if(`${document.querySelector('.SECOND_I').value}`.length < 3){
        localStorage.setItem("SECOND_I",document.querySelector('.SECOND_I').value)
    }

    localStorage.setItem("R_TIME","TRUE")
    
})











//CHANGE_P_DB_BACK
document.querySelector('.CHANGE_P_DB_BACK').addEventListener("click",()=>{
    document.querySelector('.CHANGE_P_D').style.display="none";
    
})