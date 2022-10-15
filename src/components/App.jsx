import React from "react";
import Entry from "./entry";
import emojipedia from "../emojipedia";

function createntry(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createntry)}</dl>
    </div>
  );
}

export default App;
