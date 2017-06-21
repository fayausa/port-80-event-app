# Port:80-event-app

![Travis](https://img.shields.io/travis/rust-lang/rust.svg)  ![David](https://img.shields.io/david/expressjs/express.svg)  ![Lience](https://img.shields.io/dub/l/vibe-d.svg)

#### Demo https://my-pwa-72eab.firebaseapp.com/home
Port-80-event-app helps to navigate through event details,If you're attending on-site or remotely.This app will:
* Event schedule with corresponding details.
* Save events to google calendar.
* Event reminders.
* Watch events in realtime.
* Fetch the event details in the feed.
* Instructions for onsite attendees.
* Download Source code and presentation PPT.
### Features
* Progressive web app.
* Native experience, they are responsive and work on every device.
* Push notifications.
* Offline support.
* Add to Home screen feature.
* Ahead-of-Time compilation.
* Application Shell.
* Service worker.

### Technology stack
* Angular 4
* Material design
* Firebase

### Installation
#### Prerequisite

```
npm install -g yarn
```
#### Install

```
git clone https://github.com/fayausa/port-80-event-app.git
cd port-80-event-app
yarn install
ng serve
```
### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
```
ng build --prod --aot && npm run generate-sw
```

### License
MIT
