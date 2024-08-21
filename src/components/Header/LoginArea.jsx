
function LoginArea() {
  return (
    <div>
      <form id="login-form" action="GET">
        <label htmlFor="user">
            <span>User</span>
            <input id="user" type="text" />
        </label>
        <label htmlFor="password">
            <span>password</span>
            <input id="password" type="password" />
        </label>
      </form>
    </div>
  )
}

export default LoginArea
