import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { TDBImg } from '@/types';

export const supabaseClient = createClientComponentClient<TDBImg>();
