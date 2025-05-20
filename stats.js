document.addEventListener("DOMContentLoaded", () => {
const currentUser = localStorage.getItem("currentUser");
const itemsKey = `${currentUser}_items`;
const items = JSON.parse(localStorage.getItem(itemsKey)) || [];

const categoryTotals = {};
items.forEach(item => {
  const category = item.category;
  const amount = Number(item.price);
  categoryTotals[category] = (categoryTotals[category] || 0) + amount;
});

const labels = Object.keys(categoryTotals);
const data = Object.values(categoryTotals);
const backgroundColors = [
  "#f98282", 
  "#f7e188", 
  "#ffc0cb", 
  "#a3d585", 
  "#f0afed", 
  "#f0bb6b", 
];

const ctx = document.getElementById("spendingChart").getContext("2d");
new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: labels,
    datasets: [{ data: data,backgroundColor: backgroundColors
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true}}
  }
});
});
