import React, { useState, useRef } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "cinderella",
    password: "Bibbidibobbidiboo123.",
  });

  const formRef = useRef(null); // Ref untuk mengakses form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan proses login atau tindakan lainnya di sini dengan formData
    console.log("Data yang akan dikirim:", formData);
  };

  const handleHiddenFormSubmit = () => {
    if (formRef.current) {
      formRef.current.submit(); // Mengirimkan form tersembunyi
    }
  };

  return (
    <div>
      <form
        ref={formRef} // Menggunakan ref untuk mengakses form
        className="loginform"
        name="login"
        method="post"
        action="http://moaibad.southeastasia.cloudapp.azure.com/moodle/login/index.php"
        onSubmit={handleSubmit}
        style={{ display: "none" }}
      >
        <p>
          Username :
          <input
            size="10"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </p>
        <p>
          Password :
          <input
            size="10"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </p>
        <p>
          <input name="Submit" value="Login" type="submit" />
        </p>
      </form>
      {/* Tombol untuk mengirim form tersembunyi */}
      <button onClick={handleHiddenFormSubmit}>Submit Form Tersembunyi</button>
    </div>
  );
};

export default App;
