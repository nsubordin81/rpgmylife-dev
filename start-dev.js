import concurrently from 'concurrently';

async function startDev() {
  try {
    console.log('Starting development servers...');
    
    const { result } = concurrently([
      { 
        command: 'cd ../rpgmylife-backend && npm start', 
        name: 'backend',
        prefixColor: 'blue'
      },
      { 
        command: 'cd ../rpgmylife-threejs && npm run dev', 
        name: 'frontend',
        prefixColor: 'green'
      }
    ], {
      prefix: 'name',
      killOthers: ['failure', 'success'],
      restartTries: 3,
    });

    await result;
    console.log('All services started successfully');
  } catch (error) {
    console.error('Failed to start development servers:', error);
    process.exit(1);
  }
}

startDev().catch(error => {
  console.error('Unhandled error during startup:', error);
  process.exit(1);
});