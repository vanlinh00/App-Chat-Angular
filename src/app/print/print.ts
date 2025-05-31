// src/app/print/print.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-print',
  templateUrl: './print.html',
  styleUrls: ['./print.css']
})


export class PrintComponent {
  constructor(private http: HttpClient) {}

  printAll() {
    this.http.get<string[]>('http://localhost:8080/api/public/print-all')
      .subscribe(result => {
        console.log('✅ In thành công: ', result);
        alert("Đã in xong! Giờ bạn có thể tải về file ZIP.");
      });
  }

  downloadAll() {
    this.http.get('http://localhost:8080/api/public/download-all', { responseType: 'blob' })
      .subscribe(blob => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'invoices.zip';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
}