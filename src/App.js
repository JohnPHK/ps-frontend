
function App() {
  var user = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  
  return (
    //The below is actually JSX not JS
    <div className="App">
      <div>
        <h1>Test for Sign up</h1>
        <input type="text" name="firstName" placeholder="First name" onChange={(e) => user.firstname = e.target.value}/>
        <input type="text" name="lastName" placeholder="Last name" onChange={(e) => user.lastname = e.target.value}/>
        <input type="text" name="email" placeholder="Email" onChange={(e) => user.email = e.target.value}/>
        <input type="text" name="password" placeholder="password" onChange={(e) => user.password = e.target.value}/>
        <button onClick={() =>{ 
          console.log(user)
          console.log(JSON.stringify(user))
          var test = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
          }
          console.log(test)
          fetch('/api/sign-up', test).then(() => {console.log("hi")})
          }}>Sign up</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Test for Login</h1>      
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="password" />
      </div>
      <button onClick={() =>{console.log("clicked.")} }>Login</button>
    </div>
  );
}

export default App;
