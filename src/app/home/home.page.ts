import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(private iab: InAppBrowser) {}

    public openIAB(): void {
        this.iab.create('/assets/ng/callback.html');
    }
}
