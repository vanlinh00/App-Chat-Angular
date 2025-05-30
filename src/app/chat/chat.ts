// Import decorator Component từ Angular core (bắt buộc khi tạo component)
import { Component } from '@angular/core';

// Import CommonModule để dùng các directive như *ngIf, *ngFor
import { CommonModule } from '@angular/common';

// Import FormsModule để dùng được [(ngModel)] cho binding input form
import { FormsModule } from '@angular/forms';


// Sử dụng @Component để khai báo đây là một Standalone Component
@Component({
  // selector là tên thẻ HTML dùng để nhúng component này trong template
  selector: 'app-chat',

  // standalone: true nghĩa là component này độc lập, không cần khai báo trong AppModule
  standalone: true,

  // Nhúng các module con (CommonModule, FormsModule) để dùng trong HTML
  imports: [CommonModule, FormsModule],

  // Đường dẫn tới file template HTML của component này
  templateUrl: './chat.html',

  // Đường dẫn tới file CSS riêng cho component
  styleUrls: ['./chat.css']
})

// Export ra class ChatComponent – Angular sẽ khởi tạo & điều khiển class này
export class ChatComponent {

  // Mảng messages chứa danh sách các tin nhắn – sẽ hiển thị trên UI
  messages: string[] = [];

  // inputMessage là biến lưu giá trị đang nhập trong ô input – binding qua [(ngModel)]
  inputMessage: string = '';

  // Hàm xử lý khi người dùng nhấn Enter hoặc click "Gửi"
  sendMessage(): void {
    // Cắt bỏ khoảng trắng đầu và cuối nếu người dùng nhập "  abc  "
    const message = this.inputMessage.trim();

    // Kiểm tra nếu message không rỗng sau khi trim
    if (message) {
      // Thêm tin nhắn vào cuối mảng messages (hiển thị bên dưới)
      this.messages.push(message);

      // Reset ô input về rỗng sau khi gửi
      this.inputMessage = '';
    }

    // Nếu input rỗng thì không làm gì cả
  }
}
