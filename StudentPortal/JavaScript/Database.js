/**/
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";


const firebaseConfig = {
apiKey: "AIzaSyCAw54gL8LIHBc6o6vhSjC15Jx1vB3YvOM",
authDomain: "examonline1-ff7fb.firebaseapp.com",
projectId: "examonline1-ff7fb",
storageBucket: "examonline1-ff7fb.firebasestorage.app",
messagingSenderId: "207958975330",
appId: "1:207958975330:web:f5416907ee9bb1389a023b",
measurementId: "G-8LFBVXEMP6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase,set,ref,remove,update,child,onValue } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
const db =getDatabase();

















//ONVALUE EXAM_NUMBER
let EXAM_NUMBER=[];


setInterval(()=>{
    onValue(ref(db,"EXAM_NUMBER"),(snapshot)=>{
        EXAM_NUMBER=[]
        EXAM_NUMBER.push(snapshot.val())
    })
    
},100)



setInterval(()=>{

    if(EXAM_NUMBER.length != 0){
    
        localStorage.setItem("EXAM_NUMBER",EXAM_NUMBER[0].EXAM_NUMBER)
        document.querySelector(".ADD_ExamNo").innerText=EXAM_NUMBER[0].EXAM_NUMBER+1;
    }

    
},100)












//ONVALUE PASSWORD
let PASSWORD=[];

/**/
setInterval(()=>{
    onValue(ref(db,"PASSWORD"),(snapshot)=>{
        PASSWORD=[]
        PASSWORD.push(snapshot.val())
    })
    
},100)



setInterval(()=>{

    if(PASSWORD.length != 0){

        localStorage.setItem("PASSWORD",PASSWORD[0].PASSWORD)
        document.querySelector(".OP").innerText=PASSWORD[0].PASSWORD;
    }

    
},100)













































































let Questions=[];

//ONVALUE SECTIONS_Q
let SECTIONS_Q=[];

/**/
setInterval(()=>{
    onValue(ref(db,"SECTIONS_Q"),(snapshot)=>{
        SECTIONS_Q=[]
        SECTIONS_Q.push(snapshot.val())
    })
},100)




setInterval(()=>{


        if(SECTIONS_Q.length != 0 && SECTIONS_Q[0].SECTIONS_Q !=""  && `${SECTIONS_Q[0].SECTIONS_Q}`.includes("(//)")){

            if(Questions[0] != SECTIONS_Q[0].SECTIONS_Q.split("(//)")[Number(localStorage.getItem("EXAM_NO"))-1]){
                Questions[0]=SECTIONS_Q[0].SECTIONS_Q.split("(//)")[Number(localStorage.getItem("EXAM_NO"))-1];
            }

        }else if(SECTIONS_Q.length != 0 && SECTIONS_Q[0].SECTIONS_Q != ""){
            Questions[0]=SECTIONS_Q[0].SECTIONS_Q;
        }
    

},100)










let EXAMTIME=[];

/**/
//ONVALUE EXAMTIME
setInterval(()=>{
    onValue(ref(db,"EXAMTIME"),(snapshot)=>{
        EXAMTIME=[]
        EXAMTIME.push(snapshot.val())
    })
},100)









if(localStorage.getItem("C_EXAMTIME") === null){
    localStorage.setItem("C_EXAMTIME","TRUE")
}



setInterval(()=>{


    if(localStorage.getItem("Sd") === "00" && localStorage.getItem("Mt") === "00" && localStorage.getItem("Hr") === "00" && localStorage.getItem("C_EXAMTIME") === "FALSE"){

        if(localStorage.getItem(`AFQ${Questions[0].split("(/)").length}`) === null){
            localStorage.setItem(`AFQ${Questions[0].split("(/)").length}`,null)
        }

        localStorage.setItem("Q_NO",Questions[0].split("(/)").length-1)
        localStorage.setItem("Confirm_Submit","True")
        document.querySelector('.CALA_page_B').style.display="none";
        localStorage.removeItem("Submit")

    }else if(localStorage.getItem("Sd") === "00" && localStorage.getItem("Mt") === "00" && localStorage.getItem("Hr") === "00" && localStorage.getItem("C_EXAMTIME") === "TRUE"){
        
        if(EXAMTIME.length != 0 && EXAMTIME[0].EXAMTIME != ""  && `${EXAMTIME[0].EXAMTIME}`.includes("(/)")){

            localStorage.setItem("Hr",EXAMTIME[0].EXAMTIME.split("(/)")[Number(localStorage.getItem("EXAM_NO"))-1].split("(^)")[0])
            localStorage.setItem("Mt",EXAMTIME[0].EXAMTIME.split("(/)")[Number(localStorage.getItem("EXAM_NO"))-1].split("(^)")[1])
            localStorage.setItem("Sd",EXAMTIME[0].EXAMTIME.split("(/)")[Number(localStorage.getItem("EXAM_NO"))-1].split("(^)")[2])

            localStorage.setItem("C_EXAMTIME","FALSE")
            

        }else if(EXAMTIME.length != 0 && EXAMTIME[0].EXAMTIME != ""){
            
            localStorage.setItem("Hr",EXAMTIME[0].EXAMTIME.split("(/)")[0].split("(^)")[0])
            localStorage.setItem("Mt",EXAMTIME[0].EXAMTIME.split("(/)")[0].split("(^)")[1])
            localStorage.setItem("Sd",EXAMTIME[0].EXAMTIME.split("(/)")[0].split("(^)")[2])

            localStorage.setItem("C_EXAMTIME","FALSE")
        }
        
    }

},100)



































let Numbers = ["1234567890(/)0987612345(/)2345678901(/)5648391027(/)9876543210(/)3210765438(/)7632480159(/)4321098765(/)2019384765(/)3498756210(/)6501832794(/)1587649032(/)7109354682(/)8549201376(/)2837460159(/)9421076583(/)3509624817(/)6702519843(/)1240589763(/)4987362501(/)5376204981(/)6591843720(/)3147268095(/)5830172496(/)9264518037(/)7623485901(/)9516204783(/)8046195723(/)5198376420(/)3705824961(/)2917468305(/)1468203795(/)5823096147(/)9301547286(/)7016354892(/)6807231549(/)4126597830(/)7381046529(/)5908432167(/)8360745129(/)2497531860(/)6015483792(/)5408926371(/)2891673405(/)5139268704(/)4926580137(/)6983157420(/)7235098641(/)3079481652(/)5640137928(/)8592176340(/)4609735182(/)6275019843(/)1938574026(/)7316025849(/)8542630179(/)9527846310(/)4107539268(/)3098645172(/)6825014937(/)7412986350(/)1894376205(/)0561247398(/)4387215069(/)9718654302(/)7604931285(/)3215487096(/)4196073582(/)7536019842(/)0843126597(/)2069713845(/)8362504719(/)1723098654(/)5097386241(/)6489205731(/)8521706493(/)9235068174(/)1073468529(/)4386902517(/)2041783596(/)8506941372(/)6492058137(/)5839127640(/)4703659281(/)7612049538(/)9624785301(/)8750396421(/)3204817596(/)1526374890(/)6340178529(/)9087152643(/)5302468971(/)8910724365(/)2831046759(/)9564130278(/)7409826153(/)4103287659(/)6875931240(/)3298174650(/)9041652738(/)7519324068(/)5068142973(/)1467580392(/)8735924061(/)9504721863(/)0281357694(/)3146592870(/)7216084935(/)5074319268(/)8920567134(/)5637124908(/)9450836721(/)6802157439(/)4723605981(/)8560913472(/)2391786045(/)9517048623(/)1682504973(/)0743296815(/)8201463957(/)5389217460(/)1065924738(/)4712680395(/)6537091482(/)9012746538(/)7638915024(/)2750396184(/)1804362597(/)5938427610(/)6207541983(/)8469315720(/)3048716529(/)7682094135(/)5416987302(/)2975031468(/)6532741890(/)7294085136(/)5043189627(/)8912356047(/)9206487315(/)3874216905(/)6549203817(/)1063895472(/)8291456037(/)5207483619(/)4632051789(/)3079142658(/)1862473509(/)6450398712(/)5407613298(/)2879460513(/)8731504269(/)5642031987(/)9253146078(/)3075619824(/)4069537281(/)8127453906(/)6534208719(/)7280391564(/)5987231406(/)1945786302(/)7360852941(/)6204713589(/)5089261743(/)4136502978(/)2597843106(/)9832064715(/)1349507628(/)7423156980(/)9156234078(/)5601783294(/)3870916542(/)6275301984(/)5610749832(/)3816072954(/)6024187539(/)2405936817(/)9476152038(/)1586079234(/)7069413582(/)4325617890(/)5780936412(/)1096248753(/)9157036284(/)6475201839(/)3482569107(/)5209837461(/)8640197523(/)7295804163(/)5837169402(/)4379056218(/)9613508274(/)2406173589(/)8054726193(/)5318604972(/)6890245371(/)7246908135(/)1543786902(/)8067239514(/)3975618204(/)6821473059(/)4836592170(/)9103748562(/)2760589314(/)5048716392(/)3497285610(/)8716534209(/)7632104589(/)4928056317(/)6087295143(/)3589716240(/)5197048623(/)7462831950(/)9217405863(/)2635140879(/)5471869320(/)8705632491(/)4910837625(/)0359182476(/)1387245096(/)4065297831(/)2143856970(/)5360941782(/)9278601435(/)4832197605(/)1502746893(/)9628350471(/)5806173492(/)7534082169(/)6152478930(/)2065371849(/)9581463702(/)1037526849(/)7860923154(/)6138705924(/)7294058631(/)9486135720(/)2054176893(/)7108564932(/)3215048769(/)1047852369(/)6958024713(/)3680217594(/)5924671380(/)8230746519(/)7431062859(/)9071624358(/)2859306147(/)6107395482(/)4938126750(/)2064517389(/)3475296810(/)5204378619(/)7862905413(/)6510738294(/)3916807254(/)4562879130(/)7041539826(/)1289476350(/)6390254781(/)4038259671(/)5176203948(/)2893760154(/)8053496271(/)9716043582(/)3148692075(/)5021348769(/)7580261934(/)9146035728(/)6517823904(/)2796430518(/)3286017459(/)4627381950(/)7435829160(/)5289346170(/)6905743281(/)8042613957(/)3657108249(/)1728064935(/)4893107562(/)9418256370(/)6123579485(/)7054932186(/)8596741302(/)2405067318(/)6142038759(/)3157964028(/)8725306941(/)4968207531(/)2489765031(/)6915270834(/)8624735091(/)5796134820(/)7309825614(/)1087634952(/)2056418973(/)6842975103(/)3195684270(/)5820193647(/)7345218906(/)5064371928(/)9518320746(/)4209736815(/)8372064915(/)7813640925(/)3057184692(/)4065179328(/)1386405279(/)9624381057(/)4871596320(/)5269341780(/)3056724918(/)9147365820(/)7625104839(/)2859076143(/)7431896052(/)6159203478(/)4063857219(/)2704931856(/)8945203671(/)6357280194(/)8126503974(/)4938106275(/)2409716583(/)7853642109(/)9108324576(/)4623850179"];


let Opt_No = ["1234(/)1243(/)1324(/)1342(/)1423(/)1432(/)2134(/)2143(/)2314(/)2341(/)2413(/)2431(/)3124(/)3142(/)3214(/)3241(/)3412(/)3421(/)4123(/)4132(/)4213(/)4231(/)4312(/)4321"];

let Opt_No_B = ["12(/)21"];

//EXAM_FLOW_NO2
setInterval(()=>{
    if(Questions.length != 0){

        if(localStorage.getItem("EXAM_FLOW_NO2") === null || `${localStorage.getItem("EXAM_FLOW_NO2")}`.split(",").length != Questions[0].split("(/)").length){

            

            let Sort0= [];
            let Sort1= [];
            let Sort2= [];
            let Sort3= [];
            let Sort4= [];
            let Sort5= [];
            let Sort6= [];
            let Sort7= [];
            let Sort8= [];
            let Sort9= [];




            for(let i=0;i<=Questions[0].split("(/)").length-1;i++){

                

                if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '0'){
                    Sort0.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '1'){
                    Sort1.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '2'){
                    Sort2.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '3'){
                    Sort3.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '4'){
                    Sort4.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '5'){
                    Sort5.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '6'){
                    Sort6.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '7'){
                    Sort7.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '8'){
                    Sort8.push(i)
                }else if(`${i}`.slice(`${i}`.length-1,`${i}`.length) === '9'){
                    Sort9.push(i)
                }
            }


            //DONT REMOVE "N10 v"
            localStorage.setItem("N10",Numbers[0].split("(/)")[Math.round(Math.random()*(Numbers[0].split("(/)").length-1))])



            localStorage.setItem("EXAM_FLOW_NO","")
            for(let i=0;i<=`${localStorage.getItem("N10")}`.length;i++){

                if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '0'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort0.reverse()}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '1'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort1}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '2'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort2.reverse()}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '3'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort3}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '4'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort4.reverse()}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '5'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort5}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '6'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort6.reverse()}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '7'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort7}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '8'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort8.reverse()}`)
                }else if(`${localStorage.getItem("N10")}`.slice(i-1,i) === '9'){
                    localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`+','+`${Sort9}`)
                }
                

                
            }


            //DONT REMOVE "EXAM_FLOW_NO v"
            localStorage.setItem("EXAM_FLOW_NO",`${localStorage.getItem("EXAM_FLOW_NO")}`.slice(1,`${localStorage.getItem("EXAM_FLOW_NO")}`.length))




            localStorage.setItem("EXAM_FLOW_NO1","")
            for(let i=0;i<=`${localStorage.getItem("EXAM_FLOW_NO")}`.split(",").length-1;i++){

                if(`${localStorage.getItem("EXAM_FLOW_NO")}`.split(",")[i] != ""){
                    localStorage.setItem("EXAM_FLOW_NO1",`${localStorage.getItem("EXAM_FLOW_NO1")}`+','+`${`${localStorage.getItem("EXAM_FLOW_NO")}`.split(",")[i]}`)
                }
            }


            //DONT REMOVE "EXAM_FLOW_NO1 v"
            localStorage.setItem("EXAM_FLOW_NO1",`${localStorage.getItem("EXAM_FLOW_NO1")}`.slice(1,`${localStorage.getItem("EXAM_FLOW_NO1")}`.length))








            localStorage.setItem("EXAM_FLOW_NO2","")
            for(let i=0;i<=`${localStorage.getItem("EXAM_FLOW_NO1")}`.split(",").length-1;i++){

                if(`${(i+1)/2}`.includes('.') === true){
                    localStorage.setItem("EXAM_FLOW_NO2",`${localStorage.getItem("EXAM_FLOW_NO2")}`+','+`${`${localStorage.getItem("EXAM_FLOW_NO1")}`.split(",")[i]}`)
                }else if(`${(i+1)/2}`.includes('.') === false){
                    localStorage.setItem("EXAM_FLOW_NO2",`${localStorage.getItem("EXAM_FLOW_NO2")}`+','+`${`${localStorage.getItem("EXAM_FLOW_NO1")}`.split(",")[i]}`)
                }

            
            }

            //DONT REMOVE "EXAM_FLOW_NO2 v"
            localStorage.setItem("EXAM_FLOW_NO2",`${localStorage.getItem("EXAM_FLOW_NO2")}`.slice(1,`${localStorage.getItem("EXAM_FLOW_NO2")}`.length))


            
            //console.log(`${localStorage.getItem("EXAM_FLOW_NO2")}`.split(","))
            
        }
    }
},100)

































