function App() {
  let name = "Jayashree";
  let skills = ["html", "css", "javascript"];
  let emotions = {
    mostLiked: "joy",
    mostGot: "anxiety",
    worstEmo: "anger",
  };

  return (
    <>
      <h1>Hello {name}</h1>
      <h2>My skills are:</h2>
      <ul>
        {skills.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
      <h2>My emotions are:</h2>
      <ul>
        {Object.keys(emotions).map((value, index) => (
          <li key={index}>{emotions[value]}</li>
        ))}
      </ul>
      <div></div>
    </>
  );
}

export default App;
