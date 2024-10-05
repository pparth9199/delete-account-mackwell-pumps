import React, { useState } from "react";
import emailjs from "emailjs-com";

const App = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !reason) {
      setMessage("Please fill in both fields.");
      return;
    }

    const templateParams = {
      user_email: email,
      reason: reason,
    };

    emailjs
      .send(
        "service_xiylb4u", // replace with your service ID
        "template_delete", // replace with your template ID
        templateParams,
        "18jJkzco0QyxriXjo" // replace with your user ID from EmailJS
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessage("Your request has been sent successfully.");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setMessage("There was an error sending your request.");
      });

    setEmail("");
    setReason("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Delete Account for Mackwell Pumps</h2>
      <p>Please fill in the reason for deletion we will process the deletion with 3-4 working days and send a confirmation email.</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Reason for deletion:</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} required style={styles.textarea} />
        </div>
        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "1.8em",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "8px",
    display: "block",
    fontSize: "1.1em",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1em",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1em",
    height: "100px",
    resize: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1.1em",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    color: "#d9534f",
    fontSize: "1.1em",
  },
};

export default App;
