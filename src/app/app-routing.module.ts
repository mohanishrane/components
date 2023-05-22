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
import { RadioComponent } from './radio/radio.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';

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
      { path: 'radio', component: RadioComponent },
      { path: 'slidetoggle', component: SlideToggleComponent },
      { path: 'slider', component: SliderComponent },
      { path: 'snackbar', component: SnackBarComponent },
      { path: 'toolbar', component: ToolbarComponent },
      { path: 'tooltip', component: TooltipComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'select', component: SelectComponent },
      { path: 'sidenav', component: SidenavComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'table', component: TableComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
