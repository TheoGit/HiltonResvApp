# HiltonResvApp assignment
The React Native app I created utilizes the server service found in the HiltonServer system I created.

* * * the node_modules folder was no uploaded, running "npm install" from the command line should install all dependencies

Run "react-native run-ios" from the command line to run the app.

The App is fairly straight forward, the home screen as 3 options
  1.  Create a reservation
  2.  View All reservations
  3.  Retrieve a reservsation by reservation Id.
  
The code was written fairly quickly, there's not as much data validation as I would of done with more time.

The code is in src folder which has 3 subfolders:  components, screens, utils

The "components" folder has a Button, ResvRow compoents which are reusable.

The "screens" folder contains the various screens used in the App.

The "utils" folder contains the fetchData code which is used to execute the GraphQl queries

The index.js file is the entry point for the App

