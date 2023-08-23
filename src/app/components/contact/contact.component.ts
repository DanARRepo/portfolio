import { Component } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  emailIcon = faEnvelope;
  phoneIcon = faPhone

}
