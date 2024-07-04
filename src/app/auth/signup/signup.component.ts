import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  showPassword: boolean = false;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@xyz\.com$|@xyz\.in$/)]],
      password: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;
      // Simulate API call
      setTimeout(() => {
        this.loading = false;
        this.router.navigate(['/login']);
      }, 2000);
    }
  }
}
