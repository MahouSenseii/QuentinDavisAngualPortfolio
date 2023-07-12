import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactbody',
  templateUrl: './contactbody.component.html',
  styleUrls: ['./contactbody.component.css']
})
export class ContactbodyComponent {
  constructor(private http: HttpClient) {}
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  onSubmit() {
    const data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
  
  }
  this.http.post('./assets/form-handler.php', data).subscribe((response) => {
    console.log('Form submission successful:', response);
  }, (error) => {
    console.log('Error submitting form:', error);
  });
  }
}
