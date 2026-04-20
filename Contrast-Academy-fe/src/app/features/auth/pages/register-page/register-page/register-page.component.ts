import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    role: ['STUDENT', Validators.required],
    agreeTerms: [false, Validators.requiredTrue]
  });


  error: string | null = null;
  loading = false;

  onSubmit() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        this.error = "Passwords do not match";
        return;
      }

      this.loading = true;
      this.error = null;

      this.authService.register(this.registerForm.value).subscribe({
        next: (res: any) => {
          console.log('Registration success', res);
          this.router.navigate(['/login']);
        },
        error: (err: any) => {
          this.error = err.error?.error || 'Registration failed';
          this.loading = false;
        }
      });
    }
  }
}
