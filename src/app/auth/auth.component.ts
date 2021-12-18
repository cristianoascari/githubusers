// Angular modules.
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Third-party.
import { TranslateService } from '@ngx-translate/core';

// App models.
import { EBroadcast, IUser } from 'src/app/shared/models';

// App services.
import { AuthService, BroadcastService } from 'src/app/shared/services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup = this.buildFormGroup();

  public isWorking: boolean = false;

  constructor(
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private readonly fb: FormBuilder,
    private router: Router,
    public translate: TranslateService
  ) {}

  ngOnInit(): void {}

  public doLogin(): void {
    if (this.form.valid) {
      this.isWorking = true;

      const mail: string = this.form.getRawValue().email;
      const pass: string = this.form.getRawValue().password;
      this.authService.authenticateUser(mail, pass)
      .then(res => {
        this.broadcastService.sendBroadcast(EBroadcast.Login, res as IUser);
        this.router.navigate(['']);
      })
      .catch(err => console.log(err))
      .finally(() => this.isWorking = false);
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      email: [
        {value: '', disabled: this.isWorking},
        [Validators.required, Validators.email]
      ],
      password: [
        {value: '', disabled: this.isWorking},
        [Validators.required, Validators.minLength(5)]
      ],
    });
  }

  public get f() { return this.form.controls; }
}
