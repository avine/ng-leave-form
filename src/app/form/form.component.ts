import { Component, inject } from '@angular/core';
import { LeaveFormService } from '../leave-form/leave-form.service';
import { LeaveForm } from '../leave-form/leave-form.types';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  providers: [LeaveFormService],
})
export class FormComponent implements LeaveForm {
  leaveFormService = inject(LeaveFormService);

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  constructor() {
    this.leaveFormService.registerForm(this.form);
  }

  snapshot() {
    this.leaveFormService.snapshotValue();
  }
}
