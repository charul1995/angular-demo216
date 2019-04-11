import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var slug=this.activatedRoute.snapshot.url[1].path?this.activatedRoute.snapshot.url[1].path:'';
     this.feedService.getFeedBySlug(slug).subscribe( responsedatas =>
          {
                   this.feed=responsedatas.data;  
                   console.log(responsedatas)   ;         
             }
      );

  }
  }

}