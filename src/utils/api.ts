import { supabase } from './supabaseClient'

// Fetch tasks for the authenticated user
export const fetchTasks = async () => {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .order('due_date', { ascending: true })

  if (error) throw new Error(error.message)
  return data
}
