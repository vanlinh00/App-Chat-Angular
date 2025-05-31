import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly API_URL = 'http://localhost:8080/auth/login'; // URL backend Spring Boot

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(this.API_URL, { username, password }, { responseType: 'text' });
  }
}
/*
 2. Frontend Angular
 
 bước 1:
Tạo service (auth.service.ts) chuyên gọi API backend:

Dùng HttpClient gửi POST request /auth/login với username/password.

Nhận response JWT token hoặc thông báo lỗi.
*/