import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { PhotosComponent } from './photos.component';
import { HighlightphotosComponent } from './highlightphotos.component';


const routes: Routes = [{ path: "", component: PhotosComponent },
{ path: "destacadas", component: HighlightphotosComponent }]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PhotosRoutingModule { }
