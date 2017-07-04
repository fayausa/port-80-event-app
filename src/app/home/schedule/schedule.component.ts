import { Component, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-schedule',
  styleUrls: ['./schedule.scss'],
  templateUrl: 'schedule.component.html'
})
export class ScheduleComponent {
  toggleObj: any = {1: false};
  isClicked: any;
  srcUrl = 'https://www.youtube.com/embed/LMlbRsiYgpw';
  disabled = false;
  filterDetailsArray: any = [];
  filters = [
    {
      "id": 1,
      "title": "Keynote",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 2,
      "title": "Blockchain",
      "bg_color_class": "bg_yellow"
    },
    {
      "id": 3,
      "title": "FOSS",
      "bg_color_class": "bg_whitesmoke"
    },
    {
      "id": 4,
      "title": "Data Science",
      "bg_color_class": "grey"
    },
    {
      "id": 5,
      "title": "Machine Learning",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 6,
      "title": "AI",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 7,
      "title": "PWA",
      "bg_color_class": "bg_yellow"
    },
    {
      "id": 8,
      "title": "VR & AR",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 9,
      "title": "IOT",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 10,
      "title": "Bionics",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 11,
      "title": "Workshop",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 12,
      "title": "Civic Technologies",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 13,
      "title": "Privacy",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 14,
      "title": "NLP",
      "bg_color_class": "bg_primary"
    },
    {
      "id": 15,
      "title": "Bioinformatics",
      "bg_color_class": "bg_primary"
    }

  ]
  schedule = [
    {
      "id": 1,
      "title": "Registration",
      "stage": "Registration Desk (Park Center)",
      "time": "9:00 AM",
    },
    {
      "id": 2,
      "title": "Inauguration",
      "stage": "Travancore Hall (Park Center)",
      "time": "9:30 AM",
    },
    {
      "id": 3,
      "title": "Tech Disruption – Opportunities & Threats",
      "speaker": "Mr. Michael Gord (Founder & CEO - MLG Blockchain Consulting)",
      "time": "10:00 AM",
      "stage": "Travancore Hall (Park Center)",
      "filters": [1,2],
      "video_url": "https://www.youtube.com/embed/LMlbRsiYgpw",
    },
    {
      "id": 4,
      "title": "Tea Break",
      "time": "11:00 AM",
    },
    {
      "id": 5,
      "title": "FOSS - Role of communities",
      "speaker": "Mr. Satish Babu (Chair, APRALO - ICANN)",
      "time": "11:10 AM",
      "stage": "Travancore Hall (Park Center)",
      "filters": [3],
      "video_url": "https://www.youtube.com/embed/Vtiqj1hCH4I",
    },
  ]
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    let parent = this;
    this.filters.forEach(function(col, key) {
      parent.filterDetailsArray[col.id] = col;
    });
  }
  onClick1() {
   if (this.isClicked) {
    this.isClicked = false;
   }else {this.isClicked = true}
  }
  toggle(id: number) {
    if (this.toggleObj[id]) {
    this.toggleObj[id] = false;
   }else {this.toggleObj[id] = true}
   console.log('toggleObj', this.toggleObj);
  }

 }

