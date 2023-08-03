"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Session } from "@supabase/auth-helpers-nextjs";
import { TDatabase } from "@/lib/supabase.types";
import { Messages } from "@/app/login/messages";

export const AuthForm = ({ session }: { session: Session | null }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const supabase = createClientComponentClient<TDatabase>();

  //   const handleSignUp = async () => {
  //     await supabase.auth.signUp({
  //       email,
  //       password,
  //       options: {
  //         emailRedirectTo: `${location.origin}/auth/callback`,
  //       },
  //     });
  //     router.refresh();
  //   };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  // for the `session` to be available on first SSR render, it must be
  // fetched in a Server Component and passed down as a prop
  return (
    <div className="flex flex-col gap-2 text-black">
      {session ? (
        <button className="bg-teal-700 px-4 py-2 text-white mb-2 " onClick={handleSignOut}>
          Sign out
        </button>
      ) : (
        <>
          <label className="text-md" htmlFor="email">
            Email
          </label>
          <input className="px-4 py-2 bg-inherit border" name="email" placeholder="you@example.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
          <label className="text-md" htmlFor="password">
            Password
          </label>
          <input className="px-4 py-2 bg-inherit border" type="password" name="password" placeholder="••••••••" required onChange={(e) => setPassword(e.target.value)} value={password} />
          <button className="bg-teal-700 px-4 py-2 text-white mt-4" onClick={handleSignIn}>
            Sign In
          </button>
        </>
      )}
      <Messages />
    </div>
  );
};
