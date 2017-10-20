import { Component, OnChanges, ElementRef, Input } from '@angular/core';
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
    }`]
})
export class NgCytoscapeComponent implements OnChanges {

    @Input() public elements: any;
    @Input() public style: any;
    @Input() public layout: any;
    @Input() public zoom: any;

    @Input() public tapNode: Function;
    @Input() public tapBg: Function;
    

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
            max: 1.5
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
                'color': '#fff'
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

    public ngOnChanges(): any {
        this.render();
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
            zoom: 0.5,
            selectionType: 'single',
            userPanningEnabled: true,
            panningEnabled: true,
        });
        let self = this;
        this.cy.on('tap', function(evt){
            let evtTarget = evt.target;
            console.log('evtTarget', evtTarget);
            console.log('this.cy', self.cy);
            if( evtTarget === self.cy ){
                self.tapBg();
                  console.log('tap on background');
            } else {
                self.tapNode(evtTarget);
                console.log('tap on some element');
            }
            //let node = evt.target;
            
            // console.log( 'tapped ' + node.id() );
        });
        console.log( 'this.elements ', this.elements );

        this.cy.fit();
        //this.cy.elements().kruskal();
                
    }

}
