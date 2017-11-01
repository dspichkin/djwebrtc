import { Component, OnInit, OnDestroy, Input, Output, OnChanges, EventEmitter, ChangeDetectorRef,
    ViewRef, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

let styles = `
  .ui-select-toggle {
    position: relative;
  }
  /* Fix caret going into new line in Firefox */
  .ui-select-placeholder {
    float: left;
  }
  
  /* Fix Bootstrap dropdown position when inside a input-group */
  .input-group > .dropdown {
    /* Instead of relative */
    position: static;
  }
  
  .ui-select-match > .btn {
    /* Instead of center because of .btn */
    text-align: left !important;
  }
  
  .ui-select-match > .caret {
    position: absolute;
    top: 45%;
    right: 15px;
  }
  
  .ui-disabled {
    background-color: #eceeef;
    border-radius: 4px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
    opacity: 0.6;
    top: 0;
    left: 0;
    cursor: not-allowed;
  }
  
  .ui-select-choices {
    width: 100%;
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
    margin-top: 0;
  }
  
  .ui-select-multiple .ui-select-choices {
    margin-top: 1px;
  }
  .ui-select-choices-row>a {
      display: block;
      padding: 3px 20px;
      clear: both;
      font-weight: 400;
      line-height: 1.42857143;
      color: #333;
      white-space: nowrap;
  }
  .ui-select-choices-row.active>a {
      color: #fff;
      text-decoration: none;
      outline: 0;
      background-color: #428bca;
  }
  
  .ui-select-multiple {
    height: auto;
    padding:3px 3px 0 3px;
  }
  
  .ui-select-multiple input.ui-select-search {
    background-color: transparent !important; /* To prevent double background when disabled */
    border: none;
    outline: none;
    box-shadow: none;
    height: 1.6666em;
    padding: 0;
    margin-bottom: 3px;
    
  }
  .ui-select-match .close {
      font-size: 1.6em;
      line-height: 0.75;
  }
  
  .ui-select-multiple .ui-select-match-item {
    outline: 0;
    margin: 0 3px 3px 0;
  }
  .ui-select-toggle > .caret {
      position: absolute;
      height: 10px;
      top: 50%;
      right: 10px;
      margin-top: -2px;
  }
`;

export interface OptionsBehavior {
    first():any;
    last():any;
    prev():any;
    next():any;
    filter(query:RegExp):any;
}



@Component({
  selector: 'tags',
  styles: [styles],
  templateUrl: 'tags.template.html'
})
export class TagsComponent implements OnInit {
    public element: ElementRef;
    public activeOption;
    public inputedValue: string;
    public itemsOpened:boolean = false;

    private inputMode:boolean = false;
    private behavior:OptionsBehavior;
    

    @Output() public selected:EventEmitter<any> = new EventEmitter();
    @Output() public typed:EventEmitter<any> = new EventEmitter();
    @Output() public opened:EventEmitter<any> = new EventEmitter();
    @Output() public delete:EventEmitter<any> = new EventEmitter();
    @Output() public onChangeSearchValue = new EventEmitter<any>();

    
    @Input() public items: Array<any> = [];
    @Input() public active: Array<any> = [];
    @Input() public textbtn: string = "Добавить";
    @Input() public placeholder: string = "Введите метку";
    @Input() public clearaftereintput: boolean = true;
    @Input() public disabled: boolean = false;
    @Input() public searchValue: string = "";
    


    


    constructor(element:ElementRef
        ) {
        this.element = element;
        this.clickedOutside = this.clickedOutside.bind(this);
    }

    ngOnInit() {
        this.behavior = new GenericBehavior(this);
    }


    deleteTags(item) {
       this.delete.next(item);
    }

    public inputEvent(e:any):void {
        console.log(e)
        // esc
        if (e.keyCode === 27) {
            this.hideOptions();
            this.element.nativeElement.children[0].focus();
            e.preventDefault();
            return;
        }
        // up
        if (e.keyCode === 38) {
            this.behavior.prev();
            e.preventDefault();
            return;
        }
        // down
        if (e.keyCode === 40) {
            this.behavior.next();
            e.preventDefault();
            return;
        }
        // enter
        if (e.keyCode === 13) {
            if (this.inputedValue) {
                this.selectMatch(this.inputedValue);
            }
            e.preventDefault();
            return;
        }

    }


    public add() {
        this.selectMatch(this.inputedValue);
    }

    public change() {
        let value = this.inputedValue;
        let cleanInputValue = this.removeSpecials(value); 
        if (cleanInputValue) {
            this.doEvent('typed', cleanInputValue);
        } else {
            this.hideOptions();
        }
        this.onChangeSearchValue.emit(cleanInputValue);
    }

    private isNumber (text) {
        let reg = new RegExp('[0-9]+$');
        if (text) {
            return reg.test(text);
        }
        return false;
    }

    private removeSpecials(str) {
        var lower = str.toLowerCase();
        var upper = str.toUpperCase();

        var res = "";
        for(var i=0; i < lower.length; ++i) {
            if (this.isNumber(lower[i]) || lower[i] != upper[i] || lower[i].trim() === '') {
                res += str[i];
            }
        }
        return res;
    }



    public doEvent(type:string, value:any):void {
        if ((this as any)[type] && value) {
            (this as any)[type].next(value);
        }
        //if (type === 'selected' || type === 'removed') {
        //    this.onChange(this.active);
        //}
    }

    public matchClick(e:any):void {
        this.inputMode = !this.inputMode;
        if (this.inputMode === true) {
            this.focusToInput();
            this.open();
        }
    }


    private open():void {
        if (this.items.length > 0) {
            this.behavior.first();
        }
        this.itemsOpened = true;
    }


    public clickedOutside():void {
        this.itemsOpened = false;
    }

    public focusToInput(value:string = ''):void {
        setTimeout(() => {
            let el = this.element.nativeElement.querySelector('div.ui-select-container > input');
            if (el) {
                el.focus();
                el.value = value;
            }
        }, 0);
    }

    protected selectActive(value:any):void {
        this.activeOption = value;
    }

    protected isActive(value:any):boolean {
        return this.activeOption === value;
    }

    private hideOptions():void {
        this.items = [];
        if (this.clearaftereintput) {
            this.itemsOpened = false;
            this.inputMode = false;
            this.inputedValue = "";
            this.activeOption = "";
        }
    }

    public mainClick(event:any):void {
        if (this.inputMode === true) {
            return;
        }
        this.inputMode = true;
        let value = String
            .fromCharCode(96 <= event.keyCode && event.keyCode <= 105 ? event.keyCode - 48 : event.keyCode)
            .toLowerCase();
        this.focusToInput(value);
        this.open();
        let target = event.target || event.srcElement;
        target.value = value;
        this.inputEvent(event);
    }

    private selectActiveMatch():void {

        this.selectMatch(this.activeOption);
    }

    private selectMatch(value:any, e:Event = void 0):void {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (!value) {
            return
        }
        this.inputedValue = value;
        this.onChangeSearchValue.emit(value);
        this.doEvent('selected', value);
        this.hideOptions();
        this.focusToInput('');
    }

    public ngOnChanges(changes) {
        if (changes.hasOwnProperty('searchValue')) {
            this.inputedValue = changes.searchValue.currentValue;
        }
    }

}


export class Behavior {

    public actor:TagsComponent;
    public constructor(actor:TagsComponent) {
        this.actor = actor;
    }

    public ensureHighlightVisible(optionsMap:Map<string, number> = void 0):void {
        let container = this.actor.element.nativeElement.querySelector('.ui-select-choices-content');
        if (!container) {
          return;
        }
        let choices = container.querySelectorAll('.ui-select-choices-row');
        if (choices.length < 1) {
          return;
        }
        let activeIndex = this.getActiveIndex(optionsMap);
        if (activeIndex < 0) {
          return;
        }
        let highlighted:any = choices[activeIndex];
        if (!highlighted) {
          return;
        }
        let posY:number = highlighted.offsetTop + highlighted.clientHeight - container.scrollTop;
        let height:number = container.offsetHeight;
        if (posY > height) {
          container.scrollTop += posY - height;
        } else if (posY < highlighted.clientHeight) {
          container.scrollTop -= highlighted.clientHeight - posY;
        }
    }

    private getActiveIndex(optionsMap:Map<string, number> = void 0):number {
        let ai = this.actor.items.indexOf(this.actor.activeOption);
        if (ai < 0 && optionsMap !== void 0) {
            ai = optionsMap.get(this.actor.activeOption.id);
        }
        return ai;
    }
}



export class GenericBehavior extends Behavior implements OptionsBehavior {
    public constructor(actor:TagsComponent) {
        super(actor);
    }

    public first():void {
        this.actor.activeOption = this.actor.items[0];
        super.ensureHighlightVisible();
    }
    public last():void {
        this.actor.activeOption = this.actor.items[this.actor.items.length - 1];
        super.ensureHighlightVisible();
    }

    public prev():void {
        let index = this.actor.items.indexOf(this.actor.activeOption);
        this.actor.activeOption = this.actor
              .items[index - 1 < 0 ? this.actor.items.length - 1 : index - 1];
        this.actor.inputedValue = this.actor.activeOption;
        super.ensureHighlightVisible();
    }

    public next():void {
        let index = this.actor.items.indexOf(this.actor.activeOption);

        this.actor.activeOption = this.actor
            .items[index + 1 > this.actor.items.length - 1 ? 0 : index + 1];
        this.actor.inputedValue = this.actor.activeOption;
        super.ensureHighlightVisible();
    }

    public filter(query:RegExp):void {
        let options = this.actor.items;
        if (this.actor.items.length > 0) {
            this.actor.activeOption = this.actor.items[0];
            super.ensureHighlightVisible();
        }
  }

}

