// import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes)
//   ]
// };

/*
File app.config.ts thường dùng để chứa các cấu hình chung, hằng số, hoặc các thông tin dùng trong app — như API endpoints, keys, hoặc các setting khác.

Về file app.config.ts trong Angular:
Không bắt buộc phải có file này để app chạy bình thường.

Nếu project bạn tạo có file này, có thể nó là nơi bạn lưu các cấu hình riêng của app.

Bạn có thể dùng hoặc không, tùy theo nhu cầu.
*/

import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login/login';
import { ChatComponent } from './chat/chat';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent }
];

export const AppRouting = provideRouter(routes);
