import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, ChartModule, Menubar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'KDDAlumnos';




   items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: '2020',
                routerLink: ['/gender']
            },
            {
                label: '2021',
                routerLink: ['/2021'] 
            },
            {
                label: '2022',
                routerLink: ['/2022'] 
            },
            {
                label: '2023',
                routerLink: ['/2023'] 
            },
            {
                label: '2024',
                routerLink: ['/2024'] 
            },
            {
                label: '2025',
                routerLink: ['/2025'] 
            },    
        ]
    }

}
