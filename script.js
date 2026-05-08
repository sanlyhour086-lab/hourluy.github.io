// ======================
// LOGIN
// ======================

function login(){

  let username =
    document.getElementById("username").value;

  let password =
    document.getElementById("password").value;

  if(username !== "" && password !== ""){

    window.location.href = "dashboard.html";

  }
  else{

    alert("Please enter username and password");

  }

}



// ======================
// SAVE INCOME
// ======================

function addIncome(){

  let incomeText =
    document.getElementById("incomeText").value;

  let incomeAmount =
    document.getElementById("incomeAmount").value;


  if(incomeText !== "" && incomeAmount !== ""){

    let transaction = {

      type: "Income",

      name: incomeText,

      amount: parseFloat(incomeAmount)

    };


    let transactions =
      JSON.parse(localStorage.getItem("transactions"))
      || [];


    transactions.push(transaction);


    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );


    alert("Income Saved");


    document.getElementById("incomeText").value = "";

    document.getElementById("incomeAmount").value = "";

  }
  else{

    alert("Please fill all fields");

  }

}



// ======================
// SAVE EXPENSE
// ======================

function addExpense(){

  let expenseText =
    document.getElementById("expenseText").value;

  let expenseAmount =
    document.getElementById("expenseAmount").value;


  if(expenseText !== "" && expenseAmount !== ""){

    let transaction = {

      type: "Expense",

      name: expenseText,

      amount: parseFloat(expenseAmount)

    };


    let transactions =
      JSON.parse(localStorage.getItem("transactions"))
      || [];


    transactions.push(transaction);


    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );


    alert("Expense Saved");


    document.getElementById("expenseText").value = "";

    document.getElementById("expenseAmount").value = "";

  }
  else{

    alert("Please fill all fields");

  }

}



// ======================
// LOAD DASHBOARD
// ======================

function loadDashboard(){

  let transactions =
    JSON.parse(localStorage.getItem("transactions"))
    || [];


  let income = 0;

  let expense = 0;


  transactions.forEach(function(item){

    if(item.type === "Income"){

      income += item.amount;

    }
    else{

      expense += item.amount;

    }

  });


  let balance = income - expense;


  if(document.getElementById("balance")){

    document.getElementById("balance")
    .innerHTML =
    "$" + balance;

  }


  if(document.getElementById("incomeTotal")){

    document.getElementById("incomeTotal")
    .innerHTML =
    "$" + income;

  }


  if(document.getElementById("expenseTotal")){

    document.getElementById("expenseTotal")
    .innerHTML =
    "$" + expense;

  }

}



// ======================
// LOAD STATEMENT
// ======================

function loadStatement(){

  let transactions =
    JSON.parse(localStorage.getItem("transactions"))
    || [];


  let table =
    document.getElementById("statementList");


  if(table){

    table.innerHTML = "";


    transactions.forEach(function(item){

      table.innerHTML += `

      <tr>

        <td>${item.type}</td>

        <td>${item.name}</td>

        <td>$${item.amount}</td>

      </tr>

      `;

    });

  }

}



// ======================
// CALCULATOR
// ======================

function appendValue(value){

  document.getElementById("calcDisplay").value += value;

}


function calculate(){

  let display =
    document.getElementById("calcDisplay");


  display.value =
    eval(display.value);

}


function clearDisplay(){

  document.getElementById("calcDisplay").value = "";

}



// ======================
// AUTO LOAD
// ======================

loadDashboard();

loadStatement();