import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrUtility } from '../utility/toast.utility';
import { GraduateProfileService } from '../service/graduate-profile.service';
import { GraduateProfile } from '../model/graduate';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    primaryEmail: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

  graduate: GraduateProfile = {
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    primaryEmail: '',
    secondaryEmail: '',
    gender: '',
    license: false,
    country: '',
    studyPermit: false,
    password: '',
    confirmPassword: '',
    cellphone: '',
    graduateAdditionalFiles: []
  };

  constructor(private graduateService: GraduateProfileService, private toast: ToastrUtility) {
  }

  ngOnInit(): void {
  }

  submitRegistration() {
    console.log("i must run first");

     if (this.signUpForm.value.password !== this.signUpForm.value.confirmPassword) {
      this.toast.showtoastrError("Password do not match!", "Password Error");
      return;

    } else if (this.signUpForm.value.primaryEmail === " ") {
      this.toast.showtoastrError("Email required", "Email Error");
      return;

    } else if (this.signUpForm.value.password === " ") {
      this.toast.showtoastrError("Password required", "Password error");
      return;

    } else if (this.signUpForm.value.confirmPassword === " ") {
      this.toast.showtoastrError("Confirmed password required", "Confirmed password error");
      return;
    }
    this.graduate.primaryEmail = this.signUpForm.value.primaryEmail!;
    this.graduate.password = this.signUpForm.value.password!;
    this.graduate.confirmPassword = this.signUpForm.value.confirmPassword!;
    this.signUp(this.graduate);
    setTimeout(() => {
    }, 1800);

  }

  signUp(graduate: GraduateProfile): void {
    console.log("run");
    this.graduateService.saveProfile(graduate).subscribe({
      error: (error) => {
        this.toast.showtoastrError(error, "Request status");
        console.log(error);
        setTimeout(() => {
        }, 1500);
      },

      complete: () => this.toast.showtoastrSuccess("Save Request Successful.", "Request Status")
    });
  }

}

