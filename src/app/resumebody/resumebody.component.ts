import { Component } from '@angular/core';

@Component({
  selector: 'app-resumebody',
  templateUrl: './resumebody.component.html',
  styleUrls: ['./resumebody.component.css']
})
export class ResumebodyComponent {
  pdfSrc = "./assets/resume.pdf";

  downloadPDF() {
    const fileName = 'Quentin_F_Davis_resume.pdf';
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';

    fetch(this.pdfSrc).then(res => res.blob()).then(blob => {
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
