const concurrently = require('concurrently');
const { result } = concurrently([
  { command: 'docker start rpgmylife-mongo || docker run -d --name rpgmylife-mongo -p 27017:27017 mongo:latest', name: 'mongodb' },
  { command: 'cd ../rpgmylife-backend && npm start', name: 'backend' },
  { command: 'cd ../rpgmylife-threejs && npm run dev', name: 'frontend' }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3,
});

result.then(success, failure);

function success() {
  console.log('Success');
}

function failure() {
  console.log('Failure');
}