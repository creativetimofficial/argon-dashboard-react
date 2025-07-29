import axiosInstance from './axios';

// API đăng nhập
export const login = async (username, password) => {
  return await axiosInstance.post('/api/auth/login', {
    username,
    password,
  });
};

// API lấy thông tin người dùng hiện tại
export const getCurrentUser = async () => {
  return await axiosInstance.get('/api/auth/me');
};

// API đăng xuất
export const logout = async () => {
  return await axiosInstance.post('/api/auth/logout');
};

// // API upload file pcap
// export const uploadPcap = async (file) => {
//   const formData = new FormData();
//   formData.append('file', file);
//   return await axiosInstance.post('/api/upload/pcap', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
// };

// API upload file pcap
export const uploadPcap = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axiosInstance.post('/api/upload/pcap', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 0, // Loại bỏ giới hạn timeout, để server tự xử lý
    });
    return response;
  } catch (error) {
    console.error('Upload error:', {
      message: error.message,
      code: error.code,
      response: error.response ? error.response.data : 'No response',
      request: error.request ? 'Request sent but no response' : 'Request failed',
    });
    throw error; // Ném lỗi để client xử lý
  }
};