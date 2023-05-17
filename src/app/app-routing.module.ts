import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardComponent } from './card/card.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CheckBox2Component } from './check-box2/check-box2.component';
import { ChipsComponent } from './chips/chips.component';
import { DividerComponent } from './divider/divider.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { IconComponent } from './icon/icon.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { PaginatorComponent } from './paginator/paginator.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: '', redirectTo: 'badge', pathMatch: 'full' },
      { path: 'badge', component: BadgeComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'buttontoggle', component: ButtonToggleComponent },
      { path: 'card', component: CardComponent },
      { path: 'checkbox', component: CheckBoxComponent },
      { path: 'checkbox2', component: CheckBox2Component },
      { path: 'chips', component: ChipsComponent },
      { path: 'divider', component: DividerComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'expansionpanel', component: ExpansionPanelComponent },
      { path: 'icon', component: IconComponent },
      { path: 'formfield', component: FormFieldComponent },
      { path: 'input', component: InputComponent },
      { path: 'list', component: ListComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'progressbar', component: ProgressBarComponent },
      { path: 'progressspinner', component: ProgressSpinnerComponent },
      { path: 'paginator', component: PaginatorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
