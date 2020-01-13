import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import * as _ from 'lodash';

/**
 * Emp entity
 */
class Emp {
    id: string;
    name: string;
    gender: string;
    age: number;
    nation: string;
    hobbies: string;
    languages: string;
    signature: string;

    edus: Edu[];
}

/**
 * Edu entity
 */
class Edu {
    id: string;
    begin: string;
    end: string;
    school: string;
}


@Component({
    selector: 'app-template-form-demo',
    templateUrl: './template-form-demo.component.html',
    styleUrls: ['./template-form-demo.component.css']
})
export class TemplateFormDemoComponent implements OnInit {

    /**
     * emp
     */
    private emp: Emp;

    /**
     * refer form
     */
    @ViewChild('f') private f: NgForm;

    /**
     * constructor
     */
    constructor() {
        this.emp = {
            id: '3',
            name: 'ZhangSan',
            age: 33,
            gender: 'female',
            nation: 'manchu',
            hobbies: 'sport,movie',
            languages: 'chinese,english',
            signature: 'Just do it !',
            edus: [
                {id: '31', begin: '2005-09-01', end: '2009-06-30', school: 'SDNU'},
                {id: '32', begin: '2009-09-01', end: '2012-06-30', school: 'SDU'}
            ]
        }
    }

    /**
     * component init
     */
    ngOnInit() {
    }

    /**
     * handle form submittion
     */
    submit() {
        console.log('Submit successfully !');
        console.log(this.f);
        debugger;
    }

    addEdu() {
        const random = _.random(1000, 9999);
        this.emp.edus.push({
            id: '' + random,
            begin: '2012-09-01',
            end: '2015-09-30',
            school: 'XX University'
        });
    }

    /**
     * delete edu
     * @param id
     */
    delEdu(id: string): void {
        const indexToDel = this.emp.edus.findIndex(function(eduItem, eduIndex, edus) {
            return eduItem.id === id;
        });
        this.emp.edus.splice(indexToDel, 1);
    }
}
