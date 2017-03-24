angular.module("myApp.services", [])
    .factory('fireFactory',['$firebaseArray','$q',function ($firebaseArray,$q) {
        var config = {
            apiKey: "AIzaSyCgEikPPj0Ep9toUslv0iTfk53Thr-z_Fc",
            authDomain: "angularapp-80352.firebaseapp.com",
            databaseURL: "https://angularapp-80352.firebaseio.com",
            storageBucket: "angularapp-80352.appspot.com",
            messagingSenderId: "632299129047"
        };
        firebase.initializeApp(config);
        const rootRef = firebase.database().ref();
        const usersRef = rootRef.child('users');
        const feedbackRef = rootRef.child('feedback');
        var users = $firebaseArray(usersRef);

        fireFactory={};
        fireFactory.listUsers= users;
        fireFactory.addUserWithComment = function (newUser,newFeedback) {
            var userKey;

            var newUserRef= usersRef.push(newUser,function (error) {
               if(error){

               }else {
                  console.log('success')
               }
           });
           userKey = newUserRef.key;
           if(userKey!=undefined){
               newFeedback.userId =userKey;
               feedbackRef.push(newFeedback,function (error) {
                    if(error){
                        return error
                    }else {
                        console.log("success feed")
                    }
               });
           }
        };

        return fireFactory;


    }]);