import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { ProfilePage } from '../profile/profile';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = ListPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
