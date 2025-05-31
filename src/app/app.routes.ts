import { Routes } from '@angular/router';

import { LoginComponent } from './login/login';
import { ChatComponent } from './chat/chat';
import { PrintComponent } from './print/print'; // thêm mới


export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
    { path: 'print', component: PrintComponent }, // đường dẫn mới

];

// // ✅ Đây là export đúng
// export default provideRouter(routes);


/*
File app.routes.ts trong Angular thường dùng để khai báo các route (đường dẫn điều hướng) cho ứng dụng của bạn.

Ý nghĩa của app.routes.ts:
Quản lý các tuyến đường (routes) cho app, ví dụ: trang chủ, trang chat, trang profile...

Giúp Angular biết khi người dùng truy cập URL nào thì hiển thị component nào.

Tách riêng phần định nghĩa route ra file riêng để code rõ ràng, dễ quản lý.


*/