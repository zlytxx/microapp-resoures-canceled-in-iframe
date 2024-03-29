import './App.css'

function App() {
  return (
    <>
      <div>↓↓↓↓↓↓↓↓↓ Main ↓↓↓↓↓↓↓↓↓</div>
      <div>Hello</div>

      <div>↓↓↓↓↓↓↓↓↓ Child ↓↓↓↓↓↓↓↓↓</div>
      <micro-app
        url="//localhost:5174"
        name='child'
        iframe
      >

      </micro-app>
    </>
  )
}

export default App
