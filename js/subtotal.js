const subamoun = document.getElementById('Subtotal-amount');
const subamounstring = subamoun.innerText;
const subamounumber = parseInt(subamounstring);
  
const totalsub = subamounumber + intotal;

subamoun.innerText = totalsub;