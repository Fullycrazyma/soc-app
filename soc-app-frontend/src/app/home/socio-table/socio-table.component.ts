import { Component, OnInit } from '@angular/core';
import { TypeService } from './../../shared/service/type.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-socio-table',
    templateUrl: './socio-table.component.html',
    styleUrls: ['./socio-table.component.scss']
})
export class SocioTableComponent implements OnInit {

    types: Array<string>;

    constructor(private typeService: TypeService) { }

    ngOnInit() {
        this.typeService.getTypes().subscribe(
            (types) => this.types = types
        );
    }

}
