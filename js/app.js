class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  //submit budget method
  submitBudgetForm() {
    const __this = this;
    const value = this.budgetInput.value;

    if (value==='' || value < 0) {
      __this.budgetFeedback.classList.add('showItem');
      __this.budgetFeedback.innerHTML = '<p>Value cannot be empty or negative</p>';
      setTimeout(function() {
        __this.budgetFeedback.classList.remove('showItem');
      }, 4000);
    } else {
      __this.budgetAmount.textContent = value;
      __this.budgetInput.value = '';
      __this.showBalance();
    }
  }
  
  // Show balance
  showBalance() {
    const expense = this.totalExpense();
    const total = parseInt()
  }
  // Total expense
  totalExpense() {
    let total = 400;
    return total;
  }
}

function eventListeners(){
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  // Neew instance of UI class
  const ui =  new UI();

  // Budget form submit button
  budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();
    ui.submitBudgetForm();
  })

// Expense form submit button
  expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
  })

  // Expense click
  expenseList.addEventListener("click", function() {

  })

}

document.addEventListener('DOMContentLoaded', function() {
  eventListeners();
})