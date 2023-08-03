import { TDatabase } from "@/lib/supabase.types";
import { getUser } from "@/utils";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Page() {
  return (
    <div>
      <h2>Page</h2>
    </div>
  );
}
