import path from 'path';

// any Secret Data Shall be Stored As Env Variables
const dataPath = path.join(__dirname, 'DB_like', 'TestData.json');
const hostName = '127.0.0.1';
const portNumber = 3000;

export { dataPath, hostName, portNumber };
