import { TypeService } from './../../shared/service/type.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-socio-type',
    templateUrl: './socio-type.component.html',
    styleUrls: ['./socio-type.component.scss']
})
export class SocioTypeComponent implements OnInit {

    typeDescription: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private typeService: TypeService) { }

    ngOnInit() {
        this.activatedRoute.params.map(p => p.type).subscribe(
            (type) => {
                this.typeService.getTypeDescription(type).subscribe(
                    (desc) => {
                        console.log(desc);
                        this.typeDescription = desc;
                    }
                );
            }
        );
    }

}
