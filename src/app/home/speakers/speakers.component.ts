import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'pwa-speakers',
  templateUrl: 'speakers.component.html'
})
export class SpeakersComponent {
  constructor(public dialog: MdDialog, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
   
  onClick1() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/michael.jpg">
                <div><h4>Mr. Michael Gord</h4></div>
                <div><span>Founder & CEO</span></div>
                <div><b>MLG Blockchain Consulting</b></div>
                <text>Michael is a blockchain developer at TD and the founder of 
                Bitcoin Canada and the McGill Cryptocurrency Club. While at McGill, Michael 
                organized the Bitcoin Airdrop events where he gave hundreds of students their first bitcoin.</text>
                <div>
                  <a href="https://www.linkedin.com/in/mgord/" mdTooltip="LinkedIn" title="LinkedIn" class="social-icons linkedIn"></a>
                  <a href="https://twitter.com/bitgord" mdTooltip="Twitter" title="Twitter" class="social-icons twitter"></a>
                </div>
                <br>
              `)
        .open();
  }
  onClick2() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/venkat.png">
                <div><h4>Mr. Venkatramanan P.R</h4></div>
                <div><span>Data Scientist</span></div>
                <div><b>Thought Works</b></div>
                <text>Venkat is Lead Consultant and Data Scientist at ThoughtWorks. Over the last few years, he has helped 
                build the data science capability within ThoughtWorks India, and worked with clients across several industries
                to deliver data science solutions. Before this, he used to work as a Physicist, working primarily in the field
                of phase transitions in Soft Condensed Matter systems.</text>
                <div>
                  <a href="https://www.facebook.com/venkat.rpr" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://twitter.com/venkatramananpr" title="Twitter" class="social-icons twitter" target="_blank"></a>
                  <a href="https://www.linkedin.com/in/venkatramanan-p-r-a25b0321/?ppe=1" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick3() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/satish-babu.jpg">
                <div><h4>Mr. Satish Babu</h4></div>
                <div><span>Chair, APRALO</span></div>
                <div><b>ICANN</b></div>
                <text>Programmer, Development Professional and Internet Governance Practitioner, associated with ICANN, 
                ISOC, IEEE and InApp. Fellow and former President of Computer
                Society of India. Chair, APRALO, ICANN and Member, 2017 HAC, IEEE.</text>
                <div>
                  <a href="https://www.linkedin.com/in/sierrabravo/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                  <a href="https://twitter.com/satish_babu" title="Twitter" class="social-icons twitter" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick4() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/nandini.jpg">
                <div><h4>Prof. Nandini Vaidyanathan</h4></div>
                <div><span>Chairman and Managing Director</span></div>
                <div><b>CARMa Venture Services</b></div>
                <text>She’s a traveling teacher who specialises in entrepreneurship, in several Ivy League business schools around the world. 
                After 20 years in the corporate sector, working in MNC-s in all inhabited continents, she returned to India in 2005 and began teaching entrepreneurship. Realizing that the only way she could bring real time experience to her classroom was if she became an entrepreneur herself, she founded CARMa (Creating Access to Resources & Markets; www.carmaconnect.in) with a lofty ambition: to offer professional mentoring to entrepreneurs as a risk mitigating strategy. CARMa mentors start-ups, mature enterprises and family businesses. As on date, CARMa has mentored over 2000 entrepreneurs. CARMa has also been involved in mentoring women to scale from livelihood enterprises to opportunity-based and profitable organizations in Afghanistan, South and East Africa and India. Till date over 10,000 women have been mentored to build scalable and profitable enterprises. 
                A prolific writer for mainstream newspapers, portals and blogs, her first book Entrepedia: A Step by Step Guide to Becoming an Entrepreneur in India, has been a best-seller since its launch in 2011. Its second edition, updated and contemporized, came out in 2015 and has become the Bible of the start-up community. Her second book, Start up, Stand up, was published in 2016. While Entrepedia was all about how to take an idea from your head to the marketplace, Start up, Stand up is about how to grow your business from your first paying customer to an evangelical user community. 
                A TED speaker and regular jury member of television shows on business channels and entrepreneurship events across the world, she was named Business Woman of the Year by Business Goa in 2014. 
                Passionate about cooking and entertaining people, her versatility extends to the Carnatic form of music in which she is a trained singer. She currently lives in Goa.</text>
                <div>
                  <a href="https://www.facebook.com/nandini.vaidyanathan" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://in.linkedin.com/in/nandinivaidyanathan" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick5() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/amrit.jpg">
                <div><h4>Mr. Amrit Sanjeev</h4></div>
                <div><span>Senior Developer Advocate</span></div>
                <div><b>Google</b></div>
                <text>Amrit Sanjeev is the organizer of Blrdroid, the largest open android developer 
                community in India and also the first Google developer expert for Android from the country.</text>
                <div>
                  <a href="https://www.facebook.com/amrit.sanjeev" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://twitter.com/amsanjeev" title="Twitter" class="social-icons twitter" target="_blank"></a>
                  <a href="https://www.linkedin.com/in/amrit-sanjeev-a4984438/?ppe=1" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }


  onClick6() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/satish-babu.jpg">
                <div><h4>Mr. Amrit Sanjeev</h4></div>
                <div><span>Senior Developer Advocate</span></div>
                <div><b>Google</b></div>
                <text>Amrit Sanjeev is the organizer of Blrdroid, the largest open android developer 
                community in India and also the first Google developer expert for Android from the country.</text><br>
              `)
        .open();
  }


  onClick7() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/abhilash-ashok.jpg">
                <div><h4>Mr. Abhilash Ashok</h4></div>
                <div><span>Senior Lead, UX Development</span></div>
                <div><b>Valorem</b></div>
                <text>An Incorruptible Passionate Microsoft Technology Stack Enthusiast with rich 8+ years’ experience, well-versed with Windows 10/UWP, Xamarin, WPF, HoloLens, Windows Phone/ Store/RT, Kinect for Windows, Xbox, Unity 3D, and legacy technologies like ASP.NET, Silverlight, ExtJS, WinForms, etc. He’s a prominent speaker in Microsoft Technology Community mainly K-MUG.
                He completed graduation in Computer Engineering from Mahatma Gandhi University in 2007. He’s working as Technical Team Lead at Identitymine – a UX Strategy expert company, working close with Microsoft, where he’s responsible for developing premium apps and services with cutting edge technologies. Besides development, he loves mentoring & building enthusiastic team. He finds himself lucky enough to work close with MVPs and Microsoft Regional Directors.
                He also has solid experience in airline domain, telecom domain, software and services; combined with proven experience in product life cycle, product quality, envisioning features, development and implementation. He had received various awards and laurels for his proven performance. 
                He writes about “Nerds False Positive” in his blog – CameTooFar (http://cametoofar.com/) and tweets at https://twitter.com/abhilashca.</text>
                <div>
                  <a href="https://www.facebook.com/abhilashca" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://twitter.com/abhilashca" title="Twitter" class="social-icons twitter" target="_blank"></a>
                  <a href="https://www.linkedin.com/in/abhilashca/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a> 
                </div>
                <br>
              `)
        .open();
  }

  onClick8() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/sanju-mathew.jpg">
                <div><h4>Mr. Sanju Mathew</h4></div>
                <div><span>CEO</span></div>
                <div><b>Onbyz</b></div>
                <text>Sanju Mathew is an Mtech Electronics graduate (Signal Processing and Bionics), Entrepreneur, Intel IoT Innovator and a speaker at National and International conferences on Bionics and IoT. He is an Electronics Hardware Engineer, System Architect and UI/UX designer by choice with over 7 years of experience in these fields. His work includes a Predictive Maintenance AI for Airports (Australia), Water Supply Automation system for star hotels (USA) and Laser Calibration unit for Spectroscopy units (USA). His team built a Low Cost Bionic Hand for the disabled that focuses on modularity of sensors, custom designed feedback systems, powerful and low footprint microprocessor unit and a software architecture that makes use of Marketplace and community driven app development. Projects realized by his team was selected twice as top 10 in the world by Intel and was invited to present it at Intel Developer Forum 2015 and 2016 at San Francisco, USA. His team was awarded the runners-up prize for Mastermind competition by Dr. A P J Abdul Kalam and was one of the winners for National Level Intel IoT Hackathon 2015.</text>
                <div>
                  <a href="https://www.facebook.com/sanjumathewk" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://twitter.com/sanjumathew?lang=en" title="Twitter" class="social-icons twitter" target="_blank"></a>
                  <a href="https://www.linkedin.com/in/sanjumathewk/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }


  onClick9() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/anivar.jpg">
                <div><h4>Mr. Anivar Aravind</h4></div>
                <div><span>Founder Executive Director</span></div>
                <div><b>Indic Project</b></div>
                <text>
                Anivar A. Aravind is Founder Executive Director of Indic Project, a civic-tech non-profit initiative works on language engineering, technology standards and digital rights.
                </text>
                <div>
                  <a href="https://www.facebook.com/an1var/" title="Facebook" class="social-icons fb" target="_blank"></a>
                  <a href="https://twitter.com/anivar" title="Twitter" class="social-icons twitter" target="_blank"></a>
                  <a href="https://www.linkedin.com/in/anivar/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }

  onClick10() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
               <img class="speakers-photo-case" src="assets/rafi.jpg">
                <div><h4>Mr. Mohammed Rafi T. F.</h4></div>
                <div><span>Behavioural Scientist</span></div>
                <div><b>Neuro Lingusitic Programme</b></div>
                <text>
                A Behavioural Scientist, Life Transformation Specialist and International Master Trainer in Neuro Lingusitic Programme with more than 13 years of experience in various streams ranging from Information Technology to Education to Retail and Insurance. 
                Have heart fully trained more than 100 thousand people ranging from CEO’s to Celebrities to Billion Dollar Entrepreneurs. Was instrumental in coaching and mentoring senior managers and CEO’s of Corporate, Government, Private Sector and NGO’s to bring out the best in them and achieve excellence in their respective fields. A creative professional who applies his heart and soul into any assignment that he takes, and transforms the lives of those he comes across in his training programs and one to one coaching sessions. 
                He is one of the only two trainers from Asia to be directly mentored by NLP Co-Creator Dr.John Grinder. He is also the Peak performance coach for Indian Junior Girls Gymnastics team and he is the personal NLP Coach for the National Award Winning Malayalam Actor Jayasurya. Some of Rafi’s esteemed clients include Organizations like Coca Cola, Lupin Pharma, Allianz Group, Reliance Industries, E&Y, LIC and many more. Currently he is pursuing research in Behavioural Neuropsychology, NLP, Micro Expression Patterns and Provocative Coaching. 

                Educational Competency: 
                • Master in Human Resource Management 
                • Researcher in Behavioural Neuropsychology Certified International NLP Master Trainer. 
                • Certified Fire Walk Trainer. 
                • Certified Peak Performance and Behavioural Trainer. 
                • Certified Peak Performance and Behavioural Trainer. 
                • Sales Mastery Expert.
                • Certified Provocative Therapy Practitioner.
                • Integral Eye Movement Therapy Advanced Practitioner. 
                • 1 year Management development program from School of Communication and Management Studies
                </text>
                <div>
                  <a href="https://www.facebook.com/mohammed.rafi.71619" title="Facebook" class="social-icons fb" target="_blank"></a>
                </div>
                <br>
              `)
        .open();
  }


  onClick11() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .okBtnClass('button-speaker')
        .title('Speaker details')
        .dialogClass('model-dialog')
        .body(`
              <img class="speakers-photo-case" src="assets/rama-brahmam.jpg">
                <div><h4>Mr. Rama Brahmam Aleti</h4></div>
                <div><span>Co-founder & Director - Experience Design</span></div>
                <div><b>Think Design Collaborative</b></div>
                <text>Rama has been instrumental in developing the company into a leading, world-class UX Design and Innovation Consultancy. As part of the core team, Rama helps in driving the company's strategy, business and mentor its overall growth. 
                He heads a team of over 90 Designers and has implemented 200+ UX projects in multiple domains such as - Finance, Education, Healthcare, Telecom, E-Commerce, and Entertainment. The companies include several Fortune companies, MNCs and startups. 
                In addition to leading the practice at Think Design, Rama also conducts workshops on Design Thinking, Experience Design & Innovation. Rama is a regular speaker for Product Conclave at NASSCOM Events; a warm association that has seen him conducts six such workshops. He has also been invited by IIM-A, Indian School of Business (ISB), Unicom and conducted numerous Design workshops within India, North America and South America. 
                Rama recommends initiating Design through workshop/s by inviting all stakeholders who can participate and hence collaborate in the solutioning process. He believes ‘Design Driven Innovation’ is the future and is certain that most of the businesses in this connected world will use it as a tool to stay ahead in business and innovation. 
                Rama is a Post Graduate from the prestigious National Institute of Design (NID) after doing his Graduation in Applied Arts from Jawaharlal Nehru Technological University (JNTU). An ardent Design background is what enables Rama to extend his expertise to Strategic Design, Experience Design and Design Thinking. 
                On a personal front, he loves his South Indian delicacies, is an avid movie enthusiast, a great fan of Indian films, especially his regional Telugu movies. Even whilst pursuing his geeky inclinations, he loves spending time with his family, particularly, playing with his daughter and watching her grow up.</text>
                <div>
                  <a href="https://www.linkedin.com/in/aleti-rama-brahmam-127a835/" title="LinkedIn" class="social-icons linkedIn" target="_blank"></a>
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
export class DialogComponent {}
