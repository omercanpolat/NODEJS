import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./actions";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form girişlerini doğrulama yapabiliriz

    // Yeni kullanıcıyı oluştur
    const newUser = {
      name,
      email,
    };

    // Redux ile kullanıcıyı ekle
    dispatch(addUser(newUser));

    // Formu sıfırla
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Kullanıcı Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Adı:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Kullanıcı Ekle</button>
      </form>
    </div>
  );
};

export default UserForm;
