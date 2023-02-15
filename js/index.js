document.getElementById('btn-case-plus').addEventListener('click',function(){
    // get the caseNumber
  const caseNumberFild = document.getElementById('case-number-field');
  const caseNumberstring = caseNumberFild.value;
  const previuscaseNumber =parseInt(caseNumberstring);
  const newcaseNumber = previuscaseNumber +1 ; 
// add new case in caseNumber
  caseNumberFild.value = newcaseNumber;


  const totalcoast = document.getElementById('price');
  const totalcoastnumber = totalcoast.innerText;
  const intotal = parseInt(totalcoastnumber);

  const alltotal = 59 * newcaseNumber;
  totalcoast.innerText = alltotal;
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
  // get the caseNumber
  const caseNumberFild = document.getElementById('case-number-field');
  const caseNumberstring = caseNumberFild.value;
  const previuscaseNumber =parseInt(caseNumberstring);
  
  const newcaseNumber = previuscaseNumber - 1 ;
// add new case in caseNumber
  caseNumberFild.value= newcaseNumber;

  const totalcoast = document.getElementById('price');
  const totalcoastnumber = totalcoast.innerText;
  const intotal = parseInt(totalcoastnumber);

  const alltotal = 59 * newcaseNumber;

  totalcoast.innerText = alltotal;

 

 


  
  
})



