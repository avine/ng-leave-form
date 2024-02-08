import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { LeaveFormService } from './leave-form.service';
import { FormComponent } from '../form/form.component';
import { LeaveForm } from './leave-form.types';

import { MatDialog } from '@angular/material/dialog';
import { LeaveFormComponent } from './leave-form.component';
import { map, tap } from 'rxjs';

export const leaveFormGuard: CanDeactivateFn<LeaveForm> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  if (!component.leaveFormService.valueChanged()) {
    return true;
  }
  return inject(MatDialog)
    .open(LeaveFormComponent, {})
    .afterClosed()
    .pipe(map((result) => (result === undefined ? false : result)));
};
