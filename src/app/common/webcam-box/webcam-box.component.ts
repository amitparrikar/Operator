import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'op-webcam-box',
  templateUrl: './webcam-box.component.html',
  styleUrls: ['./webcam-box.component.scss']
})
export class WebcamBoxComponent implements OnInit {

  @ViewChild('videoElem') videoElem: ElementRef;
  @ViewChild('canvasElem') canvasElem: ElementRef;

  buttonText: string = 'Turn Camera On';
  isVideoOn: boolean = false;
  elemWidth: number = 200;
  elemHeight: number = 300;

  constructor() { }

  ngOnInit() {
  }

  /**
   * STARTS THE VIDEO
   * @return {[type]} [description]
   */
  onVideoStart() {

    if(this.isVideoOn) {
      this.onTakeSnap();
    }else {
      this.videoElem.nativeElement.hidden = false;
      this.canvasElem.nativeElement.hidden = true;

      this.buttonText = 'Take Snapshot';
      this.isVideoOn = true;


      /* VIDEO CODE */
      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            //console.log(this.videoElem);
            this.videoElem.nativeElement.src = window.URL.createObjectURL(stream);
            this.videoElem.nativeElement.play();
          });
      }
      /* Legacy code below: getUserMedia
      else if(navigator.getUserMedia) { // Standard
          navigator.getUserMedia({ video: true }, (stream) => {
              this.videoElem.nativeElement.src = stream;
              this.videoElem.nativeElement.play();
          }, (err) => {});
      } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
          navigator.webkitGetUserMedia({ video: true }, (stream) => {
              this.videoElem.nativeElement.src = window.webkitURL.createObjectURL(stream);
              this.videoElem.nativeElement.play();
          }, (err) => {});
      } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
          navigator.mozGetUserMedia({ video: true }, (stream) => {
              this.videoElem.nativeElement.src = window.URL.createObjectURL(stream);
              this.videoElem.nativeElement.play();
          }, (err) => {});
      }
      */
    }
  }

  /**
   * WHEN VIDEO IS ON THIS METHOD TAKE THE STILL PICTURE AND DISPLAYS INSIDE CANVAS
   * @return {[type]} [description]
   */
  onTakeSnap(){
    this.buttonText = 'Turn Camera On';
    this.isVideoOn = false;

    this.canvasElem.nativeElement.hidden = false;
    this.videoElem.nativeElement.hidden = true;

    var canvasContext = this.canvasElem.nativeElement.getContext('2d');

    canvasContext.drawImage(this.videoElem.nativeElement, 0, 0, this.elemWidth, this.elemHeight);

  }
}
