import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AbstractControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-phone",
  templateUrl: "./phone.component.html",
  styleUrls: ["./phone.component.css"]
})
export class PhoneComponent implements OnInit {
  @Input() phoneForm: FormGroup | any;
  @Input() index: number;
  @Output() clickDelete = new EventEmitter<number>();

  get areaCode() {
    return this.phoneForm?.get("areaCode");
  }
  get phoneNumber() {
    return this.phoneForm?.get("phoneNumber");
  }

  constructor() {}

  ngOnInit() {}

  deleteItem() {
    this.clickDelete.emit(this.index);
  }

  invalid(contorl: AbstractControl){
    return contorl.invalid && contorl.touched;
  }
}
