import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

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

  deleteItem(i: number) {
    this.clickDelete.emit(i);
  }
}
