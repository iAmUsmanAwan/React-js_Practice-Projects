
function App() {

  const username = 'John Wick';

  return (
    <>
      <h1>Main App.jsx File {2+3} </h1>
      <h1>Main App.jsx File{username} </h1>
      
      {/* <h1>Main App.jsx File { if(username=='John Wick') ?"yes" :"no" } </h1>  This will not work, because we can not use if else in JSX, we need to use ternary operator */}
      
      <h1>Main App.jsx File {username=='John Wick' ?"yes" :"no" } </h1>
    
    </>
  
  )
}

export default App
