import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Weather-app';
  chennaiweather: any=[];
  bangaloreweather: any;
  puneweather: any;
  coimbatoreweather: any;
  name: string;
  cityModel: any = 'Chennai';
  cities = ['Chennai','Bangalore','Pune','Coimbatore','Goa']
  hello: any;
  weather:any;

  cityControl: FormControl;

  // data: any;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.chennaiWeather()
  }
  

  chennaiWeather(){
    this.http.get
    ('https://openweathermap.org/data/2.5/find?q=chennai&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric')
    .subscribe((result: any[]) => {
      this.weather = []
      this.weather.push(result)
      console.log(this.weather);
    });
  }

 
    
   getData(data: any){
    this.http.get
    ('https://openweathermap.org/data/2.5/find?q='+data+'&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric')
    .subscribe((result: any[]) => {
      this.weather = []
      this.weather.push(result)
      console.log(this.weather);
    });
  }

}



 //   bangaloreWeather(){
  //   this.http.get
  //   ('https://openweathermap.org/data/2.5/find?q=bangalore&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric')
  //   .subscribe((result: any[]) => {
  //     this.weather = []
  //     this.weather.push(result)
  //     console.log(this.weather);
  //   });
  // }

  //   puneWeather(){
  //   this.http.get
  //   ('https://openweathermap.org/data/2.5/find?q=pune&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric')
  //   .subscribe((result: any[]) => {
  //     this.weather = []
  //     this.weather.push(result)
  //     console.log(this.weather);
  //   });
  // }


  //   coimbatoreWeather(){

  //   }
  //    if( data == 'Bangalore' ){
  //      this.bangaloreWeather()
  //    }
  //    if( data == 'Pune' ){
  //      this.puneWeather()
  //    }
  //    if( data == 'Coimbatore'){
  //      this.coimbatoreWeather()
  //    }
  //    if( data == 'Chennai'){
  //      this.chennaiWeather()
  //    }
  //  }
