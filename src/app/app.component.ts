import { Component, VERSION } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = new FormGroup({
    phoneType: new FormControl("home"),
    phones: new FormArray([])
  });

  get phoneType() {
    return this.form.get("phoneType");
  }
  get phones() {
    return this.form.get("phones") as FormArray;
  }

  addPhone() {
    let phoneFg = new FormGroup({
      phoneType: new FormControl(),
      areaCode: new FormControl(),
      phoneNumber: new FormControl(null, Validators.required)
    });

    //動態驗證
    phoneFg.get("phoneType").valueChanges.subscribe(value => {
      const areaCode = phoneFg.get("areaCode");
      if (value === "home") {
        areaCode.setValidators(Validators.required);
      } else {
        areaCode.clearValidators();
      }
      areaCode.updateValueAndValidity({ emitEvent: false });
    });

    phoneFg.get("phoneType").setValue(this.phoneType.value);
    this.phones.push(phoneFg);
  }

  deleteItem(i) {
    this.phones.removeAt(i);
  }

  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    alert('success')
  }
}
