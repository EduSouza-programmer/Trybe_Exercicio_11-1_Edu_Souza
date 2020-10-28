import './App.css';

const commitments = ['Estudar', 'Aprender', 'Ajudar', 'Xablau1', 'Xablau2'];

const task = value => {
  return <li key={value}>{value}</li>;
};

const populateCommitmentList = () => {
  return commitments.map(commitment => task(commitment));
};

function App() {
  return <ul>{populateCommitmentList()}</ul>;
}

export default App;
