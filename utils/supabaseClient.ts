import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { TDBImg } from '@/types/types';

export const supabaseClient = createClientComponentClient<TDBImg>();
