import "./style.css";

const initialFact = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    date: "2021-01-01",
    category: "technology",
    source: "https://opensource.fb.com/",
  },
  {
    id: 2,
    text: "Lisbon is the capital of Portugal",
    category: "society",
    date: "2021-01-01",
    source: "https://en.wikipedia.org/wiki/Lisbon",
  },
];

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

function App() {
  const appTitle = "Today I Learned";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            height="68"
            width="68"
            alt="Today I Learned Logo"
          />
          <h1>{appTitle}</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" height="68" width="68" alt="Today I Learned Logo" />
        <h1>Today I Learned</h1>
      </div>
      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function FactList() {
  const facts = initialFact;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
}

function Fact({ fact }) {
  return (
    <li className="fact" key={fact.id}>
      <p>
        {fact.text}
        <a className="source" href={fact.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        technology
      </span>
      <div className="vote-buttons">
        <button>👍 24</button>
        <button>🤯 9</button>
        <button>⛔ 4</button>
      </div>
    </li>
  );
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li class="category">
          <button class="btn btn-all-categories">All</button>
        </li>
        {CATEGORIES.map((category) => (
          <Category key={category.name} category={category} />
        ))}
      </ul>
    </aside>
  );
}

function Category({ category }) {
  return (
    <li class="category">
      <button
        class="btn btn-category"
        style={{ backgroundColor: category.color }}
      >
        {category.name}
      </button>
    </li>
  );
}

export default App;
