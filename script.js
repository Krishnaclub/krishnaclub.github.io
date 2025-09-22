// Highlight today's schedule if within Ramleela dates
document.addEventListener("DOMContentLoaded", () => {
  const start = new Date("2025-09-18");
  const end = new Date("2025-10-02");
  const today = new Date();

  if (today >= start && today <= end) {
    const days = document.querySelectorAll("#schedule-list li");
    days.forEach(li => {
      if (li.innerText.includes(today.getDate())) {
        li.style.background = "#ffe066";
        li.style.fontWeight = "bold";
      }
    });
  }
});
