export const LogoutBtn = () => {
  return (
    <form action="/auth/sign-out" method="post">
      <button>Logout</button>
    </form>
  );
};
