import { Component } from '@angular/core';
import { Handphone } from './class/handphone';
import { PC } from './class/pc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-antoni';

  constructor() {

    const PcGaming = new PC();

    PcGaming.setRam(32);
    PcGaming.setProcessor("Intel");

    console.log(PcGaming.getRam());
    console.log(PcGaming.getProcessor());

    const TabletGaming = new PC();

    TabletGaming.setRam(16);
    TabletGaming.setProcessor("AMD");

    console.log(TabletGaming.getRam());
    console.log(TabletGaming.getProcessor());

    const HpGaming = new Handphone();

    HpGaming.setRam(8);
    HpGaming.setProcessor("Snapdragon");

    console.log(HpGaming.getRam());
    console.log(HpGaming.getProcessor());
  }
}
