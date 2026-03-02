const https = require('https');

const token = 'sbp_07dad98968ae996686deab02b057664e3140d8da';
const projectId = 'fjpvtivpulreulfxmxfe';

const options = {
    hostname: 'api.supabase.com',
    port: 443,
    path: `/v1/projects/${projectId}`,
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (e) => {
    console.error(e);
});
req.end();
