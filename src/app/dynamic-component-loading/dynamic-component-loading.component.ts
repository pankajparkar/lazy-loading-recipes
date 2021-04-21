import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BusinessCardComponent } from '../lazy/business-card/business-card.component';
import { UserListComponent } from '../lazy/user-list/user-list.component';

const users = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './dynamic-component-loading.component.html',
  styleUrls: ['./dynamic-component-loading.component.scss']
})
export class DynamicComponentLoadingComponent implements OnInit {

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) dynamicComponent: any;

  profile = {
    title: 'Shiba Inu',
    subtitle: 'Dog Breed',
    description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  }

  constructor(
    private factoryResolver: ComponentFactoryResolver
  ) { }

  showBusinessCard() {
    this.dynamicComponent.clear();
    const compFactory = this.factoryResolver.resolveComponentFactory(BusinessCardComponent);
    const compRef = this.dynamicComponent.createComponent(compFactory);
    compRef.instance.profile = this.profile;
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
