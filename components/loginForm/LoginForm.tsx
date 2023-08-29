import { Messages } from '../messages/Messages';

export const LoginForm = () => {
    return (
        <form className="flex flex-col justify-center gap-2 text-foreground" action="/auth/sign-in" method="post">
            <label className="text-md" htmlFor="email">
                Email
            </label>
            <input className="-md px-4 py-2 bg-inherit border mb-6" name="email" placeholder="you@example.com" required />
            <label className="text-md" htmlFor="password">
                Password
            </label>
            <input className="-md px-4 py-2 bg-inherit border mb-6" type="password" name="password" placeholder="••••••••" required />
            <button className="bg-teal-700 px-4 py-2 text-gray-300 mb-2">Sign In</button>
            <Messages />
        </form>
    );
};
