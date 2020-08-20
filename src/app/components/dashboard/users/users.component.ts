import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  @Input() users: User[];

  userId(index: number, user: User): number {
    return user.id;
  }

  getNum(value: string): number {
    return +value;
  }
}
