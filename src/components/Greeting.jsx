import { useState } from "preact/hooks";

export default function Greeting({messages}){
  return (
    <div class="flex flex-col">
      <h3 class="text-center">{messages[(Math.floor(Math.random()* messages.length))]}! Thanks for visiting!</h3>
    </div>
<<<<<<< HEAD
  );};
=======
  );};
// 		<!--: Greetings TODO:-"Install `preact/hooks`" :-->
// <!-- <Greeting client:load messages={greetings} /> -->
>>>>>>> 37eae9135e8242ee49c75b107c6217287e471418
