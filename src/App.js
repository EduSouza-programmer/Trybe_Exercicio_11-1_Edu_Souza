import './App.css';

const commitments = ['Estudar', 'Aprender', 'Ajudar', 'Xablau1', 'Xablau2'];

const Task = props => {
  return <li>{props.commitment}</li>;
};

const PopulateCommitmentList = props => {
  const commits = props.commitments;
  return commits.map(commitment => (
    <Task key={commitment} commitment={commitment} />
  ));
};

function App() {
  return (
    <ul>
      <PopulateCommitmentList commitments={commitments} />
    </ul>
  );
}

export default App;
