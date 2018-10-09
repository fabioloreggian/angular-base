import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../shared/test-service/test-service.service';

@Component({
  selector: 'test-app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(protected testService: TestServiceService) { }

  ngOnInit() {
  }

}
