angular.module('aquarium.home', [])

  .factory('HomeFactory', function($http, apiUrl) {

      return{


        

    };   

  })

  .controller('homeCtrl', function(HomeFactory, $scope, $state){

    $scope.moveToGames = function(){
      
      $state.go('app.games');
    }

    
<<<<<<< HEAD
       $scope.timerRunning = true;

            
        $scope.$broadcast('timer-start');
                
            

           

            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
            });
=======
      
>>>>>>> c35f75ee9a50e06136946f48ffbdd984d1d2750b

    

  })

  .controller('appCtrl', function(HomeFactory, $scope, $state){

    $scope.isGame = function(){
      
      console.log($state.current.name);
      if($state.current.name == 'app.flash' || $state.current.name == 'app.trash' || $state.current.name == 'app.wash'){
      	return false;
      }else{
      	return true;
      }
    }

    
      

    

  })
  
;