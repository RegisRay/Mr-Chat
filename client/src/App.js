import Chat from "./Chat";
import React, { useState } from 'react';

export default function App() {
    const [popUp, setPopUp]=useState(false);
  return (
    <>
        <Chat/>
    </>
  );
}
