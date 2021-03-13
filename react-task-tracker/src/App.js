function App() {
  const name = 'Brad'
  const x = true
  return (
    <div className="Container">
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
      <h3>{x ? 'Yes' : 'No'}</h3>
    </div>
  );
}

export default App;
