import { supabase } from "../utils/supabaseClient";

beforeAll(() => {
    globalThis.import.meta = { env: { VITE_SUPABASE_URL: 'your-supabase-url', VITE_SUPABASE_ANON_KEY: 'your-anon-key' } };
  });

describe('Supabase Connection Test', () => {
  it('should be able to initialize supabase', async () => {
    expect(supabase).toBeDefined();
    expect(supabase.auth).toBeDefined();
  });
});
