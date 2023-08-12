import { supabaseClient } from "@/utils";
import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export const useSupabaseSession = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabaseClient.auth.getSession();
      if (data) {
        setSession(data.session);
      }
    })();
  }, []);

  return session;
};
