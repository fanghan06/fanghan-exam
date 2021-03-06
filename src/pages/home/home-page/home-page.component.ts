import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ProgramsService } from '../programs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
   private programs: Array<any> = [];

  deleteLast() {
    this.programs.pop();
  }
  saveNewUser() {
    this.programs.push({
      'id': 6,
      'name': '演唱《小幸运》',
      'member': 'Liferay',
      'number': '1',
      'time': '20:10',
      'grade': 84
    });
  }
  sortByAsccending() {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.programs.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  sortByDesccending() {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.programs.sort(function (a, b) {
      return a.id - b.id;
    }).reverse();
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    function shuffle(a) {
      for (let i = a.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }
    shuffle(this.programs);
  }
  constructor(meta: Meta, title: Title, private programsList: ProgramsService) {
    title.setTitle('My Home Page');

    meta.addTags([
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);
    this.programs = this.programsList.getPrograms();
  }
  ngOnInit() {
  }

}
