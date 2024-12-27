import concurrently from 'concurrently';

const { result } = concurrently([
  { command: './start-mongo.sh', name: 'mongodb' },
  { command: 'cd ../rpgmylife-backend && PORT=5001 npm start', name: 'backend' },
  { command: 'cd ../rpgmylife-threejs && npm run dev', name: 'frontend' }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
});

const success = () => {
  console.log('Success');
};

const failure = () => {
  console.log('Failure');
};

result.then(success, failure);