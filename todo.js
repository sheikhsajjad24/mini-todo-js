  const submt = document.getElementById("sub");
 
  const userInp = document.getElementById("inp");
 
  const unList  = document.getElementById("unOrder");
   
   const clear = document.getElementById("clr");


  
  
  submt.addEventListener("click",function(e){
        e.preventDefault();
        //     alert("sajjad");
          //  result.innerHTML = inputt.value;
          const val = userInp.value.trim();
    
        if(val == ""){
          alert("please fll the input field first");
          return;
                }
          //   alert(val)
        const lists = document.createElement("li");
      lists.textContent = val+ "";

      
      const doneBtn= document.createElement("button");
      doneBtn.textContent = "DONE"

      
      const delBtn = document.createElement("button");
      delBtn.textContent = "DELETE";
      
     userInp.value = "";
   
      lists.appendChild(doneBtn)

      lists.appendChild(delBtn);

     unList.appendChild(lists);
       
    //val =  "";  
    
     
    doneBtn.addEventListener("click",function(){
        lists.classList.toggle("completed"); 
     
      //alert("sssssssssss");
    })
    delBtn.addEventListener("click",function(){
      lists.remove();
    })
       

        })

     
        
   clear.addEventListener("click",function(){
     //  alert("sajjajjjj")
    unList.innerHTML = "";
    })
        
 
