import { TypeService } from './../../shared/service/type.service';
import { Component, OnInit } from '@angular/core';

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
        console.log(this.activatedRoute.params);
        this.activatedRoute.params.map(p => p.type).subscribe(
            (type) => {
                console.log(type);
                this.typeService.getTypeDescription(type).subscribe(
                    desc => this.typeDescription = desc
                );
            }
        );
    }

}
