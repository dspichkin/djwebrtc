/*!
Copyright (c) The Cytoscape Consortium
Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

;(function(){ 'use strict';

  // registers the extension on a cytoscape lib ref
  var register = function( cytoscape, dagre ){
    if( !cytoscape || !dagre ){ return; } // can't register if cytoscape unspecified

    var isFunction = function(o){ return typeof o === 'function'; };

    // default layout options
    var defaults = {
      // dagre algo options, uses default value on undefined
      nodeSep: undefined, // the separation between adjacent nodes in the same rank
      edgeSep: undefined, // the separation between adjacent edges in the same rank
      rankSep: undefined, // the separation between adjacent nodes in the same rank
      rankDir: undefined, // 'TB' for top to bottom flow, 'LR' for left to right,
      ranker:  undefined, // Type of algorithm to assigns a rank to each node in the input graph.
                          // Possible values: network-simplex, tight-tree or longest-path
      minLen: function( edge ){ return 1; }, // number of ranks to keep between the source and target of the edge
      edgeWeight: function( edge ){ return 1; }, // higher weight edges are generally made shorter and straighter than lower weight edges

      // general layout options
      fit: true, // whether to fit to viewport
      padding: 30, // fit padding
      spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      nodeDimensionsIncludeLabels: undefined, // whether labels should be included in determining the space used by a node (default true)
      animate: false, // whether to transition the node positions
      animateFilter: function( node, i ){ return true; }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
      animationDuration: 500, // duration of animation in ms if enabled
      animationEasing: undefined, // easing of animation if enabled
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
      transform: function( node, pos ){ return pos; }, // a function that applies a transform to the final node position
      ready: function(){}, // on layoutready
      stop: function(){} // on layoutstop
    };

    // constructor
    // options : object containing layout options
    function DagreLayout( options ){
      var opts = this.options = {};
      for( var i in defaults ){ opts[i] = defaults[i]; }
      for( var i in options ){ opts[i] = options[i]; }
    }

    // runs the layout
    DagreLayout.prototype.run = function(){
      var options = this.options;
      var layout = this;

      var cy = options.cy; // cy is automatically populated for us in the constructor
      var eles = options.eles;

      var getVal = function( ele, val ){
        return isFunction(val) ? val.apply( ele, [ ele ] ) : val;
      };

      var bb = options.boundingBox || { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
      if( bb.x2 === undefined ){ bb.x2 = bb.x1 + bb.w; }
      if( bb.w === undefined ){ bb.w = bb.x2 - bb.x1; }
      if( bb.y2 === undefined ){ bb.y2 = bb.y1 + bb.h; }
      if( bb.h === undefined ){ bb.h = bb.y2 - bb.y1; }

      var g = new dagre.graphlib.Graph({
        multigraph: true,
        compound: true
      });

      var gObj = {};
      var setGObj = function( name, val ){
        if( val != null ){
          gObj[ name ] = val;
        }
      };

      setGObj( 'nodesep', options.nodeSep );
      setGObj( 'edgesep', options.edgeSep );
      setGObj( 'ranksep', options.rankSep );
      setGObj( 'rankdir', options.rankDir );
      setGObj( 'ranker', options.ranker );

      g.setGraph( gObj );

      g.setDefaultEdgeLabel(function() { return {}; });
      g.setDefaultNodeLabel(function() { return {}; });

      // add nodes to dagre
      var nodes = eles.nodes();
      for( var i = 0; i < nodes.length; i++ ){
        var node = nodes[i];
        var nbb = node.layoutDimensions( options );

        g.setNode( node.id(), {
          width: nbb.w,
          height: nbb.h,
          name: node.id()
        } );

        // console.log( g.node(node.id()) );
      }

      // set compound parents
      for( var i = 0; i < nodes.length; i++ ){
        var node = nodes[i];

        if( node.isChild() ){
          g.setParent( node.id(), node.parent().id() );
        }
      }

      // add edges to dagre
      var edges = eles.edges().stdFilter(function( edge ){
        return !edge.source().isParent() && !edge.target().isParent(); // dagre can't handle edges on compound nodes
      });
      for( var i = 0; i < edges.length; i++ ){
        var edge = edges[i];

        g.setEdge( edge.source().id(), edge.target().id(), {
          minlen: getVal( edge, options.minLen ),
          weight: getVal( edge, options.edgeWeight ),
          name: edge.id()
        }, edge.id() );

        // console.log( g.edge(edge.source().id(), edge.target().id(), edge.id()) );
      }

      dagre.layout( g );

      var gNodeIds = g.nodes();
      for( var i = 0; i < gNodeIds.length; i++ ){
        var id = gNodeIds[i];
        var n = g.node( id );

        cy.getElementById(id).scratch().dagre = n;
      }

      var dagreBB;

      if( options.boundingBox ){
        dagreBB = { x1: Infinity, x2: -Infinity, y1: Infinity, y2: -Infinity };
        nodes.forEach(function( node ){
          var dModel = node.scratch().dagre;

          dagreBB.x1 = Math.min( dagreBB.x1, dModel.x );
          dagreBB.x2 = Math.max( dagreBB.x2, dModel.x );

          dagreBB.y1 = Math.min( dagreBB.y1, dModel.y );
          dagreBB.y2 = Math.max( dagreBB.y2, dModel.y );
        });

        dagreBB.w = dagreBB.x2 - dagreBB.x1;
        dagreBB.h = dagreBB.y2 - dagreBB.y1;
      } else {
        dagreBB = bb;
      }

      var constrainPos = function( p ){
        if( options.boundingBox ){
          var xPct = dagreBB.w === 0 ? 0 : (p.x - dagreBB.x1) / dagreBB.w;
          var yPct = dagreBB.h === 0 ? 0 : (p.y - dagreBB.y1) / dagreBB.h;

          return {
            x: bb.x1 + xPct * bb.w,
            y: bb.y1 + yPct * bb.h
          };
        } else {
          return p;
        }
      };

      nodes.layoutPositions(layout, options, function( ele ){
        ele = typeof ele === "object" ? ele : this;
        var dModel = ele.scratch().dagre;

        return constrainPos({
          x: dModel.x,
          y: dModel.y
        });
      });

      return this; // chaining
    };

    cytoscape('layout', 'dagre', DagreLayout);

  };

  if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
    module.exports = function( cytoscape, dagre ){
      register( cytoscape, dagre || require('dagre') );
    };
  } else if( typeof define !== 'undefined' && define.amd ){ // expose as an amd/requirejs module
    define('cytoscape-dagre', function(){
      return register;
    });
  }

  if( typeof cytoscape !== 'undefined' && typeof dagre !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
    register( cytoscape, dagre );
  }

})();