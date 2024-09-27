import { CardComponent } from './../shared/card/card.component';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
  output,
  signal,
} from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //selectedUser = signal(DUMMY_USERS[this.getUserIndex()]);

  //imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // get imagePath() {
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  // onSelectUser() {
  //   this.selectedUser.set(DUMMY_USERS[this.getUserIndex()]);
  // }

  // private getUserIndex() {
  //   return Math.floor(Math.random() * DUMMY_USERS.length);
  // }

  // avatar = input<string>('');
  // name = input<string>('');

  // select = output<string>()

  // get imagePath() {
  //   return `assets/users/${this.avatar()}`;
  // }

  // @Input({
  //   required: true,
  // })
  // avatar: string = '';

  @Input({
    required: true,
  })
  user?: User;

  @Input({
    required: true,
  })
  id: string = '';

  @Input({ required: true })
  selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user?.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
