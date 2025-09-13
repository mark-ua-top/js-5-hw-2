import './App.css';
import { Greeting } from './components/Greeting/Greeting';
import { Message } from './components/Message/Message';
import { Button } from './components/Button/Button';

const name = "Тетяна";
const text = "Вітаю я Марк, мені офіційно 13 років виповнилось 2025/08/30.";

function App() {
  const handleClick = () => {
    const mussage = document.getElementById("message");
    mussage.classList.add("visible");
  };

  return (
    <>
      <Greeting name={name} />
      <Button onClick={handleClick} />
      <div id="message" className="hidden">
        <Message text={text} />
      </div>
    </>
  );
}

export default App;
