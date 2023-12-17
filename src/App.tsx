import Button from "./components/Button";
export default function App() {
  return (
    <>
      <Button onClick={handleClick}>Submit</Button>
    </>
  );
}

function handleClick() {
  console.log("Button clicked");
}
