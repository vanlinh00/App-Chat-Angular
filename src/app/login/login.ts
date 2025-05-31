
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <== Thêm dòng này để có *ngIf
import { Router } from '@angular/router';       // Để điều hướng sau khi login

import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true, // standalone component
  imports: [CommonModule, FormsModule], // <== Import đầy đủ FormsModule và CommonModule
  templateUrl: './login.html',
  styleUrl: './login.css'
})

// Bước 2
//Tạo component LoginComponent với form nhập username/password.

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  // Inject router để điều hướng khi login
  constructor(private authService: AuthService, private router: Router) {}

   login() {

    //  Khi người dùng bấm đăng nhập:  Gọi authService.login().
this.authService.login(this.username, this.password)
  .subscribe({
    //Dùng .subscribe() để xử lý kết quả:
    //Nếu thành công, lưu token vào localStorage (để lưu trạng thái đăng nhập).
    next: (res: any) => {
         const parsed = JSON.parse(res);
    console.log('Token:', parsed.token);
    localStorage.setItem('token', parsed.token);
      this.router.navigate(['/chat']);
    },
    //Nếu thất bại, hiển thị lỗi trên giao diện.
    error: (err: any) => {
      this.errorMessage = 'Sai tên đăng nhập hoặc mật khẩu';
    }
  });

  }

}

