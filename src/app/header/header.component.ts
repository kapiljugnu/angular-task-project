import { Component } from "@angular/core";

// define the metadata for the component
@Component({
    selector: 'app-header', // define tag with 2 words otherwise it will clash with builtin element
    standalone: true,
    // template: '<h1>Hello World</h1>'
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
// define component
export class HeaderComponent{}