let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const expenseForm = document.getElementById("expenseForm");
const expenseTable = document.getElementById("expenseTable");
const totalAmount = document.getElementById("totalAmount");
const clearBtn = document.getElementById("clearBtn");

function formatCurrency(amount) {
    return amount.toLocaleString("en-IN");
}

expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("expenseName").value;
    const amount = Number(document.getElementById("expenseAmount").value);
    const category = document.getElementById("expenseCategory").value;

    expenses.push({ name, amount, category });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    expenseForm.reset();
    renderExpenses();
});

function renderExpenses() {
    expenseTable.innerHTML = "";
    let total = 0;

    expenses.forEach(exp => {
        total += exp.amount;

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${exp.name}</td>
            <td>
                <span class="badge ${exp.category.toLowerCase()}">
                    ${exp.category}
                </span>
            </td>
            <td>₹${formatCurrency(exp.amount)}</td>
        `;
        expenseTable.appendChild(row);
    });

    totalAmount.textContent = `₹${formatCurrency(total)}`;
}

clearBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all expenses?")) {
        expenses = [];
        localStorage.removeItem("expenses");
        renderExpenses();
    }
});

renderExpenses();
