import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { leaveFormGuard } from './leave-form/leave-form.guard';
import { LeaveFormService } from './leave-form/leave-form.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'form',
    component: FormComponent,
    canDeactivate: [leaveFormGuard],
  },
];
