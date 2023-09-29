import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendBulkEmail } from "../../src/components/actions";
// import { sendBulkEmail } from "/Users/omerc/Documents/CLARUSWAY/NODEJS/HITATEK CASE STUDY/user-api/e-mail-api/index";

const UserSearch = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [message, setMessage] = useState("");

  const handleUserSelect = (user) => {
    const userIndex = selectedUsers.findIndex(
      (selectedUser) => selectedUser._id === user._id
    );
    if (userIndex === -1) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      const newSelectedUsers = [...selectedUsers];
      newSelectedUsers.splice(userIndex, 1);
      setSelectedUsers(newSelectedUsers);
    }
  };

  const handleSendEmail = () => {
    // Seçilen kullanıcılara e-posta gönderme işlemi
    dispatch(sendBulkEmail(selectedUsers, message));
    // Formu sıfırlama
    setSelectedUsers([]);
    setMessage("");
  };

  return (
    <div>
      <h2>Kullanıcıları Arayın ve Toplu E-posta Gönderin</h2>
      <div>
        <input
          type="text"
          placeholder="Kullanıcı ara..."
          // Kullanıcıları burada arayabilirsiniz
        />
      </div>
      <div>
        <h3>Seçilen Kullanıcılar:</h3>
        <ul>
          {selectedUsers.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <textarea
          placeholder="E-posta metni..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSendEmail}>Toplu E-posta Gönder</button>
      </div>
      <div>
        <h3>Kullanıcı Listesi:</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <input
                type="checkbox"
                checked={selectedUsers.some(
                  (selectedUser) => selectedUser._id === user._id
                )}
                onChange={() => handleUserSelect(user)}
              />
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserSearch;
