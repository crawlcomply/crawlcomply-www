import {Component} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: [
    '../doc/doc.scss',
    "demo.component.scss"
  ]
})
export class DemoComponent {
  displayIframe: boolean = false;
  iframeUrl: SafeUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {
  }

  runDemoWithUrl(url: string) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.displayIframe = true;
  }

}

