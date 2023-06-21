import { Component, OnInit, ViewChild } from '@angular/core';
import { DeletetreeService } from './deletetree.service';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-deletetree',
  templateUrl: './deletetree.component.html',
  styleUrls: ['./deletetree.component.scss'],
})

export class DeletetreeComponent implements OnInit {
    queryId: any;
    public treeaccount:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        isExpanded: '',
        isSelected: '',
        isLeaf: '',
        parent_id: '',
        id: '',
        category: '',
    }




    constructor (
        private deletetreeService: DeletetreeService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.treeaccount.created_by = sessionStorage.getItem('email') || ''; 
        
            this.activatedRoute.queryParams.subscribe((params:any) => { 
            });


        this.GpGetEntityById();
    
    }
    GpUpdate() {
        this.deletetreeService.GpUpdate(this.treeaccount).subscribe((data:any) => {
            this.treeaccount.name = ''
 	 	this.treeaccount.isExpanded = ''
 	 	this.treeaccount.isSelected = ''
 	 	this.treeaccount.isLeaf = ''
 	 	this.treeaccount.parent_id = ''
 	 	this.treeaccount.id = ''
 	 	this.treeaccount.category = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.deletetreeService.GpDelete(this.queryId).subscribe((data:any) => {
            this.GpGetEntityById();
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetEntityById() {
        this.deletetreeService.GpGetEntityById(this.queryId).subscribe((data:any) => {
            this.treeaccount = data
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }


}