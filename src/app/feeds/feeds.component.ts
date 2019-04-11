import { Component, OnInit } from '@angular/core';
import { FromService } from '../formSubmit.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {
  feedsData : any;
  constructor(private formService: FromService) { }

  ngOnInit() {
    this.formService.getFeeds().subscribe(
        val => {
            
            this.feedsData = val.data;
            console.log(this.feedsData);
        });
  }

}