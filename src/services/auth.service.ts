import jwtDecode from "jwt-decode";
import { http } from "../utils/https/http-common";

class AuthService {
  signup(data: any) {
    return http.post('/user/register',data);
  }
  login(data: any) {
    return http.post('/user/login',data);
  }
  getDecToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem('LOCAL_STORAGE_TOKEN_KEY');
    }
    return;
  }
  setToken(token: string) {
    localStorage.setItem('LOCAL_STORAGE_TOKEN_KEY', token);
  }
  isLoggedIn() {
    const token = this.getDecToken();
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error: any) {
        console.log(error);
        return false;
      }
    } else {
      console.log('No token');
      return;
    }
  }
  logout() {
    this.removeToken();
    return (window.location.href = '/login');
  }
  removeToken() {
    localStorage.removeItem('LOCAL_STORAGE_TOKEN_KEY');
  }
}

const authService = new AuthService();
export default authService;
