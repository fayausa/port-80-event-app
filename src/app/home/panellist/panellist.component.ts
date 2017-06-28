import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-panellist',
  templateUrl: 'panellist.component.html'
})
export class PanellistComponent { 
  constructor(public dialog1: MdDialog, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
  }

  openDialog() {
    this.dialog1.open(DialogPannelComponent);
  }
   
  onClick1() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/nandini.jpg">
                <div><h4>Professor Nandini Vaidyanathan</h4></div>
                <div><span>Founder and Mentor</span></div>
                <div><b>CARMa Venture Services</b></div>
                <text>She’s a traveling teacher who specialises in entrepreneurship, in several Ivy League business schools around the world. 
								After 20 years in the corporate sector, working in MNC-s in all inhabited continents, she returned to India in 2005 and began teaching entrepreneurship. Realizing that the only way she could bring real time experience to her classroom was if she became an entrepreneur herself, she founded CARMa (Creating Access to Resources & Markets; www.carmaconnect.in) with a lofty ambition: to offer professional mentoring to entrepreneurs as a risk mitigating strategy. CARMa mentors start-ups, mature enterprises and family businesses. As on date, CARMa has mentored over 2000 entrepreneurs. CARMa has also been involved in mentoring women to scale from livelihood enterprises to opportunity-based and profitable organizations in Afghanistan, South and East Africa and India.
 								Till date over 10,000 women have been mentored to build scalable and profitable enterprises.</text>
                <div>
                  <a href="https://www.facebook.com/nandini.vaidyanathan" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://in.linkedin.com/in/nandinivaidyanathan" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick2() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/sivasankar.jpg">
                <div><h4>Mr. M Sivasankar IAS</h4></div>
                <div><span>IT Secretary</span></div>
                <div><b>Government of Kerala</b></div>
                <text>Shri. M Sivasankar is presently the Secretary to Government, IT Department since June, 2016. He is also holding the charge of Officer on Special Duty to the Chief Minister of Kerala.
								Sivasankar an Engineering Graduate and a Master of Business Administration (MBA) started his career as an officer in the Reserve Bank of India. He was subsequently appointed as Deputy Collector to the Government. While in service he was selected to the Indian Administrative Service (IAS) 
								in 1995 which is the highest bureaucratic position in administrative service of India. </text>
                <br>
              `)
        .open();
  }

  onClick3() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/ashraf.jpg">
                <div><h4>Dr. Asharaf S.</h4></div>
                <div><span>Associate Professor</span></div>
                <div><b>IIITMK</b></div>
                <text>Asharaf S is an Associate Professor at Indian Institute of 
                Information Technology and Management – Kerala. He is also serving as a visiting faculty in Indian Institute of Space Science and Technology, Trivandrum and as a Mentor in Kerala Startup Mission. He received his PhD and Master of Engineering degrees in Computer Science from Indian Institute of Science, Bangalore. He graduated in Computer Engineering from Cochin University of Science and Technology. After his PhD he has worked with America Online (AOL) and IIM Kozhikode. He is a recipient of IBM outstanding PhD student award 2006, IBM Shared University Research Grant 2015 and IBM OSCP Grant 2017. He has published three books and more than 30 research papers in international journals and conferences. His areas of interest include technologies and business models 
                related to machine learning, web mining, intelligent internet of things and blockchains.</text>
                <div>
                  <a href="https://www.linkedin.com/in/asharafs/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
              		<a href="https://twitter.com/asharafs" title="Twitter" class="social-icons twitter" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick4() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/nandakumar.jpg">
                <div><h4>Mr. K. Nandakumar</h4></div>
                <div><span>Founder</span></div>
                <div><b>SunTec Business Solutions</b></div>
                <text>Nanda Kumar is the Founder, President and CEO of SunTec Business Solutions. 
                He has been a technology evangelist in the software realm for over 26 years for customer-centric software platforms and solutions, specifically, for pricing and billing in transaction-intensive verticals. Relationship-based Pricing, a concept pioneered by him, has been endorsed by leading industry analysts and thought
                leaders as the principal enabler for balanced pricing dynamics in the agile world.</text>
                <div>
                  <a href="https://www.linkedin.com/in/knandakumar/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick5() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
               <img class="speakers-photo-case" src="assets/rahul.jpg">
                <div><h4>Mr. Rahul Alex Panicker</h4></div>
                <div><span>Co-founder and President</span></div>
                <div><b>Embrace Innovations</b></div>
                <text>A technology product leader, Mr. Panicker loves building and leading creative teams to actualize magical 
                products. He spends his time with users, working with designers, engineers, marketers, and sales folks to create these products, and taking them to market, giving them lots of TLC, and having their magic spread. As co-founder and president of Embrace, which has helped over 250,000 vulnerable babies 
                in the developing world, since 2012, his next mission is to transform the world through AI. </text>
                <div>
                  <a href="https://www.facebook.com/rahul.alex.panicker" title="Facebook" class="social-icons fb" target="_blank"></a>
              		<a href="https://twitter.com/rahulapanicker" title="Twitter" class="social-icons twitter" target="_blank"></a>
              		<a href="https://www.linkedin.com/in/rahulap/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                <br>
              `)
        .open();
  }

  onClick6() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/aswin.jpg">
                <div><h4>Mr. Aswin Kumar</h4></div>
                <div><span>Program Manager</span></div>
                <div><b>Frost Sullivan's Middle East</b></div>
                <text>Aswin Kumar is Program Manager with the Mobility (Automotive & Transportation) Practice for
                Frost Sullivan's Middle East, North Africa and South Africa region He has over eight years of BusIness Research and Strategy Consulting experience, which Include over 50 research and consulting projects. His expertise lies in Urban Technology Convergence, Telematics, Business Analysis, Market Entry, Geographical Expansion, Strategic Planning, Pricing Strategy,
                New Product Launch, Business Modelling and Planning, and After Market & OE Strategies.</text>
                <div>
                  <a href="https://www.linkedin.com/in/mgord/" mdTooltip="LinkedIn" title="LinkedIn" class="social-icons linkedIn"></a>
                  <a href="https://twitter.com/bitgord" mdTooltip="Twitter" title="Twitter" class="social-icons twitter"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick7() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-panellist')
        .title('Panellist details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/anoop.jpg">
                <div><h4>Mr. Anoop Ambika</h4></div>
                <div><span>Founder</span></div>
                <div><b>CLAP Research</b></div>
                <text>Anoop P Ambika is a serial entrepreneur, organiser and a technology enthusiast. He is the co-founder of several technology/ environment startups and currently is Chief Executive Officer of CLAP Research and Genpro Life Sciences. 
								CLAP Research brings together a team of Machine Learning, Statistics, NLP and Cognitive Neuroscience specialists to enable the transition of enterprise applications from deterministic systems to implicit learning systems. </text>
                <div>
                  <a href="https://www.facebook.com/anoop.ambika" title="Facebook" class="social-icons fb" target="_blank"></a>
              		<a href="https://www.linkedin.com/in/anoopambika/?ppe=1" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
              		<a href="https://twitter.com/anoopambika" title="Twitter" class="social-icons twitter" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }
}

@Component({
  selector: 'pwa-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogPannelComponent {}