import { Directive, Input, OnChanges, OnDestroy, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from '../services';

@Directive({
  selector: '[canAccess]',
})
export class RoleAccessDirective implements OnChanges, OnDestroy {
  @Input() canAccess: string[] | boolean;
  @Input() @Optional() roles: string[];
  @Input() @Optional() team: string;
  @Input() @Optional() rolePair: [string, string[]];
  private subscription: Subscription = new Subscription();

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>, private authService: AuthService) {}

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnChanges(): void {
    let obs: Observable<boolean>;
    if (typeof this.canAccess === 'boolean') {
      obs = of(this.canAccess);
    } else if (Array.isArray(this.canAccess)) {
      obs = this.authService.hasTeamAndRole(this.canAccess);
    }
    // else if (this.rolePair) {
    //   const arr = [];
    //   for (const rolePairElement of this.rolePair) {
    //     arr.push(this.authService.hasTeamAndRole(rolePairElement[0], rolePairElement[1]));
    //   }
    //   obs = combineLatest(arr);
    // }

    this.subscription.add(
      obs.subscribe((canAccess) => {
        if (canAccess) {
          this.view.createEmbeddedView(this.template);
        } else {
          this.view.clear();
        }
      })
    );
  }
}
