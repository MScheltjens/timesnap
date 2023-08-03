import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { TDatabase } from "@/lib/supabase.types";
import Messages from "./messages";

export default async function Page() {
  const supabase = createServerComponentClient<TDatabase>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className="flex-1 flex w-full px-8 sm:max-w-md  items-center gap-2 mt-44 text-black">
      <form className="flex-1 flex flex-col justify-center gap-2 text-foreground" action="/auth/sign-in" method="post">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input className="rounded-md px-4 py-2 bg-inherit border mb-6" name="email" placeholder="you@example.com" required />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input className="rounded-md px-4 py-2 bg-inherit border mb-6" type="password" name="password" placeholder="••••••••" required />
        <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">Sign In</button>
        <Messages />
      </form>
    </div>
  );
}
