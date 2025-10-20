import { useState } from "preact/hooks";

export default function Greeting({messages}){
  return (
    <div class="flex flex-col">
      <h3 class="text-center">{messages[(Math.floor(Math.random()* messages.length))]}! Thanks for visiting!</h3>
    </div>
  );};
// 		<!--: Greetings TODO:-"Install `preact/hooks`" :-->
// <!-- <Greeting client:load messages={greetings} /> -->