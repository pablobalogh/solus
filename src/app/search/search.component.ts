import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { AulasService } from "../domain/aulas.service";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    constructor(private aulas : AulasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.aulas.Agregar("Ejecutivos 1");
        this.aulas.Agregar("Ejecutivos 2");
        this.aulas.Agregar("Ejecutivos 3");    
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
