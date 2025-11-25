import { useState } from "react";

export default function Atv04() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Atividade React - Aula 04</h1>

      <Toolbar />
      <Gallery />
      <Counter />
      <Form />
      <MovingDot />
      <Form2 />
      <Form3 />
      <List />
      <List2 />
      <ShapeEditor />
      <CounterList />
      <List3 />
      <List4 />
      <BucketList />
    </div>
  );
}

function Toolbar() {
  function playMovie() {
    alert("Reproduzindo filme...");
  }
  function uploadPhoto() {
    alert("Enviando imagem...");
  }
  return (
    <div style={{ marginBottom: 20 }}>
      <Button onClick={playMovie} label="Play" />
      <Button onClick={uploadPhoto} label="Upload" />
    </div>
  );
}

function Button({ onClick, label }) {
  return (
    <button onClick={onClick} style={{ marginRight: 10 }}>
      {label}
    </button>
  );
}

function Gallery() {
  const images = [
    "https://i.imgur.com/Mx7dA2Y.jpg",
    "https://i.imgur.com/ZF6s192m.jpg",
    "https://i.imgur.com/aTtVpES.jpg",
  ];
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Gallery</h2>
      <img src={images[index]} width={250} />
      <br />
      <button onClick={next}>Próxima</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Counter</h2>
      <button onClick={() => setCount((c) => c + 1)}>Incrementar</button>
      <p>Valor: {count}</p>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Form</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Digitado: {text}</p>
    </div>
  );
}

function MovingDot() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function move(e) {
    const rect = e.target.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      onMouseMove={move}
      style={{
        width: 200,
        height: 150,
        background: "#ddd",
        position: "relative",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          background: "red",
          borderRadius: "50%",
          position: "absolute",
          left: pos.x - 6,
          top: pos.y - 6,
        }}
      ></div>
    </div>
  );
}

function Form2() {
  const [person, setPerson] = useState({ name: "", last: "" });

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Form2</h2>
      <input
        placeholder="Nome"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        placeholder="Sobrenome"
        value={person.last}
        onChange={(e) => setPerson({ ...person, last: e.target.value })}
      />
      <p>{person.name + " " + person.last}</p>
    </div>
  );
}

function Form3() {
  const [person, setPerson] = useState({
    name: "",
    artwork: { title: "", city: "" },
  });

  function updateField(field, value) {
    setPerson({
      ...person,
      artwork: { ...person.artwork, [field]: value },
    });
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Form3</h2>
      <input
        placeholder="Nome"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
      />
      <input
        placeholder="Título"
        value={person.artwork.title}
        onChange={(e) => updateField("title", e.target.value)}
      />
      <input
        placeholder="Cidade"
        value={person.artwork.city}
        onChange={(e) => updateField("city", e.target.value)}
      />

      <p>
        {person.name} - {person.artwork.title} ({person.artwork.city})
      </p>
    </div>
  );
}

function List() {
  const initial = ["Maçã", "Banana", "Pera"];
  const [items, setItems] = useState(initial);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>List</h2>
      {items.map((i, idx) => (
        <div key={idx}>{i}</div>
      ))}
    </div>
  );
}

function List2() {
  const [items, setItems] = useState(["A", "B", "C"]);

  function add() {
    const newItem = prompt("Novo item:");
    if (newItem) setItems([...items, newItem]);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>List2</h2>
      <button onClick={add}>Adicionar</button>
      {items.map((i, idx) => (
        <div key={idx}>{i}</div>
      ))}
    </div>
  );
}

function ShapeEditor() {
  const [shapes, setShapes] = useState([
    { id: 1, type: "circle" },
    { id: 2, type: "square" },
  ]);

  function toggle(id) {
    setShapes(
      shapes.map((s) =>
        s.id === id
          ? { ...s, type: s.type === "circle" ? "square" : "circle" }
          : s
      )
    );
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>ShapeEditor</h2>
      {shapes.map((s) => (
        <div
          key={s.id}
          onClick={() => toggle(s.id)}
          style={{ cursor: "pointer" }}
        >
          {s.type}
        </div>
      ))}
    </div>
  );
}

function CounterList() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function inc(i) {
    setCounters(counters.map((n, idx) => (idx === i ? n + 1 : n)));
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>CounterList</h2>
      {counters.map((c, i) => (
        <button key={i} onClick={() => inc(i)}>
          {c}
        </button>
      ))}
    </div>
  );
}

function List3() {
  const [list, setList] = useState([
    { id: 1, text: "item 1" },
    { id: 2, text: "item 2" },
  ]);

  function remove(id) {
    setList(list.filter((i) => i.id !== id));
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>List3</h2>
      {list.map((i) => (
        <div key={i.id}>
          {i.text} <button onClick={() => remove(i.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

function List4() {
  const [list, setList] = useState([1, 2, 3]);

  function incrementAll() {
    setList(list.map((n) => n + 1));
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>List4</h2>
      <button onClick={incrementAll}>Incrementar Todos</button>
      <p>{JSON.stringify(list)}</p>
    </div>
  );
}

function BucketList() {
  const [items, setItems] = useState([
    { id: 1, text: "Viajar", done: false },
    { id: 2, text: "Estudar React", done: false },
  ]);

  function toggle(id) {
    setItems(
      items.map((i) =>
        i.id === id ? { ...i, done: !i.done } : i
      )
    );
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>BucketList</h2>
      {items.map((i) => (
        <div
          key={i.id}
          onClick={() => toggle(i.id)}
          style={{
            cursor: "pointer",
            textDecoration: i.done ? "line-through" : "none",
          }}
        >
          {i.text}
        </div>
      ))}
    </div>
  );
}
