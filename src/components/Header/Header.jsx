import LoginArea from "./LoginArea"
import Purchase from "./Purchase"
import Title from "./Title"

function Header() {
  return (
    <div className="header-container">
      <Title />
      <div className="header-login-summary-section">
        <Purchase />
        <LoginArea />
      </div>
    </div>
  )
}

export default Header
