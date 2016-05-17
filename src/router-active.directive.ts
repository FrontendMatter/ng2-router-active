import { Router } from '@angular/router';
import { isPresent } from '@angular/core/src/facade/lang';
import { Directive, Query, QueryList, Attribute, ElementRef, Renderer, Optional, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';

@Directive({
	selector: '[ng2-router-active]'
})

export class RouterActiveDirective implements OnInit {
	@Input() routerActive: string = undefined;
	routerActiveAttr: string = 'active';

	constructor(
		public router: Router,
		public element: ElementRef,
		public renderer: Renderer,
		@Query(RouterLink) public routerLink: QueryList<RouterLink>,
		@Optional() @Attribute('ng2-router-active') routerActiveAttr?: string) {

		this.routerActiveAttr = this._defaultAttrValue(routerActiveAttr);
	}

	ngOnInit() {
		this.routerLink.changes.subscribe(() => {
			if (this.routerLink.first) {
				this._updateClass();
				this.router.changes.subscribe(() => {
					this._updateClass();
				});
			}
		});
	}

	private _updateClass() {
		let active = this.routerLink.first.isActive;
		this.renderer.setElementClass(this.element.nativeElement, this._attrOrProp(), active);
	}

	private _defaultAttrValue(attr?: string) {
		return this.routerActiveAttr = attr || this.routerActiveAttr;
	}

	private _attrOrProp() {
		return isPresent(this.routerActive) ? this.routerActive : this.routerActiveAttr;
	}
}