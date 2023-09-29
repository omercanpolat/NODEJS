// components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `/api/users/list?page=${page}&search=${search}`
      );
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Kullanıcıları listeleyebilirken bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <h2>Kullanıcı Listesi</h2>
      <input
        type="text"
        placeholder="Kullanıcı ara"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Adı</th>
            <th>E-posta</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Önceki Sayfa
        </button>
        <span>
          Sayfa {page} / {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Sonraki Sayfa
        </button>
      </div>
    </div>
  );
};

export default UserList;
