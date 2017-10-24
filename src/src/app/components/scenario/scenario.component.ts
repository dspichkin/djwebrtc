import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import { DialogsService } from '../../services/dialogs.service';
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

    onCenterChange: Subject<any> = new Subject();
    onZoomInChange: Subject<any> = new Subject();
    onZoomOutChange: Subject<any> = new Subject();

    loading: boolean = false;
    selected_step: any;
    selected_step_type;

    graphData = {};

    tapNodeFn = this.tapNode.bind(this);
    tapBgFn = this.tapBg.bind(this);
    
    phraseChanged: Subject<string> = new Subject<string>();
    phrase_is_changed: boolean = false;

    constructor(
        private dialogsService: DialogsService
        ) {

        this.phraseChanged
            .debounceTime(2000) // wait 1 sec after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(model => {
                this._save();
                this.phrase_is_changed = false;
            });
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
                        weight: 165, 
                        faveColor: '#6FB1FC', 
                        faveShape: 'rectangle',
                        strength: 90 
                    }
                };
                if (step.master.variants[j].phrase) {
                    data["data"]["name"] = 'Ведущий: \n' + step.master.variants[j].phrase;
                } else {
                    data["data"]["name"] = 'Ведущий';
                }
                nodes.push(data);
            }

            for (let j = 0; j < step.pupil.variants.length; j++) {
                let variant = step.pupil.variants[j];
                let data = {
                    data: {
                        id: variant.id,
                        weight: 165,
                        faveColor: '#F5A45D', 
                        faveShape: 'rectangle',
                        strength: 90 
                    }
                }
                if (step.master.variants[j].phrase) {
                    data["data"]["name"] = 'Игрок: \n' + step.pupil.variants[j].phrase;
                } else {
                    data["data"]["name"] = 'Игрок';
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
        // console.log('tapNode', node.id())
        this.selected_step = null;
        let id = node.id();

        if (id.startsWith('m')) {
            for (let i = 0; i < this.dialogue.scenario.steps.length; i++) {
                for (let j = 0; j < this.dialogue.scenario.steps[i].master.variants.length; j++) {
                    if (this.dialogue.scenario.steps[i].master.variants[j].id == node.id()) {
                        this.selected_step = this.dialogue.scenario.steps[i];
                        this.selected_step_type = 'master';
                        break;
                    }
                }
            }
        } else if (id.startsWith('p')) {
            for (let i = 0; i < this.dialogue.scenario.steps.length; i++) {
                for (let j = 0; j < this.dialogue.scenario.steps[i].pupil.variants.length; j++) {
                    if (this.dialogue.scenario.steps[i].pupil.variants[j].id == node.id()) {
                        this.selected_step = this.dialogue.scenario.steps[i];
                        this.selected_step_type = 'pupil';
                        break;
                    }
                }
            }
        } else {
            for (let i = 0; i < this.dialogue.scenario.steps.length; i++) {
                if (this.dialogue.scenario.steps[i].id == node.id()) {
                    this.selected_step = this.dialogue.scenario.steps[i];
                    this.selected_step_type = 'step';
                    break;
                }
            }
        }
        
    }

    public tapBg() {
        this.selected_step = null;
    }

    private changePersonage() {
        this._makeData();
    }

    public centerChange() {
        this.onCenterChange.next();
    }
    public zoomInChange() {
        this.onZoomInChange.next();
    }
    public zoomOutChange() {
        this.onZoomOutChange.next();
    }

    private _recalculateSteps() {
        let steps = this.dialogue.scenario.steps;
        for (let i = 0; i < steps.length; i++) {
            let new_id = i + 1;
            steps[i].id = new_id
            steps[i].number = new_id;
            steps[i].master.number = new_id;
            steps[i].pupil.number = new_id;
            for (let j = 0; j < steps[i].master.variants.length; j++) {
                steps[i].master.variants[j].id = 'm' + new_id + '.' + (j + 1);
                if (i > 0) {
                    steps[i].master.variants[j].prev_step = steps[i - 1].id;   
                } else {
                    steps[i].master.variants[j].prev_step = -1;
                }
                if (i < steps.length - 1) {
                    steps[i].master.variants[j].next_step = new_id + 1;
                }
                if (i == steps.length - 1){
                    steps[i].master.variants[j].next_step = -1;
                }
            }
            for (let j = 0; j < steps[i].pupil.variants.length; j++) {
                steps[i].pupil.variants[j].id = 'p' + new_id + '.' + (j + 1);
                if (i > 0) {
                    steps[i].pupil.variants[j].prev_step = steps[i - 1].id;
                } else {
                    steps[i].pupil.variants[j].prev_step = -1;
                }
                if (i < steps.length - 1) {
                    steps[i].pupil.variants[j].next_step = new_id + 1;
                }
                if (i == steps.length - 1){
                    steps[i].pupil.variants[j].next_step = -1;
                }
            }
        }
    }

    private addStep() {
        if (this.selected_step) {
            let steps = this.dialogue.scenario.steps;

            let current_step_id = this.selected_step.id;
            let current_step_index = -1;
            let next_step;
            let founded = false;
            /*
            for (let i = 0; i < steps.length; i++) {
                if (founded) {
                    if (!next_step) {
                        next_step = steps[i];
                    }
                    let new_id = steps[i].id + 1;
                    steps[i].id = new_id
                    steps[i].number = new_id;
                    steps[i].master.number = new_id;
                    steps[i].pupil.number = new_id;
                    for (let j = 0; j < steps[i].master.variants.length; j++) {
                        steps[i].master.variants[j].id = 'm' + new_id + '.' + (j + 1);
                        steps[i].master.variants[j].prev_step = steps[i - 1].id;
                        if (i < steps.length - 1) {
                            steps[i].master.variants[j].next_step = new_id + 1;
                        }
                        if (i == steps.length - 1){
                            steps[i].master.variants[j].next_step = -1;
                        }
                    }
                    for (let j = 0; j < steps[i].pupil.variants.length; j++) {
                        steps[i].pupil.variants[j].id = 'p' + new_id + '.' + (j + 1);
                        steps[i].pupil.variants[j].prev_step = steps[i - 1].id;
                        if (i < steps.length - 1) {
                            steps[i].pupil.variants[j].next_step = new_id + 1;
                        }
                        if (i == steps.length - 1){
                            steps[i].pupil.variants[j].next_step = -1;
                        }
                    }
                }

                if (steps[i].id == current_step_id) {
                    current_step_index = i;
                    founded = true;
                }
            }
            */
            
            for (let i = 0; i < steps.length; i++) {
                if (founded) {
                    if (!next_step) {
                        next_step = steps[i];
                    }
                }
                if (steps[i].id == current_step_id) {
                    current_step_index = i;
                    founded = true;
                }
            }


            if (current_step_index > -1) {
                let new_step_id = this.selected_step.id + 1;
                let new_step = {
                    "id": new_step_id,
                    "number": new_step_id,
                    "start_personage": this.selected_step.start_personage,
                    "master": {
                        "number": new_step_id,
                        "variants":[{
                            "id": 'm' + new_step_id + '.' + 1,
                            //"next_step": next_step.id,
                            //"prev_step": this.selected_step.id
                        }]
                    },
                    "pupil": {
                        "number": new_step_id,
                        "variants":[{
                            "id": 'p' + new_step_id + '.' + 1,
                            //"next_step": next_step.id,
                            //"prev_step": this.selected_step.id
                        }]
                    }
                } 

                steps.splice(current_step_index + 1, 0, new_step);
                this._recalculateSteps();
                this.selected_step = this.getStepById(new_step_id);

                this.dialogue.scenario.steps = steps;
                this._makeData();

                this._save();
            }
            console.log('steps', steps);
        }
    }

    getStepById(step_id) {
        let steps = this.dialogue.scenario.steps;
        for (let i = 0; i < steps.length; i++) {
            if (steps[i].id == step_id) {
                return steps[i];
            }
        }
    }

    private deleteStep() {
        let steps = this.dialogue.scenario.steps;
        let step_index = -1;
        for (let i = 0; i < steps.length; i++) {
            if (steps[i].id == this.selected_step.id) {
                step_index = i;
                break;
            }
        }
        if (step_index > 0) {
            steps.splice(step_index, 1);
            this._recalculateSteps();
            this.selected_step = null;
            this.selected_step_type = null;
            this.dialogue.scenario.steps = steps;
            this._makeData();

            this._save();
        }
    }

    private _save() {
        let params = {
            steps: this.dialogue.scenario.steps
        }
        this.loading = true;
        this.dialogsService.saveMyDialogs(this.dialogue.id, params).subscribe((data) => {
            this._makeData();
            this.loading = false;
        });
    }

    private saveSteps() {
        this._save();
    }

    private changedData($event, item, type_text) {
        this.phrase_is_changed = true;
        item[type_text] = $event;
        this.phraseChanged.next($event);
    }
    
}
