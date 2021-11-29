import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  hasAddress: boolean = false;
  edit: boolean = false;
  constructor() {}

  addressForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    address2: new FormControl(''),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', [
      Validators.required,
      Validators.pattern('^[1-9]{1}[0-9]{5}$'),
    ]),
  });
  payment = new FormGroup({
    paymentMethod: new FormControl(),
    ccname: new FormControl(),
    ccnumber: new FormControl(),
    ccexpiration: new FormControl(),
    cccvv: new FormControl(),
  });
  ngOnInit(): void {
    console.log('checkout');
  }

  onAddressSubmit() {
    console.log(this.addressForm.value);

    if (this.addressForm.valid) {
      console.log('valid', this.hasAddress);
      this.hasAddress = true;
      this.edit = false;
    } else alert('Please enter valid details to proceed ' + this.hasAddress);
  }

  editAddress() {
    this.edit = true;
  }
  onPaymentSubmit() {
    console.log(this.payment.value);
  }
}
