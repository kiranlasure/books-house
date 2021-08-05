import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { customIncrement, onchangeChangeChannel } from '../state/counter.actions';
import { getChannel } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value:number ;
  channelName$: Observable<string>;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannel);
  }

  onAdd(){
    console.log(this.value);
    this.store.dispatch(customIncrement({value: +this.value}))
  }

  changeText(){
    this.store.dispatch(onchangeChangeChannel())
  }

}
