import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twentythre',
  imports: [FormsModule, HttpClientModule, ChartModule],
  templateUrl: './twentythre.component.html',
  styleUrl: './twentythre.component.css'
})
export class TwentythreComponent {
selectedYear: number = 2023; // valor por defecto
  
    chartData: any;
    chartOptions: any;
  
    chartData2: any;
    chartOptions2: any;
  
    chartData3: any;
    chartOptions3: any;
  
    chartData4: any;
    chartOptions4: any;
  
    chartData5: any;
    chartOptions5: any;
  
    chartData6: any;
    chartOptions6: any;
  
    chartData7: any;
    chartOptions7: any;
  
    chartData8: any;
    chartOptions8: any;
    constructor(private _dataService: DataService) {}
  
    ngOnInit() {
      this.initChartOptions();
      this.obtenerByGender(this.selectedYear);
      this.obtenerByAge(this.selectedYear);
      this.obtenerByCareer(this.selectedYear);
      this.obtenerByHighSchool(this.selectedYear);
      this.obtenerByCity(this.selectedYear);
      this.obtenerByGrades(this.selectedYear);
      this.obtenerByStatus(this.selectedYear);
      this.obtenerByAvgAge(this.selectedYear);
    }
  
    obtenerByGender(year: number) {
      this._dataService.getDataByGender(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.genero);
          const values = data.map((d: any) => d.cantidad);
  
          this.chartData = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A'],
                hoverBackgroundColor: ['#64B5F6', '#81C784']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
  
    obtenerByAge(year: number) {
      this._dataService.getDataByAge(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.edad);
          const values = data.map((d: any) => d.cantidad);
  
          this.chartData2 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
  
     obtenerByCareer(year: number) {
      this._dataService.getDataByCareer(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.nombre);
          const values = data.map((d: any) => d.total);
  
          this.chartData3 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
    
     obtenerByHighSchool(year: number) {
      this._dataService.getDataByHighSchool(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.nombre_prepa);
          const values = data.map((d: any) => d.total);
  
          this.chartData4 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
      obtenerByCity(year: number) {
      this._dataService.getDataByCity(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.ciudad);
          const values = data.map((d: any) => d.total);
  
          this.chartData5 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
    obtenerByGrades(year: number) {
      this._dataService.getDataByGrades(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.rango_promedio);
          const values = data.map((d: any) => d.total_aspirantes);
  
          this.chartData6 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
    obtenerByStatus(year: number) {
      this._dataService.getDataByStatus(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.estatus);
          const values = data.map((d: any) => d.total);
  
          this.chartData7 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
    obtenerByAvgAge(year: number) {
      this._dataService.getDataByAvgAge(year).subscribe({
        next: (res: any) => {
          const data = res.data; // ← accede correctamente al array
          const labels = data.map((d: any) => d.promedio_edad);
          const values = data.map((d: any) => d.promedio_edad);
  
          this.chartData8 = {
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: ['#42A5F5', '#66BB6A','#FF6384', '#FFCE56', '#BA68C8'],
                hoverBackgroundColor: ['#64B5F6', '#81C784','#FF7992', '#FFE27A', '#CE93D8']
              }
            ]
          };
        },
        error: (error) => {
          console.error('Error fetching data:', error);
        }
      });
    }
  
  
  
  
    initChartOptions() {
      this.chartOptions = {
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: '#495057'
            }
          }
        }
      };
   
    }

}
