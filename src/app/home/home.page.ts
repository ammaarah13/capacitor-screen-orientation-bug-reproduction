import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScreenOrientation } from "@capacitor/screen-orientation";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor() {}

  screenorientation = '';
  locked = true;
  buttonText = 'UNLOCK ORIENTATION'

  ngOnInit() {
    ScreenOrientation.lock({ orientation: 'portrait-primary' });
    this.screenorientation = 'portrait-primary';
  }

  ionViewWillEnter() {
    ScreenOrientation.addListener("screenOrientationChange", ({ type }) => {
      this.screenorientation = type;
    });
  }

  ionViewWillLeave() {
    ScreenOrientation.removeAllListeners();
  }

  lockAndUnlock() {
    if (this.locked === true) {
      ScreenOrientation.unlock();
      this.locked = false;
      this.buttonText = 'LOCK ORIENTATION'
    }
    else {
      ScreenOrientation.lock({ orientation: 'portrait-primary' });
      this.locked = true;
      this.buttonText = 'UNLOCK ORIENTATION'
    }
  }
}
