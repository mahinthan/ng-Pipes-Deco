import { Component, OnInit } from '@angular/core';

import { Server } from '../../models/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  public serverStatus: string;
  public appStatus: Promise<{}>;
  public servers: Server[];

  constructor() { }

  ngOnInit() {
    this.appStatus = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('stable');
      }, 2000);
    });
    this.servers = [
      { name: 'DEV', size: 'small', creationDate: new Date(), status: 'offline' },
      { name: 'QAT', size: 'small', creationDate: new Date(), status: 'offline' },
      { name: 'SVT', size: 'medium', creationDate: new Date(), status: 'stable' },
      { name: 'UAT', size: 'medium', creationDate: new Date(), status: 'offline' },
      { name: 'PREPROD', size: 'large', creationDate: new Date(), status: 'stable' },
      { name: 'PROD', size: 'large', creationDate: new Date(), status: 'stable' },
    ];
    this.serverStatus = '';
  }

  addServer() {
    this.servers.push({
      name: 'DEMO', size: 'medium', creationDate: new Date(), status: this.serverStatus || 'stable'
    });
  }

}