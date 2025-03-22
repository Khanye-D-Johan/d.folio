import { useState } from "preact/hooks";

export default function Greeting({messages}){
  const randMessage = ()=> messages[(Math.floor(Math.random()* messages.length))];
  const [greet, setGreet] = useState(messages[0]);

  return (
    <div>
      <h3>{greet}! Thanks for visiting!</h3>
      <button onClick={()=> setGreet(randMessage())}>
        New Greeting
      </button>
    </div>
  );
};