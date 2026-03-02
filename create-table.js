const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fjpvtivpulreulfxmxfe.supabase.co';
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqcHZ0aXZwdWxyZXVsZnhteGZlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjI2OTM3MiwiZXhwIjoyMDg3ODQ1MzcyfQ.a-g30QnbPw_LyLssPKNQqb7Z-zMZ9v2rBH4WT1lvAXA';

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function createTable() {
    const { error } = await supabase.rpc('exec_sql', {
        sql: `
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
    `
    });

    if (error) {
        // If exec_sql RPC is not available, we can try using a different approach or just tell the user to run it.
        // However, for most Supabase projects, running SQL via RPC requires setup.
        // I'll try to just insert a dummy record to see if it works after creation.
        console.error('Error creating table via RPC:', error);
        console.log('Falling back to providing the SQL to the user if the table does not exist.');
    } else {
        console.log('Table created successfully.');
    }
}

createTable();
