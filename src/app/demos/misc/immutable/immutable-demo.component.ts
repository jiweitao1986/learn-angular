import { Component, OnInit } from '@angular/core';
import * as Immutable from 'immutable';

@Component({
    selector: 'app-immutable-demo',
    templateUrl: './immutable-demo.component.html',
    styleUrls: ['./immutable-demo.component.css']
})
export class ImmutableDemoComponent implements OnInit {

    constructor() { }

    ngOnInit() {

        // const map1 = Immutable.Map({a: 1, b: 2, c: 3});
        // const map2 = map1.set('b', 50);
        // console.log(map1.get('b'));
        // console.log(map2.get('b'));


        const empMap = Immutable.Map({
            id: 1,
            code: 'LiuYi',
            name: '刘一'
        });
        console.log(empMap);


        


    }

}