//CONFIRM_Q_NO
localStorage.setItem('CONFIRM_Q_NO','')
setInterval(()=>{

    if(Questions.length != 0){

        if(localStorage.getItem("Q_NO")===null){
            localStorage.setItem("Q_NO",0)
        }



        if(localStorage.getItem("Q_NO") != localStorage.getItem("CONFIRM_Q_NO")){

            localStorage.setItem('CONFIRM_Q_NO',localStorage.getItem("Q_NO"))
            
            //Opt_No
            localStorage.setItem("Opt_No",Opt_No[0].split("(/)")[Math.round(Math.random()*(Opt_No[0].split("(/)").length-1))])

            //Opt_No_B
            localStorage.setItem("Opt_No_B",Opt_No_B[0].split("(/)")[Math.round(Math.random()*(Opt_No_B[0].split("(/)").length-1))])
            
            let EXAM_FLOW_NO2=`${localStorage.getItem("EXAM_FLOW_NO2")}`.split(",")[localStorage.getItem("Q_NO")];
            
            if(Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)").length===5){

                let Q=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[0];
                let IA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No")}`.slice(0,1))];
                let IIA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No")}`.slice(1,2))];
                let IIIA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No")}`.slice(2,3))];
                let IVA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No")}`.slice(3,4))];
                
                let SelectI=`<p class="I_M"></p>`;
                let SelectII=`<p class="I_M"></p>`;
                let SelectIII=`<p class="I_M"></p>`;
                let SelectIV=`<p class="I_M"></p>`;
            
                if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IA){
                    SelectI=`<p class="I_M_Select"></p>`;
                    SelectII=`<p class="I_M"></p>`;
                    SelectIII=`<p class="I_M"></p>`;
                    SelectIV=`<p class="I_M"></p>`;
                }else if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IIA){
                    SelectI=`<p class="I_M"></p>`;
                    SelectII=`<p class="I_M_Select"></p>`;
                    SelectIII=`<p class="I_M"></p>`;
                    SelectIV=`<p class="I_M"></p>`;
                }else if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IIIA){
                    SelectI=`<p class="I_M"></p>`;
                    SelectII=`<p class="I_M"></p>`;
                    SelectIII=`<p class="I_M_Select"></p>`;
                    SelectIV=`<p class="I_M"></p>`;
                }else if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IVA){
                    SelectI=`<p class="I_M"></p>`;
                    SelectII=`<p class="I_M"></p>`;
                    SelectIII=`<p class="I_M"></p>`;
                    SelectIV=`<p class="I_M_Select"></p>`;
                }
                //Numbers(localStorage.getItem("Opt_No").split("(/)")[0])
                
                document.querySelector('.MCD_UB_T').innerHTML=`
                <div class="MCD_UB_T_T">Q${Number(localStorage.getItem("Q_NO"))+1}: ${Q}</div>
                <div class="MCD_UB_T_B">
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IA}')

            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')
            
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')
                    
                    ">${SelectI} <p class="I_A">${IA}</p></div>
            
                    <!-- >>>-->
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IIA}')
            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IIA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')
                    
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')
                    
                    ">${SelectII} </p> <p class="II_A">${IIA}</p></div>
            
                    <!-- >>>-->
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IIIA}')
            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IIIA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')

                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')

                    ">${SelectIII} <p class="III_A">${IIIA}</p></div>
            
                    <!-- >>>-->
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IVA}')
            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IVA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')
                    
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')
                    
                    ">${SelectIV} <p class="IV_A">${IVA}</p></div>
                    
                </div>`;
            }else if(Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)").length===3){
            
                let Q=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[0];
                let IA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No_B")}`.slice(0,1))];
                let IIA=Questions[0].split("(/)")[EXAM_FLOW_NO2].split("(^)")[Number(`${localStorage.getItem("Opt_No_B")}`.slice(1,2))];
                




                let SelectI=`<p class="I_M"></p>`;
                let SelectII=`<p class="I_M"></p>`;
            
                if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IA){
                    SelectI=`<p class="I_M_Select"></p>`;
                    SelectII=`<p class="I_M"></p>`;
            
                }else if(localStorage.getItem(`Select${Number(EXAM_FLOW_NO2)+1}`) === IIA){
                    SelectI=`<p class="I_M"></p>`;
                    SelectII=`<p class="I_M_Select"></p>`;
            
                }
            
                document.querySelector('.MCD_UB_T').innerHTML=`
                <div class="MCD_UB_T_T">Q${Number(localStorage.getItem("Q_NO"))+1}: ${Q}</div>
                <div class="MCD_UB_T_B">
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IA}')
            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')
                    
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')
                    
                    ">${SelectI} <p class="True_A">${IA}</p></div>
            
                    <!-- >>>-->
            
                    <div class="OPT" onclick="
                    localStorage.setItem('CONFIRM_Q_NO','')
                    localStorage.setItem('Select${Number(EXAM_FLOW_NO2)+1}','${IIA}')
            
                    localStorage.setItem('AFQ${Number(EXAM_FLOW_NO2)+1}','${IIA}')
                    localStorage.setItem('AQ${Number(localStorage.getItem("Q_NO"))+1}_Color','rgb(72, 226, 0)')
                    
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')
                    
                    ">${SelectII} <p class="False_A">${IIA}</p></div>
                    
                </div>`;
            }
            
        }
    }
    

},100)


