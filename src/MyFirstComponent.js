import "./FirstComponentStyle.css";

export default function MyFirstComponent() {
  const x = 10;

  const person = {
    name: "Ahmad",
    email: "yarob@gmail.com",
  };

  const elmStyle = {
    backgroundColor: "blue",
    fontSize: "20px",
    boxShadow: "0px 20px 10px black",
  };
  return (
    <div>
      <div>
        <h1 style={elmStyle}>{person.name} Hello World x + 10</h1>
        <h3 className={"active redBg"}>{person.email}</h3>
        <h2 className={"active"} style={elmStyle}>
          hi
        </h2>

        <h1 className={person.name == "Yarob" ? "redBg" : "greenBg"}>
          Check Name
        </h1>
        <button onClick={sayHello}>Click Me</button>
      </div>

      <div></div>
    </div>
  );
}

function sayHello() {
  alert("hello");
}
