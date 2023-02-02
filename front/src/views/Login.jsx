// ZADANIE 1 KPT REACT LOGOWANIA, ABY ZAINPORTOWAC UP JSimport './App.css';

import "./login.css";

const Login = () => {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-img">
              <img
                src={process.env.PUBLIC_URL + "/img/blob1.png"}
                alt="profile"
                className="profile"
              />
            </div>
          </div>
          <div>
            <h1>Login into</h1>
            <div className="blob">
              <img
                src={process.env.PUBLIC_URL + "/img/blob1.png"}
                alt="email"
                className="email"
              />
              <input type="text" placeholder="user name" className="name" />
            </div>
            <div className="second-input blob">
              <img
                src={process.env.PUBLIC_URL + "/img/blob1.png"}
                alt="password"
                className="email"
              />
              <input
                type="passwordd"
                placeholder="user name"
                className="name"
              />
            </div>
            <div className="login-button blob">
              <button>Login </button>
            </div>

            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