//NEXT BUTTON
document.querySelector('.N_B').addEventListener("click",()=>{
    if(localStorage.getItem("Q_NO") != Questions[0].split("(/)").length-1){
        localStorage.setItem("Q_NO",Number(localStorage.getItem("Q_NO"))+1)


        localStorage.setItem('AQ_Color',Number(localStorage.getItem("Q_NO"))+1)

        localStorage.setItem('AQ_HTML','')
        localStorage.setItem('Confirm','False')
    }
})

//BACK/PREVIOUS BUTTON
document.querySelector('.P_B').addEventListener("click",()=>{

    

    if(localStorage.getItem("Q_NO") != "0"){
        localStorage.setItem("Q_NO",Number(localStorage.getItem("Q_NO"))-1)

        localStorage.setItem('AQ_Color',Number(localStorage.getItem("Q_NO"))+1)

        localStorage.setItem('AQ_HTML','')
        localStorage.setItem('Confirm','False')
    }

    
})



//SUBMIT BUTTUN
setInterval(()=>{
    if(document.querySelector('.S_B') != null){
        document.querySelector('.S_B').addEventListener("click",()=>{
        
            localStorage.setItem("Submit","True")
            document.querySelector('.CALA_page_B').style.display="block";
    
            document.querySelector('.CALA_page').innerHTML=`
            <div class="C_submit"><span class="confirm_N">${localStorage.getItem("IN")}</span> Confirm that you wish to submit before proceeding.</div>
            <div class="BC_BD">
                <p class="B_B">Back</p>
                <p class="C_B">Confirm</p>
            </div>
            `;
    
    
            localStorage.setItem("User_start","True")

            if(localStorage.getItem(`AFQ${Questions[0].split("(/)").length}`) === null){
                localStorage.setItem(`AFQ${Questions[0].split("(/)").length}`,null)
            }
            
        })
    }
},100)















