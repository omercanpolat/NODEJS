// utils/toast.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Özel bir hata mesajı göstermek için kullanılabilir
export const showErrorToast = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000, // 5 saniye boyunca göster
    hideProgressBar: false,
  });
};

// Başka türde bildirimler (örneğin, başarı mesajları) için de benzer fonksiyonlar oluşturabilirsiniz
