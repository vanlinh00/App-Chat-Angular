import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';  // sửa thành AppComponent
import appRoutes from './app/app.routes'; // ✅ import mặc định không cần { }

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [appRoutes]
});
