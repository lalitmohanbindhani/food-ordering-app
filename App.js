const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "subParent" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h2 tag"),
  ]),
  React.createElement("div", { id: "subParent" }, [
    React.createElement("h1", {}, "i am an h1 tag"),
    React.createElement("h1", {}, "i am an h2 tag"),
  ]),
]);
console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
