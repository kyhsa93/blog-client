import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'angular-alert-module';

@Component({
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    constructor (
        private router: Router,
        private alerts: AlertsService
    ) {}

    /**
     * @type {function} if login data does not exists in sessionStorage navigate login page
     */
    ngOnInit () {
        if (!sessionStorage.getItem('id')) {
            this.alerts.setMessage('Please Login', 'error');
            this.router.navigate(['/login']);
        }
    }
};