const https = require('https');

const token = 'sbp_07dad98968ae996686deab02b057664e3140d8da';
const projectId = 'fjpvtivpulreulfxmxfe';

const sql = `
  create table if not exists leads (
    email text primary key,
    pre_register boolean default false,
    user_test boolean default false,
    created_at timestamp with time zone default now()
  );

  -- Enable RLS
  alter table leads enable row level security;

  -- Create policy to allow public inserts
  create policy "Allow public inserts" on leads
    for insert with check (true);

  -- Create policy to allow public updates (for upsert)
  create policy "Allow public updates" on leads
    for update using (true);
`;

const postData = JSON.stringify({ query: sql });

const options = {
    hostname: 'api.supabase.com',
    port: 443,
    path: `/v1/projects/${projectId}/sql`,
    method: 'POST',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        console.log(`Status: ${res.statusCode}`);
        console.log(data);
    });
});

req.on('error', (e) => {
    console.error(e);
});

req.write(postData);
req.end();
