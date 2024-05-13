
function App(name) {
  var person = {
    name: "Todo List of Alice Zara",
    task: ["Finish IP Project", "Take test in Lab", "Prepare for SAT"],
    theme: {
      backgroundColor: "grey",
      color: "yellow",
      width: "550px",
      height: "800px",
      borderRadius: "20px",
      margin: "10px",
      textAlign: "center",
    }
  };

  const avatarStyle = {
    height: "500px", 
    width: "400px", 
    borderRadius: "10px",
  };

  const headingStyle = {
    backgroundColor: "black",
    color: "pink", 
    padding: "10px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  }

  const listStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  }

  // const btnStyle = {
  //   backgroundColor: "rgba(65, 228, 112, 0.91)",
  //   border: "0",
  //   padding: "10px",
  //   fontWeight: "bold",
  //   fontSize:"18px",
  // }

  return (
    <div style={person.theme}>
      <h1 style={headingStyle}>{person.name}</h1>
      <img src="https://i.pinimg.com/originals/f3/51/38/f35138e723387b870b5904a70a2608d1.jpg" alt={`${name} profile pic`} style={avatarStyle} />
      <hr/>
        {person.task.map((task, index) => (
          <p key={index} style={listStyle}>{task}</p>
        ))}
      {/* <button style={btnStyle}> All Complet </button> */}
    </div>
  );
}

export default App;