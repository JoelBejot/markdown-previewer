import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const editorStyles = {
  width: '650px', 
  height: '400px',
  color: 'black',
  background: '#c7daff',
  whiteSpace: 'pre-line'
};

const editorHeaderStyles = {
  width: '650px',
  height: '40px',
  color: 'black',
  background: '#8d9bb8',
  marginBottom: '0px',
  padding: '2px',
  border: '1px solid grey',
  textAlign: 'left',
}

const previewerHeaderStyles = {
  width: '750px',
  height: '40px',
  color: 'black',
  background: '#8d9bb8',
  marginBottom: '0px',
  padding: '2px',
  border: '1px solid grey',
  textAlign: 'left',
}

const previewerStyles = {
  width: '750px', 
  height: '500px',
  color: 'black',
  background: '#c7daff',
  whiteSpace: 'pre-line'
}

const sampleText = `
# Welcome to my React Markdown Previewer!
`

// ## This is a sub-heading...
// ### And here's some other cool stuff:

// Heres some code, \`<div></div>\`, between 2 backticks.

// \`\`\`
// \/\/ this is multi-line code:

// function anotherExample(firstLine, lastLine) {
//   if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
//     return multiLineCode;
//   }
// }
// \`\`\`

// You can also make text **bold**... whoa!
// Or _italic_.
// Or... wait for it... **_both!_**
// And feel free to go crazy ~~crossing stuff out~~.

// There's also [links](https://www.freecodecamp.org), and
// > Block Quotes!

// And if you want to get really crazy, even tables:

// Wild Header | Crazy Header | Another Header?
// ------------ | ------------- | -------------
// Your content can | be here, and it | can be here....
// And here. | Okay. | I think we get it.

// - And of course there are lists.
//   - Some are bulleted.
//      - With different indentation levels.
//         - That look like this.


// 1. And there are numbered lists too.
// 1. Use just 1s if you want!
// 1. And last but not least, let's not forget embedded images:

// ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

//   `

function EditorHeader() {
  return (
    <h3 style={editorHeaderStyles}>JSB Markdown Editor</h3>
  )
}

function Editor() {
  return (
    <div>
      <EditorHeader />
      <textArea 
        style={editorStyles}
        value={text}
      >
      </textArea>
    </div>
  )
}

function PreviewerHeader() {
  return (
    <h3 style={previewerHeaderStyles}>JSB Markdown Previewer</h3>
  )
}

function Previewer() {
  return (
    <div>
      <PreviewerHeader />
      <textArea style={previewerStyles}>

      </textArea>
    </div>
  )
}

function App() {
  const [text, setText] = useState('')

  function handleTextAreaChange(e) {
    setText = e.target.value
    console.log(setText)
  }


  return (
    <div className="App">
      <header className="App-header">
        <Editor 
          onChange={handleTextAreaChange} />
        <Previewer />

      </header>
    </div>
  );
}

export default App;