setInterval(()=>{
    if(localStorage.getItem("Q_NO")==="0"){
        document.querySelector(".P_B").style.display="none";
    }else{
        document.querySelector(".P_B").style.display="block";
    }
    
    if(Questions.length != 0){
        if(Number(localStorage.getItem("Q_NO")) === Questions[0].split("(/)").length-1){
            document.querySelector(".S_B").style.display="block";
            document.querySelector(".N_B").style.display="none";
        }else{
            document.querySelector(".S_B").style.display="none";
            document.querySelector(".N_B").style.display="block";
        }
    }
    
},100)






localStorage.setItem('AQ_HTML','')
localStorage.setItem('Confirm','False')
setInterval(()=>{

    // Confirm==="False"
    if(Questions.length != 0 && localStorage.getItem("Confirm")==="False"){
        //Confirm="True";
        localStorage.setItem("Confirm",'True')

        for(let i=1;i<=Questions[0].split("(/)").length;i++){

            let AQ_Color="white";
            if(localStorage.getItem(`AQ${i}_Color`) != null){
                AQ_Color=localStorage.getItem(`AQ${i}_Color`);
            }else if(localStorage.getItem('Q_NO') > i-1){
                AQ_Color="red";
            }
            
            localStorage.setItem('AQ_HTML',localStorage.getItem('AQ_HTML')+`<p class="AQ AQ${i}"; onclick="
            localStorage.setItem('Q_NO',${i-1})
            localStorage.setItem('AQ_Color',${i})
            AQ_HTML='';
            Confirm='False';
            localStorage.setItem('AQ_HTML','')
            localStorage.setItem('Confirm','False')
            "; style="background-color: ${AQ_Color};"; data-id="${i}";>${i}</p>`)

            

            
        }

        document.querySelector('.MCD_UB_AQ').innerHTML=localStorage.getItem('AQ_HTML');

        

    
    }
    

    if(localStorage.getItem(`AQ_Color`) != null && document.querySelector(`.AQ${localStorage.getItem('AQ_Color')}`) != null){
        
        document.querySelector(`.AQ${localStorage.getItem('AQ_Color')}`).style.backgroundColor="green";
    }
    
},100)









