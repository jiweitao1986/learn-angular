import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    selector: 'app-reactive-form-demo',
    templateUrl: './reactive-form-demo.component.html',
    styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

    /*
     * emp
     */
    private emp: Emp;

    /**
     * form
     */
    private f: FormGroup;

    /**
    * constructor
    */
    constructor(private fb: FormBuilder) {
        this.initData();
        this.initForm();
    }

    /**
    * component init
    */
    ngOnInit() {
    }

    /**
     * init data
     */
    initData() {
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
                { id: '31', begin: '2005-09-01', end: '2009-06-30', school: 'SDNU' },
                { id: '32', begin: '2009-09-01', end: '2012-06-30', school: 'SDU' }
            ]
        }
    }


    /**
     * init form
     */
    initForm() {

        const self = this;
        const eduFormArray = this.fb.array([]);

        // controls structure
        this.f = this.fb.group({
            name:   ['', Validators.required],
            gender: ['', Validators.required],
            age:    [0, [Validators.required, Validators.min(18), Validators.max(65)]],
            nation: ['', Validators.required],
            signature: [''],
            edus: eduFormArray
        });

        // dynamically build edus's form controls
        this.emp.edus.forEach(function(eduItem, eduIndex, edus) {
            const eduGroup = self.fb.group({
                begin:  ['', Validators.required],
                end:    ['', Validators.required],
                school: ['', Validators.required]
            });
            eduFormArray.push(eduGroup);
        });
    }

    /**
    * handle form submittion
    */
    submit() {
        debugger;
        console.log('The form have been submitted .');
        console.log(this.f);
    }

    /**
     * add edu
     */
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
        const indexToDel = this.emp.edus.findIndex(function (eduItem, eduIndex, edus) {
            return eduItem.id === id;
        });
        this.emp.edus.splice(indexToDel, 1);
    }

}
