import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { TDatabase } from "@/lib/supabase.types";
import { AuthForm } from "@/components/authForm/AuthForm";

export default async function Login() {
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
