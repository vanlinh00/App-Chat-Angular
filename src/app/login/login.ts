
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <== Thêm dòng này để có *ngIf
import { Router } from '@angular/router';       // Để điều hướng sau khi login

@Component({
  selector: 'app-login',
  standalone: true, // standalone component
  imports: [CommonModule, FormsModule], // <== Import đầy đủ FormsModule và CommonModule
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  
  // Inject router để điều hướng khi login
  constructor(private router: Router) {}
  
  // Hàm xử lý đăng nhập
  login() {
    if (this.username === 'admin' && this.password === '123') {
          this.router.navigate(['/chat']);
      alert('Đăng nhập thành công!');
      // TODO: điều hướng sang trang chat
    } else {
      this.errorMessage = 'Sai tên đăng nhập hoặc mật khẩu';
    }
  }
}

