import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { TDatabase } from "@/lib/supabase.types";
import { AuthForm } from "@/components/authForm/AuthForm";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = createServerComponentClient<TDatabase>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex-1 flex items-center justify-center">
      <AuthForm session={session} />
    </div>
  );
}
