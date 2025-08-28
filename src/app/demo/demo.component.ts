import {Component} from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: [
        '../doc/doc.scss',
        "demo.component.scss"
    ],
    standalone: false
})
export class DemoComponent {
  displayIframe: boolean = false;
  iframeUrl: SafeUrl | undefined;
  domainName!: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  runDemoWithUrl(url: string) {
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.displayIframe = true;
    this.domainName = (url.startsWith("http:") || url.startsWith("https:")) ?
      (url.slice(url.indexOf("/"))+2) : url;
  }

}

