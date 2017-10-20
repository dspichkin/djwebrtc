import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import 'jquery-slimscroll';
import { FormsModule } from '@angular/forms';

// import { AuthenticationService } from '../../../services/authentication.service';

//declare var jQuery:any;

import { AppSettings } from '../../app.settings';

@Component({
    selector: 'scenario',
    templateUrl: 'scenatio.template.html',
    styles: [`
      ng2-cytoscape {
        width: 100%;
        height: 500px;
        border:1px solid #ddd;
        display: inline-block;
    }`],
})

export class ScenarioComponent implements OnInit, OnDestroy {
    @Input() public dialogue;
    

    loading: boolean = false;
    selected_node;
    self;

    graphData = {
        nodes: [
            {data: {id: 'j', name: 'Jerry', weight: 165, faveColor: '#6FB1FC', faveShape: 'triangle'}},
            {data: {id: 'e', name: 'Elaine', weight: 145, faveColor: '#EDA1ED', faveShape: 'ellipse'}},
            {data: {id: 'k', name: 'Kramer', weight: 175, faveColor: '#86B342', faveShape: 'octagon'}},
            {data: {id: 'g', name: 'George', weight: 170, faveColor: '#F5A45D', faveShape: 'rectangle'}}
        ],
        edges: [
            {data: {source: 'j', target: 'e', faveColor: '#6FB1FC', strength: 90 }},
            {data: {source: 'j', target: 'k', faveColor: '#6FB1FC', strength: 90}},
            {data: {source: 'j', target: 'g', faveColor: '#6FB1FC', strength: 90}},

            {data: {source: 'e', target: 'j', faveColor: '#EDA1ED', strength: 90}},
            {data: {source: 'e', target: 'k', faveColor: '#EDA1ED', strength: 90}},

            {data: {source: 'k', target: 'j', faveColor: '#86B342', strength: 90}},
            {data: {source: 'k', target: 'e', faveColor: '#86B342', strength: 90}},
            {data: {source: 'k', target: 'g', faveColor: '#86B342', strength: 90}},

            {data: {source: 'g', target: 'j', faveColor: '#F5A45D', strength: 90}}
        ]
    };

    tapNodeFn = this.tapNode.bind(this);
    tapBgFn = this.tapBg.bind(this);


    constructor(
        ) {
        this.self = this;
    }

    ngOnInit() {
        this._makeData();
    }

    ngAfterViewInit() {
        
    }

    private _makeData() {
        if (!this.dialogue) {
            return;
        }
        console.log('this.dialogue.scenario', this.dialogue.scenario)
        let nodes = [];
        let edges = [];

        for(let i = 0; i < this.dialogue.scenario.steps.length; i++) {
            let step = this.dialogue.scenario.steps[i];

            // шаг
            let data = {
                data: {
                    id: step.id,
                    name: 'Шаг ' + step.id + ' ',
                    weight: 165, 
                    faveColor: '#6FB1FC', 
                    faveShape: 'rectangle'
                }
            }
            if (step.start_personage == 'master') {
                data.data.faveColor = '#6FB1FC';
            } else {
                data.data.faveColor = '#F5A45D';
            }
            nodes.push(data)
            // вырианты
            for (let j = 0; j < step.master.variants.length; j++) {
                let variant = step.master.variants[j];
                let data = {
                    data: {
                        id: variant.id,
                        name: 'Вариант ведущего ' + step.id,
                        weight: 165, 
                        faveColor: '#6FB1FC', 
                        faveShape: 'rectangle',
                        strength: 90 
                    }
                };
                nodes.push(data);
            }

            for (let j = 0; j < step.pupil.variants.length; j++) {
                let variant = step.pupil.variants[j];
                let data = {
                    data: {
                        id: variant.id,
                        name: 'Вариант игрока ' + step.id,
                        weight: 165,
                        faveColor: '#F5A45D', 
                        faveShape: 'rectangle',
                        strength: 90 
                    }
                }
                nodes.push(data);
            }
        }
        nodes.push({
            data: {
                id: -1,
                name: 'Конец',
                weight: 165, 
                faveColor: '#F5A45D', 
                faveShape: 'ellipse'
            }
        })




        for(let i = 0; i < this.dialogue.scenario.steps.length; i++) {
            let step = this.dialogue.scenario.steps[i];
            for (let j = 0; j < step.master.variants.length; j++) {
                let sdata = {
                    data: {
                        source: step.id, 
                        target: step.master.variants[j].id, 
                        faveColor: '#6FB1FC', 
                        strength: 90 
                    }
                };
                edges.push(sdata);
                let tdata = {
                    data: {
                        source: step.master.variants[j].id, 
                        target: step.master.variants[j].next_step, 
                        faveColor: '#6FB1FC', 
                        strength: 90 
                    }
                };
                edges.push(tdata);
            }

            for (let j = 0; j < step.pupil.variants.length; j++) {
                let sdata = {
                    data: {
                        source: step.id, 
                        target: step.pupil.variants[j].id, 
                        faveColor: '#F5A45D', 
                        strength: 90 
                    }
                }
                edges.push(sdata);
                let tdata = {
                    data: {
                        source: step.pupil.variants[j].id, 
                        target: step.pupil.variants[j].next_step, 
                        faveColor: '#F5A45D', 
                        strength: 90 
                    }
                }
                edges.push(tdata);
            }
        }

        this.graphData = {
            nodes: nodes,
            edges: edges
        }
    }
   

    ngOnDestroy() {
    }


    public tapNode(node) {
        this.selected_node = null;
        for (let i = 0; i < this.dialogue.scenario.steps.length; i++) {
            if (this.dialogue.scenario.steps[i].id == node.id()) {
                this.selected_node = this.dialogue.scenario.steps[i];
                break;
            }
        }
    }

    public tapBg() {
        this.selected_node = null;
    }

    
}
