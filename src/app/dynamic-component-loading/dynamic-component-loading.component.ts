import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BusinessCardComponent } from '../lazy/business-card/business-card.component';
import { UserListComponent } from '../lazy/user-list/user-list.component';

const users = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
const profile = { name: 'Pankaj' }

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './dynamic-component-loading.component.html',
  styleUrls: ['./dynamic-component-loading.component.scss']
})
export class DynamicComponentLoadingComponent implements OnInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent: any;

  constructor(
    private factoryResolver: ComponentFactoryResolver
  ) { }

  showBusinessCard() {
    this.dynamicComponent.clear();
    const compFactory = this.factoryResolver.resolveComponentFactory(BusinessCardComponent);
    const compRef = this.dynamicComponent.createComponent(compFactory);
    compRef.profile = {}
  }

  showUserList() {
    this.dynamicComponent.clear();
    const compFactory = this.factoryResolver.resolveComponentFactory(UserListComponent);
    const compRef = this.dynamicComponent.createComponent(compFactory);
    compRef.instance.users = users;
  }

  ngOnInit(): void {
  }

}
