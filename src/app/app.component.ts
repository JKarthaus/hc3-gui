import {Component} from '@angular/core';
import {DataService, Hc3State} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hc3-gui';

  hc3State: Hc3State;
  error: any;

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";

  highTempTreshold = {
    '40': {color: 'green'},
    '55': {color: 'orange'},
    '85': {color: 'red'}
  };

  lowTempTreshold = {
    '40': {color: 'green'},
    '55': {color: 'orange'},
    '85': {color: 'red'}
  };
  outdoorTempTreshold = {
    '15': {color: 'green'},
    '30': {color: 'orange'},
    '38': {color: 'red'}
  };

  constructor(private dataService: DataService) {
    this.hc3State = {
      mainCircuitPumpON: false,
      flowPumpON: false,
      garagePumpON: false,
      garageTemperature: 0,
      outdoorTemperature: 0,
      bufferTemperature: 0,
      flowTemperature: 0,
      temp_combustionChamber: 0
    }
  }


  getHc3State() {
    this.dataService.getHc3State()
      .subscribe({
        next: (data: Hc3State) => this.hc3State = {...data}, // success path
        error: error => this.error = error, // error path
      });
  }


}
