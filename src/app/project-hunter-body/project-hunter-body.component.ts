import { Component, EventEmitter, Output, OnInit  } from '@angular/core';
import AOS from 'aos';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-hunter-body',
  templateUrl: './project-hunter-body.component.html',
  styleUrls: ['./project-hunter-body.component.css']
})
export class ProjectHunterBodyComponent implements OnInit{
  code: SafeHtml;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    AOS.init();
    this.http.get('assets/InteractableManager.txt', {responseType: 'text'}).subscribe(
      data => {
        const sanitizedHtml = `
        <pre><code>
        ${data}
        </code></pre>
        `;
        this.code = this.sanitizer.bypassSecurityTrustHtml(sanitizedHtml);
      },
      error => {
        console.error(error);
      }
    ); 
  }
}
