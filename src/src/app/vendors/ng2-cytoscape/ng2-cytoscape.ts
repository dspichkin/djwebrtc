import { Component, OnChanges, ElementRef, Input } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

declare var jQuery: any;
declare var cytoscape: any;

@Component({
    selector: 'ng2-cytoscape',
    template: '<div id="cy"></div>',
    styles: [`#cy {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        cursor:pointer;
    }`]
})
export class NgCytoscapeComponent implements OnChanges {

    @Input() public elements: any;
    @Input() public style: any;
    @Input() public layout: any;
    @Input() public zoom: any;

    @Input() public tapNode: Function;
    @Input() public tapBg: Function;
    @Input() clickCenter: Subject<any>;
    @Input() clickZoomIn: Subject<any>;
    @Input() clickZoomOut: Subject<any>;

    cy;

    public constructor(private el: ElementRef) {


        

        this.layout = this.layout || {
            /*
            fit: true,
            avoidOverlap: true,
            padding: 30, 
            avoidOverlapPadding: 10,
            nodeDimensionsIncludeLabels: false,
            */
           name: 'dagre',

        };

        this.zoom = this.zoom || {
            min: 0.1,
            max: 1
        };

        this.style = this.style || cytoscape.stylesheet()
            .selector('node')
            .css({
                'content': 'data(name)',
                'shape': 'data(faveShape)',
                'text-valign': 'center',
                'text-outline-width': 4,
                'text-outline-color': 'data(faveColor)',
                'background-color': 'data(faveColor)',
                'width': '150px',
                'height': '100px',
                'color': '#fff',
                'text-wrap': 'wrap',
                'text-max-width': '150px'
            })
            .selector(':selected')
            .css({
                'border-width': 3,
                'border-color': '#333'
            })
            .selector('edge')
            .css({
                'label': 'data(label)',
                'color': 'black',
                'curve-style': 'bezier',
                'opacity': 0.666,
                'width': 'mapData(strength, 70, 100, 2, 6)',
                'target-arrow-shape': 'triangle',
                'source-arrow-shape': 'circle',
                'line-color': 'data(faveColor)',
                'source-arrow-color': 'data(faveColor)',
                'target-arrow-color': 'data(faveColor)'
            })
            .selector('edge.questionable')
            .css({
                'line-style': 'dotted',
                'target-arrow-shape': 'diamond'
            })
            .selector('.faded')
            .css({
                'opacity': 0.25,
                'text-opacity': 0
            });
    }

    ngOnInit() {
        this.clickCenter.subscribe(()=> {
            this.center();
        })
        this.clickZoomIn.subscribe(()=> {
            this.zoomin()
        })
        this.clickZoomOut.subscribe(()=> {
            this.zoomout() 
        })
    }

    public ngOnChanges(): any {
        try {
            this.render();
        } catch(e) {
            console.log(e);
            let self = this;
            setTimeout(function() {
                try {
                    self.render();
                } catch(e) {
                     console.log(e);
                }
            }, 1000);
        }
        
    }

    public render() {
        this.cy = cytoscape({
            container: jQuery(this.el.nativeElement),
            layout: this.layout,
            minZoom: this.zoom.min,
            maxZoom: this.zoom.max,
            style: this.style,
            elements: this.elements,
            zoomingEnabled: false,
            zoom: 0.4,
            selectionType: 'single',
            userPanningEnabled: true,
            panningEnabled: true,
        });
        let self = this;
        this.cy.on('tap', function(evt){
            let evtTarget = evt.target;
            if( evtTarget === self.cy ){
                self.tapBg();
            } else {
                self.tapNode(evtTarget);
            }
            setTimeout(function() {
                self.cy.resize(); 
            }, 500);
            
        });


        this.cy.center();
    }

    public center() {
        console.log('CENTER')
        this.cy.center();
        this.cy.resize(); 
    }


    public zoomin() {
        let zoom = this.cy.zoom();
        this.cy.zoomingEnabled( true );
        this.cy.zoom(zoom + 0.2);
        this.cy.zoomingEnabled( false );
        this.cy.resize(); 
    }
    public zoomout() {
        let zoom = this.cy.zoom();
        this.cy.zoomingEnabled(true);
        this.cy.zoom(zoom - 0.2);
        this.cy.zoomingEnabled(false);
        this.cy.resize(); 
    }



}
