import { TDatabase } from "@/lib/supabase.types";
import { getUser } from "@/utils";
import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient<TDatabase>({ cookies });

  getUser(supabase);

  return (
    <div>
      <h2>Page</h2>
    </div>
  );
}