//CALCULATE TOTAL WIN & LOSS
let length=0;
let VR_DB_HTML='';
setInterval(()=>{

    

    if(localStorage.getItem("Correct_choice") === null){
        localStorage.setItem("Correct_choice",0)
        localStorage.setItem("Wronge_choice",0)
        localStorage.setItem("Answer_choice","")
    }

    if(Questions.length != 0){


        if(Number(localStorage.getItem("Q_NO"))+1 === Questions[0].split("(/)").length && length === Questions[0].split("(/)").length && localStorage.getItem(`AFQ${Number(localStorage.getItem("Q_NO"))+1}`) != null || localStorage.getItem(`AFQ${Number(localStorage.getItem("Q_NO"))+1}`) != localStorage.getItem("C_Q_NO") && localStorage.getItem("C_Q_NO") != null){

            localStorage.setItem("C_Q_NO",localStorage.getItem(`AFQ${Number(localStorage.getItem("Q_NO"))+1}`))
            length=0;

            /*_____________________________________*/
            length=Questions[0].split("(/)").length;
            localStorage.setItem("Correct_choice",0)
            localStorage.setItem("Wronge_choice",0)
            localStorage.setItem("Answer_choice","")
            VR_DB_HTML='';


            for(let i=1;i<=Questions[0].split("(/)").length;i++){
                
                if(Questions[0].split("(/)")[i-1].split("(^)").length===5){

                    
                    if(Questions[0].split("(/)")[i-1].split("(^)")[1] === localStorage.getItem(`AFQ${i}`)){
                        localStorage.setItem("Correct_choice",Number(localStorage.getItem("Correct_choice"))+1)
                        
                        if(i != 1){
                            localStorage.setItem("Answer_choice",localStorage.getItem("Answer_choice")+"(/)"+localStorage.getItem(`AFQ${i}`))
                        }else{
                            localStorage.setItem("Answer_choice",localStorage.getItem(`AFQ${i}`))
                        }
                        
                    }else{
                        localStorage.setItem("Wronge_choice",Number(localStorage.getItem("Wronge_choice"))+1)
                        
                        if(i != 1){
                            localStorage.setItem("Answer_choice",localStorage.getItem("Answer_choice")+"(/)"+localStorage.getItem(`AFQ${i}`))
                        }else{
                            localStorage.setItem("Answer_choice",localStorage.getItem(`AFQ${i}`))
                        }
                    }


                    //VIEW RESULT
                    if(Questions[0].split("(/)")[i-1].split("(^)")[1] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="I_A"> ${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p></p> <p class="II_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="III_A">${Questions[0].split("(/)")[i-1].split("(^)")[3]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="IV_A">${Questions[0].split("(/)")[i-1].split("(^)")[4]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }else if(Questions[0].split("(/)")[i-1].split("(^)")[2] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="I_A"> ${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M_SelectRed"></p> <p class="II_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="III_A">${Questions[0].split("(/)")[i-1].split("(^)")[3]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="IV_A">${Questions[0].split("(/)")[i-1].split("(^)")[4]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }else if(Questions[0].split("(/)")[i-1].split("(^)")[3] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="I_A"> ${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="II_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            <div class="OPT"><p class="I_M_SelectRed"></p> <p class="III_A">${Questions[0].split("(/)")[i-1].split("(^)")[3]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="IV_A">${Questions[0].split("(/)")[i-1].split("(^)")[4]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }else if(Questions[0].split("(/)")[i-1].split("(^)")[4] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="I_A"> ${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="II_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="III_A">${Questions[0].split("(/)")[i-1].split("(^)")[3]}</p></div>
                            <div class="OPT"><p class="I_M_SelectRed"></p> <p class="IV_A">${Questions[0].split("(/)")[i-1].split("(^)")[4]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }else{
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M"></p> <p class="I_A"> ${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p></p> <p class="II_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="III_A">${Questions[0].split("(/)")[i-1].split("(^)")[3]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="IV_A">${Questions[0].split("(/)")[i-1].split("(^)")[4]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }

                }else if(Questions[0].split("(/)")[i-1].split("(^)").length===3){
                    
                    if(Questions[0].split("(/)")[i-1].split("(^)")[1] === localStorage.getItem(`AFQ${i}`)){
                        localStorage.setItem("Correct_choice",Number(localStorage.getItem("Correct_choice"))+1)
                        
                        if(i != 1){
                            localStorage.setItem("Answer_choice",localStorage.getItem("Answer_choice")+"(/)"+localStorage.getItem(`AFQ${i}`))
                        }else{
                            localStorage.setItem("Answer_choice",localStorage.getItem(`AFQ${i}`))
                        }
                        
                    }else{
                        localStorage.setItem("Wronge_choice",Number(localStorage.getItem("Wronge_choice"))+1)
                        
                        if(i != 1){
                            localStorage.setItem("Answer_choice",localStorage.getItem("Answer_choice")+"(/)"+localStorage.getItem(`AFQ${i}`))
                        }else{
                            localStorage.setItem("Answer_choice",localStorage.getItem(`AFQ${i}`))
                        }
                    }

                    //VIEW RESULT
                    if(Questions[0].split("(/)")[i-1].split("(^)")[1] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="True_A">${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="False_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            
                        </div>
                        
                        </div>
                        `;
                    }else if(Questions[0].split("(/)")[i-1].split("(^)")[2] === localStorage.getItem(`AFQ${i}`)){
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M_Select"></p> <p class="True_A">${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M_SelectRed"></p> <p class="False_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }else{
                        VR_DB_HTML+=`
                        <div class="MCD_UB_T">
                        
                        <div class="MCD_UB_T_T"> Q${i}: ${Questions[0].split("(/)")[i-1].split("(^)")[0]}</div>
                        <div class="MCD_UB_T_B">

                            <div class="OPT"><p class="I_M"></p> <p class="True_A">${Questions[0].split("(/)")[i-1].split("(^)")[1]}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="False_A">${Questions[0].split("(/)")[i-1].split("(^)")[2]}</p></div>
                            
                        </div>
                        
                    </div>
                        `;
                    }
                }

                

            }

            localStorage.setItem("VR_DB_HTML",VR_DB_HTML)

        }else if(Number(localStorage.getItem("Q_NO"))+1 != Questions[0].split("(/)").length){

            length=Questions[0].split("(/)").length;
            localStorage.setItem("Correct_choice",0)
            localStorage.setItem("Wronge_choice",0)
            localStorage.setItem("Answer_choice","")
            VR_DB_HTML='';
        }

    }
    

},100)











let STUDENT_DATA=[];


//ONVALUE STUDENT_INFORMATION
let STUDENT_INFORMATION=[];

/**/
setInterval(()=>{
    onValue(ref(db,"STUDENT_INFORMATION"),(snapshot)=>{
        STUDENT_INFORMATION=[]
        STUDENT_INFORMATION.push(snapshot.val())
    })
},100)


setInterval(()=>{
    

    if(STUDENT_INFORMATION.length != 0 && STUDENT_INFORMATION[0].STUDENT_INFORMATION != "" && `${STUDENT_INFORMATION[0].STUDENT_INFORMATION}`.includes("(//)")){


        if(STUDENT_DATA[0] != STUDENT_INFORMATION[0].STUDENT_INFORMATION.split("(//)")[Number(localStorage.getItem("EXAM_NO"))-1]){
            STUDENT_DATA[0]=STUDENT_INFORMATION[0].STUDENT_INFORMATION.split("(//)")[Number(localStorage.getItem("EXAM_NO"))-1];
        }

        
        
        

    }else if(STUDENT_INFORMATION.length != 0 && STUDENT_INFORMATION[0].STUDENT_INFORMATION != ""){
        STUDENT_DATA[0]=STUDENT_INFORMATION[0].STUDENT_INFORMATION;
    }




    

    if(STUDENT_DATA.length != 0 && STUDENT_DATA[0] != ""){

        if(STUDENT_DATA[0].split("(/)").length > 28){
            //VIEW_R_DB
            document.querySelector('.VIEW_R_DB').style.height=`${screen.height-80-70}px`;//VIEW_R_DB
        }else{
            //VIEW_R_DB
            document.querySelector('.VIEW_R_DB').style.height="";//VIEW_R_DB
        }

    }


},100)




//IF USER ALREADY SUBMIT
localStorage.setItem("ALREADY_SUBMIT","TRUE")
setInterval(()=>{

    if(`${STUDENT_DATA[0]}`.includes(`${localStorage.getItem("IR")}`) && localStorage.getItem("ALREADY_SUBMIT") === "TRUE"){
        for(let i=0; i <= STUDENT_DATA[0].split("(/)").length-1; i++){
            if(`${localStorage.getItem("IR")}`.toUpperCase() === `${STUDENT_DATA[0].split('(/)')[i].split('(^)')[1]}`.toUpperCase()){



                document.querySelector('.VR_D').style.display="block";
                document.querySelector('.VR_DB').innerHTML=STUDENT_DATA[0].split('(/)')[i].split('(^)')[3]+'<p class="User_finish">finish</p>';

                document.querySelector('.VR_DT').innerHTML=`
                <span class="blue_C">${STUDENT_DATA[0].split('(/)')[i].split('(^)')[0]}</span> you scored <span class="blue_C">${STUDENT_DATA[0].split('(/)')[i].split('(^)')[2]}/${Questions[0].split("(/)").length}.</span>  Please see your work below.
                `;

                localStorage.setItem("ALREADY_SUBMIT","FALSE")

            }
        }
    }


},100)



//Confirm_Submit
setInterval(()=>{
    
    if(Questions.length != 0){
        if(localStorage.getItem("Confirm_Submit") === "True"){

            document.querySelector('.VR_D').style.display="block";
            document.querySelector('.VR_DB').innerHTML=localStorage.getItem("VR_DB_HTML")+'<p class="User_finish">finish</p>';

            document.querySelector('.VR_DT').innerHTML=`
            <span class="blue_C">${localStorage.getItem("IN")}</span> you scored <span class="blue_C">${localStorage.getItem("Correct_choice")}/${Questions[0].split("(/)").length}.</span>  Please see your work below.
            `;


    

            if(STUDENT_INFORMATION.length !=0 && `${STUDENT_DATA[0]}`.includes(`${localStorage.getItem("IR")}`) != true){

                if(STUDENT_DATA.length != 0 && STUDENT_DATA[0] != ""){

                    update(ref(getDatabase(),`STUDENT_INFORMATION`),{
                        STUDENT_INFORMATION:`${STUDENT_INFORMATION[0].STUDENT_INFORMATION}(/)`+`${localStorage.getItem("IN")}`+`(^)`+`${localStorage.getItem("IR")}`+`(^)`+`${localStorage.getItem("Correct_choice")}`+`(^)`+`${localStorage.getItem("VR_DB_HTML")}`
                    })

                }else{

                    set(ref(getDatabase(),`STUDENT_INFORMATION`),{
                        STUDENT_INFORMATION:`${localStorage.getItem("IN")}`+`(^)`+`${localStorage.getItem("IR")}`+`(^)`+`${localStorage.getItem("Correct_choice")}`+`(^)`+`${localStorage.getItem("VR_DB_HTML")}`
                    })
                    
                }
                
            }
    
            


        }
    }

},100)





//USER FINISH BUTTON
//User_finish
setInterval(()=>{
    if(document.querySelector('.User_finish') != null){

        document.querySelector('.User_finish').addEventListener("click",()=>{

            if(STUDENT_INFORMATION.length !=0 && `${STUDENT_DATA[0]}`.includes(`${localStorage.getItem("IR")}`) === true){

                for(let i=1;i<=Questions[0].split("(/)").length;i++){


                    localStorage.removeItem(`Select${i}`)
                    localStorage.removeItem(`AFQ${i}`)
                    localStorage.removeItem(`AQ${i}_Color`)
                
                }

                localStorage.removeItem("Q_NO")
                localStorage.removeItem('AQ_Color')
                localStorage.removeItem("C_Q_NO")
                localStorage.removeItem("Confirm_Submit")
                localStorage.removeItem("VR_DB_HTML")
                localStorage.removeItem("Hr")
                localStorage.removeItem("Mt")
                localStorage.removeItem("Sd")
                localStorage.removeItem("User_start")
                localStorage.removeItem("Login")
                localStorage.removeItem("Submit")
                localStorage.removeItem("EXAM_NUMBER")
                

                localStorage.removeItem("IN")
                localStorage.removeItem("IR")
                localStorage.removeItem("IEC")
                localStorage.removeItem("EXAM_FLOW_NO2")
                localStorage.removeItem("C_EXAMTIME")
                localStorage.setItem("ALREADY_SUBMIT","TRUE")



                document.querySelector('.VR_D').style.display="none";

                document.querySelector('.MCD_FP').style.display="block";
                document.querySelector('.CALA_page_B').style.display="block";
                setTimeout(()=>{
                    document.querySelector('.MCD_FP').style.display="none";
                },5000)



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
            }
        })
    }
},100)
















/*







                            USER SECTION ^^^^^^

                            ADMIN SECTION VVVVV




    






*/

















//SUBMIT QUESTIONS TO DB
document.querySelector('.ADMIN_S_B').addEventListener("click",()=>{

    
    if(EXAM_NUMBER[0] != ""){
    /**/
        update(ref(getDatabase(),"EXAM_NUMBER"),{
            EXAM_NUMBER:EXAM_NUMBER[0].EXAM_NUMBER+1
        }).then(()=>{

            //STUDENT_INFORMATION
            if(SECTIONS_Q.length != 0 && SECTIONS_Q[0].SECTIONS_Q != ""){

                update(ref(getDatabase(),`STUDENT_INFORMATION`),{
                    STUDENT_INFORMATION:`${STUDENT_INFORMATION[0].STUDENT_INFORMATION}`+`(//)`
                })

            }else{
                set(ref(getDatabase(),`STUDENT_INFORMATION`),{
                    STUDENT_INFORMATION:`${STUDENT_INFORMATION[0].STUDENT_INFORMATION}`
                })
            }


            //SECTIONS_Q
            if(SECTIONS_Q.length != 0 && SECTIONS_Q[0].SECTIONS_Q != ""){

                //SECTIONS_Q
                update(ref(getDatabase(),`SECTIONS_Q`),{
                    SECTIONS_Q:`${SECTIONS_Q[0].SECTIONS_Q}`+`(//)`+localStorage.getItem("ALL_Questions")
                }).then(()=>{

                    for(let i=1;i < Number(localStorage.getItem("ALL_Questions_length"));i++){

                        localStorage.removeItem(`SQ${i}`)
                        localStorage.removeItem(`SelectType${i}`)
                    
                    }



                    localStorage.removeItem("SQ_N")
                    localStorage.removeItem("SECTIONS_Q_C")

                    localStorage.removeItem("ALL_Questions")
                    localStorage.removeItem("ALL_Questions_length")
                    localStorage.removeItem('ADMIN_AQ_Color')

                    document.querySelector('.ADD_Q_D_QI').value="";
                    document.querySelector('.ADD_Q_D_QI_I').value="";
                    document.querySelector('.ADD_Q_D_QI_II').value="";
                    document.querySelector('.ADD_Q_D_QI_III').value="";
                    document.querySelector('.ADD_Q_D_QI_IV').value="";
                
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')

                    localStorage.removeItem("SQ_N")

                    localStorage.setItem("HOUR_I","00")
                    localStorage.setItem("MINUTE_I","00")
                    localStorage.setItem("SECOND_I","00")

                    

                    document.querySelector('.ADMIN_MCD_UB_AQ').innerHTML="";


                    document.querySelector('.HOUR_I').value="";
                    document.querySelector('.MINUTE_I').value="";
                    document.querySelector('.SECOND_I').value="";
                    
                })

                
            }else{
                set(ref(getDatabase(),`SECTIONS_Q`),{
                    SECTIONS_Q:localStorage.getItem("ALL_Questions")
                }).then(()=>{

                    for(let i=1;i < Number(localStorage.getItem("ALL_Questions_length"));i++){

                        localStorage.removeItem(`SQ${i}`)
                        localStorage.removeItem(`SelectType${i}`)
                    
                    }



                    localStorage.removeItem("SQ_N")
                    localStorage.removeItem("SECTIONS_Q_C")

                    localStorage.removeItem("ALL_Questions")
                    localStorage.removeItem("ALL_Questions_length")
                    localStorage.removeItem('ADMIN_AQ_Color')

                    document.querySelector('.ADD_Q_D_QI').value="";
                    document.querySelector('.ADD_Q_D_QI_I').value="";
                    document.querySelector('.ADD_Q_D_QI_II').value="";
                    document.querySelector('.ADD_Q_D_QI_III').value="";
                    document.querySelector('.ADD_Q_D_QI_IV').value="";
                
                    localStorage.setItem('AQ_HTML','')
                    localStorage.setItem('Confirm','False')

                    localStorage.removeItem("SQ_N")

                    localStorage.setItem("HOUR_I","00")
                    localStorage.setItem("MINUTE_I","00")
                    localStorage.setItem("SECOND_I","00")


                    document.querySelector('.ADMIN_MCD_UB_AQ').innerHTML="";


                    document.querySelector('.HOUR_I').value="";
                    document.querySelector('.MINUTE_I').value="";
                    document.querySelector('.SECOND_I').value="";
                    
                })
            }

            

            //SET EXAMTIME
            if(EXAMTIME.length != 0 && EXAMTIME[0].EXAMTIME != ""){
                update(ref(getDatabase(),`EXAMTIME`),{
                    EXAMTIME:`${EXAMTIME[0].EXAMTIME}`+`(/)`+`${localStorage.getItem("HOUR_I")}`+`(^)`+`${localStorage.getItem("MINUTE_I")}`+`(^)`+`${localStorage.getItem("SECOND_I")}`
                })
            }else{
                set(ref(getDatabase(),`EXAMTIME`),{
                    EXAMTIME:`${localStorage.getItem("HOUR_I")}`+`(^)`+`${localStorage.getItem("MINUTE_I")}`+`(^)`+`${localStorage.getItem("SECOND_I")}`
                })
            }

            

        })

    }


})








let QFS_HTML="";
let index=0;
let C_EX_NO=0;
setInterval(()=>{
    if(Questions.length != 0){

        

        if(Questions[0].split("(/)").length-1 != index){
            QFS_HTML="";
            for(let i=0; i <= Questions[0].split("(/)").length-1; i++){

                index =i;
                C_EX_NO=Number(localStorage.getItem("EXAM_NO"));
        
                if(Questions[0].split("(/)")[i].split("(^)").length===5){
        
                    let Q=Questions[0].split("(/)")[i].split("(^)")[0];
                    let IA=Questions[0].split("(/)")[i].split("(^)")[1];
                    let IIA=Questions[0].split("(/)")[i].split("(^)")[2];
                    let IIIA=Questions[0].split("(/)")[i].split("(^)")[3];
                    let IVA=Questions[0].split("(/)")[i].split("(^)")[4];
        
                    QFS_HTML+=`
                    <div class="TQFS_UB_T">
                                
                        <div class="MCD_UB_T_T"> Q${i+1}: ${Q}</div>
                        <div class="MCD_UB_T_B">
        
                            
                            <div class="OPT"><p class="I_M_Select"></p> <p class="I_A">${IA}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="II_A">${IIA}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="III_A">${IIIA}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="IV_A">${IVA}</p></div>
                            
                        </div>
                    </div>
                    `;
        
                    
                }else if(Questions[0].split("(/)")[i].split("(^)").length===3){
        
                    let Q=Questions[0].split("(/)")[i].split("(^)")[0];
                    let IA=Questions[0].split("(/)")[i].split("(^)")[1];
                    let IIA=Questions[0].split("(/)")[i].split("(^)")[2];
                    
                    QFS_HTML+=`
                    <div class="TQFS_UB_T">
                                
                        <div class="MCD_UB_T_T"> Q${i+1}: ${Q}</div>
                        <div class="MCD_UB_T_B">
        
                            
                            <div class="OPT"><p class="I_M_Select"></p> <p class="True_A">${IA}</p></div>
                            <div class="OPT"><p class="I_M"></p> <p class="False_A">${IIA}</p></div>
                            
                            
                        </div>
                    </div>
                    `;
        
                }
                
            }

            document.querySelector(".TQFS_DB").innerHTML=QFS_HTML+"<p class='VIEW_Q_D_BACK'>Back</p>";
            document.querySelector(".TQFS_DT").innerHTML=`Qeustions for section ${Number(localStorage.getItem("EXAM_NO"))}`;

        }else if(C_EX_NO != Number(localStorage.getItem("EXAM_NO"))){

            index=0;
            C_EX_NO=0;
        }
    }
    
},100)



//VIEW_Q_D_BACK
setInterval(()=>{

    document.querySelector(".VIEW_Q_D_BACK").addEventListener("click",()=>{
        document.querySelector(".VIEW_Q_D").style.display="none";
    })

},100)




















let VR_HTML="";
let index_VR=0;
let C_EX_NO_VR=0;
setInterval(()=>{

    

    if(STUDENT_DATA.length != 0 && STUDENT_DATA[0] != undefined && STUDENT_DATA[0] != ""){

        if(STUDENT_DATA[0].split("(/)").length-1 != index_VR){

            VR_HTML="";
            C_EX_NO_VR=Number(localStorage.getItem("EXAM_NO"));


            for(let i=0; i <= STUDENT_DATA[0].split("(/)").length-1; i++){

                index_VR=i;
                
                

                VR_HTML+=`
                <P class="DB_SN">${i+1}</P>
                <P class="DB_SF">${STUDENT_DATA[0].split("(/)")[i].split("(^)")[0]}</P>
                <P class="DB_RN">${STUDENT_DATA[0].split("(/)")[i].split("(^)")[1]}</P>
                <P class="DB_S">${STUDENT_DATA[0].split("(/)")[i].split("(^)")[2]}</P>
                <p class="DB_VSW" data-id="${i}"> view </p>
                `;
                
            }

            document.querySelector(".VIEW_R_DB").innerHTML=VR_HTML+'<p class="ADMIN_VR_BACK">Back</p>';


            const DB_VSW=document.querySelectorAll('.DB_VSW');
            DB_VSW.forEach((e)=>{
                    e.addEventListener('click',()=>{
                        let dataDashed_Id=Number(e.dataset.id);
                        
                        localStorage.setItem('ADMIN_IN',`${STUDENT_DATA[0].split('(/)')[dataDashed_Id].split('(^)')[0]}`)
                        localStorage.setItem('ADMIN_Correct_choice',`${STUDENT_DATA[0].split('(/)')[dataDashed_Id].split('(^)')[2]}`)


                        document.querySelector('.VR_D').style.display="block";
                        document.querySelector('.VR_DB').innerHTML=STUDENT_DATA[0].split('(/)')[dataDashed_Id].split('(^)')[3]+'<p class="ADMIN_finish">Back</p>';

                        

                        document.querySelector('.VR_DT').innerHTML=`
                        <span class="blue_C">${localStorage.getItem("ADMIN_IN")}</span> scored <span class="blue_C">${localStorage.getItem("ADMIN_Correct_choice")}/${Questions[0].split("(/)").length}.</span>  View his/her work below.
                        `;



                        document.querySelector(".ADMIN_finish").addEventListener("click",()=>{
                            localStorage.removeItem("ADMIN_Confirm_Submit")
                            document.querySelector('.VR_D').style.display="none";
                        })
                    })
            })

        }else if(C_EX_NO_VR != Number(localStorage.getItem("EXAM_NO"))){

            index_VR=0;
            C_EX_NO_VR=0;

        }
    }else{
        document.querySelector(".VIEW_R_DB").innerHTML='<p class="ADMIN_VR_BACK">Back</p>';
        index_VR=0;
        C_EX_NO_VR=0;
    }
    
    

    document.querySelector(".ADMIN_VR_BACK").addEventListener("click",()=>{
        
        document.querySelector('.VIEW_R_D').style.display="none";
    })


},100)

















//logout_B
setInterval(()=>{
    if(Questions.length != 0){
        document.querySelector('.logout_B').addEventListener("click",()=>{
            
            for(let i=1;i < Number(localStorage.getItem("ALL_Questions_length"));i++){

                localStorage.removeItem(`SQ${i}`)
                localStorage.removeItem(`SelectType${i}`)
            
            }



            localStorage.removeItem("SQ_N")
            localStorage.removeItem("SECTIONS_Q_C")

            localStorage.removeItem("ALL_Questions")
            localStorage.removeItem("ALL_Questions_length")
            localStorage.removeItem('ADMIN_AQ_Color')

            localStorage.removeItem("Login")

            document.querySelector('.ADD_Q_D_QI').value="";
            document.querySelector('.ADD_Q_D_QI_I').value="";
            document.querySelector('.ADD_Q_D_QI_II').value="";
            document.querySelector('.ADD_Q_D_QI_III').value="";
            document.querySelector('.ADD_Q_D_QI_IV').value="";
        
            localStorage.setItem('AQ_HTML','')
            localStorage.setItem('Confirm','False')

            localStorage.removeItem("SQ_N")

            localStorage.setItem("HOUR_I","00")
            localStorage.setItem("MINUTE_I","00")
            localStorage.setItem("SECOND_I","00")


            document.querySelector('.ADMIN_MCD_UB_AQ').innerHTML="";


            document.querySelector('.HOUR_I').value="";
            document.querySelector('.MINUTE_I').value="";
            document.querySelector('.SECOND_I').value="";
            
            



            document.querySelector('.VR_D').style.display="none";

            document.querySelector('.MCD_FP').style.display="block";
            document.querySelector('.CALA_page_B').style.display="block";
            setTimeout(()=>{
                document.querySelector('.MCD_FP').style.display="none";
            },5000)



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

        })
    }
},100)








//CHANGE_P_SubmitB
setInterval(()=>{
    if(PASSWORD.length != 0){
        document.querySelector('.CHANGE_P_SubmitB').addEventListener("click",()=>{


            if(document.querySelector('.NP').value === ""){

                document.querySelector('.NP').style.outline="2px solid red";

            }else{

                document.querySelector('.NP').style.outline="2px solid transparent";


                update(ref(getDatabase(),`PASSWORD`),{
                    PASSWORD:`${document.querySelector('.NP').value}`
                })
            }

        })
    }
})















//FIRST PAGE
let MCD_FP_C="TRUE";
setTimeout(()=>{
    if(EXAM_NUMBER.length != 0 && MCD_FP_C === "TRUE"){
        MCD_FP_C="FALSE";
        document.querySelector('.MCD_FP').style.display="none";
    }
    
},100)