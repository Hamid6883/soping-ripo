document.getElementById('btn-phone-plus').addEventListener('click',function(){
    // get the caseNumber
  const caseNumberFild = document.getElementById('phone-number-field');
  const caseNumberstring = caseNumberFild.value;
  const previuscaseNumber =parseInt(caseNumberstring);
  const newcaseNumber = previuscaseNumber +1 ; 
// add new case in caseNumber
  caseNumberFild.value = newcaseNumber;


  const totalcoast = document.getElementById('price-phon');
  const totalcoastnumber = totalcoast.innerText;
  const intotal = parseInt(totalcoastnumber);

  const alltotal = 1219 * newcaseNumber;
  totalcoast.innerText = alltotal;



const subamoun = document.getElementById('Subtotal-amount');
const subamounstring = subamoun.innerText;
const subamounumber = parseInt(subamounstring);
  
const totalsub = subamounumber + 1200;

subamoun.innerText = totalsub;


  
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
  // get the caseNumber
  const caseNumberFild = document.getElementById('phone-number-field');
  const caseNumberstring = caseNumberFild.value;
  const previuscaseNumber =parseInt(caseNumberstring);
  
  const newcaseNumber = previuscaseNumber - 1 ;
// add new case in caseNumber
  caseNumberFild.value= newcaseNumber;

  const totalcoast = document.getElementById('price-phon');
  const totalcoastnumber = totalcoast.innerText;
  const intotal = parseInt(totalcoastnumber);

  const alltotal = 1219 * newcaseNumber;

  totalcoast.innerText = alltotal;






  const subamoun = document.getElementById('Subtotal-amount');
const subamounstring = subamoun.innerText;
const subamounumber = parseInt(subamounstring);
  
const totalsub = subamounumber + 1200;

subamoun.innerText = totalsub;

})
