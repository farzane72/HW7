function topSalaries(salaries){
    let maxSalary=0;
    let nameUser="";
    let array=[];
    for(let value of Object.values(salaries)){
        array.push(value);
    }
    maxSalary=Math.max(...array);
    for(let [key,value] of Object.entries(salaries)){
       
         if(maxSalary===value)
         {
           return key;
         }
        
    }
    //------------my first way--------------------
        // for(let [key,value] of Object.entries(salaries)){
        
       
        //      if(maxSalary < value)
        //      {
        //            maxSalary=value;
        //         nameUser=key;
        //      }
            
        // }
        // return nameUser;
   //-------------------------------------------------------------
    }
    
    let salaries={
        "john":100,
        "pete":300,
        "mary":250
    }
    let NametopSalaries=topSalaries(salaries);
    console.log(NametopSalaries);