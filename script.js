//DATA
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// LOAD DATA FROM SUPABASE
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://cwjxfxcfeikridmtoles.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3anhmeGNmZWlrcmlkbXRvbGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyOTAyODEsImV4cCI6MjAwNzg2NjI4MX0.btblDvGHzDMOsGeKS6S7Uak83bqnQz4CkYUlWudr2o0",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3anhmeGNmZWlrcmlkbXRvbGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyOTAyODEsImV4cCI6MjAwNzg2NjI4MX0.btblDvGHzDMOsGeKS6S7Uak83bqnQz4CkYUlWudr2o0",
      },
    }
  );
  const data = await res.json();
  const filteredData = data.filter((fact) => fact.category === "society");
  createFactList(data);
}

//DOM ELEMENTS
const btn = document.querySelector(".btn-open");
const btnCategory = document.querySelectorAll(".category");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

/*btnCategory.addEventListener("click", () => {
  const currentCategory = btnCategory.innerHTML;
  console.log(currentCategory);
});*/

btn.addEventListener("click", () => {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

function createFactList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) =>
      `<li class="fact">
    <p>
    ${fact.text}
    <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)</a
    >
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }")}"
    >${fact.category}</span
  >
    </li>`
  );

  htmlArr.forEach((html) => {
    factsList.insertAdjacentHTML("afterbegin", html);
  });
}
