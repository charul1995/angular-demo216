import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FromService } from '../formSubmit.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
export class FeedDetailComponent implements OnInit {
  feed : any;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private  formService: FromService) { }

  ngOnInit() {
    var slug = this.activatedRoute.snapshot.url[1].path ? this.activatedRoute.snapshot.url[1].path : '';
    this.formService.getFeedBySlug(slug).subscribe(responsedatas => {
      this.feed = responsedatas.data;
      console.log(responsedatas);
    }
    );

  }
}