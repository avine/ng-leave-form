import { Component } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-leave-form',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './leave-form.component.html',
  styleUrl: './leave-form.component.scss',
})
export class LeaveFormComponent {}
