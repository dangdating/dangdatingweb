const https = require('https');

const options = {
    hostname: 'api.supabase.com',
    port: 443,
    path: '/v1/projects/fjpvtivpulreulfxmxfe/api-keys',
    method: 'GET',
    headers: {
        'Authorization': 'Bearer sbp_f285aa3a6f9badc16bac6b385dc40bace7d1e37f'
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const keys = JSON.parse(data);
        keys.forEach(key => {
            console.log(`${key.name}: ${key.api_key}`);
        });
    });
});

req.on('error', (e) => {
    console.error(e);
});
req.end();
