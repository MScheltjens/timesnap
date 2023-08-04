import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export const useSupabaseSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (data) {
        setSession(data.session);
      }
    })();
  }, []);

  return session;
};
