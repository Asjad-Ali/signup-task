import logo from "../assets/images/logo.webp";

const SignupSuccess = ({ authState }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={logo} alt="logo" />
        <h2 style={styles.successText}>Signup Successful in AAK!</h2>
        <h3 style={styles.welcomeText}>
          Welcome, {authState.userData.first_name}{" "}
          {authState.userData.last_name}!
        </h3>
        <div style={styles.infoContainer}>
          <p>
            <span style={styles.label}>Username:</span>{" "}
            {authState.userData.username}
          </p>
          <p>
            <span style={styles.label}>Email:</span> {authState.userData.email}
          </p>
          <p>
            <span style={styles.label}>Status:</span>{" "}
            <b
              style={{
                color:
                  authState.userData.user_active_status === "Active"
                    ? "green"
                    : "red",
              }}
            >
              {authState.userData.user_active_status}
            </b>
          </p>
        </div>
        <p style={styles.message}>{authState.userData.message}</p>
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  successText: {
    color: "green",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  welcomeText: {
    fontSize: "20px",
    color: "#333",
    marginBottom: "15px",
  },
  infoContainer: {
    textAlign: "left",
    color: "#555",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  message: {
    marginTop: "15px",
    fontStyle: "italic",
    color: "#777",
  },
};

export default SignupSuccess;
