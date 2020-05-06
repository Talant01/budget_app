'use strict';

let start = document.querySelector('#start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('optionalexpenses-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncomeLabel = document.querySelector('choose-income-label'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('label')[0],
    percent = document.querySelector('label')[2],
    year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day');

    
