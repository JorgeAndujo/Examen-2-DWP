import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ height: "fit-content", width: "85%", marginBottom: "30vh" }}>
          {" "}
          <div style={{ textAlign: "center" }}>
            <h1>Iniciar Sesión</h1>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
