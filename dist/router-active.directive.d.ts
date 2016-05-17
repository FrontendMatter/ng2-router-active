import { Router } from '@angular/router';
import { QueryList, ElementRef, Renderer, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
export declare class RouterActiveDirective implements OnInit {
    router: Router;
    element: ElementRef;
    renderer: Renderer;
    routerLink: QueryList<RouterLink>;
    routerActive: string;
    routerActiveAttr: string;
    constructor(router: Router, element: ElementRef, renderer: Renderer, routerLink: QueryList<RouterLink>, routerActiveAttr?: string);
    ngOnInit(): void;
    private _updateClass();
    private _defaultAttrValue(attr?);
    private _attrOrProp();
}
