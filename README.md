# ng2-router-active

[![npm version](https://badge.fury.io/js/ng2-router-active.svg)](https://badge.fury.io/js/ng2-router-active)

Angular2 directive to toggle a custom active class on elements using `[routerLink]` (or parents) and `@angular/router`.

## Installation
```bash
npm install ng2-router-active
```

## Usage
```js
import { ROUTER_DIRECTIVES } from '@angular/router';
import { RouterActiveDirective } from 'ng2-router-active';

@Component({
  template: `
    <li ng2-router-active><a [routerLink]="['/Home']">Home</a></li>
    <li><a ng2-router-active [routerLink]="['/Home']">Home</a></li>
    <li ng2-router-active="custom-active-class"><a [routerLink]="['/Home']">Home</a></li>
    <li><a ng2-router-active="custom-active-class" [routerLink]="['/Home']">Home</a></li>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    RouterActiveDirective
  ]
})
```

## Development
### Build
```bash
npm run build
```

### Watch
```bash
npm run dev
```

---

## Credits
[https://github.com/AngularClass/angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

## Get help
Get help directly from our team via our Slack channel. [Request invite](http://themekit-slack-invite.stamplayapp.com/)