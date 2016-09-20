let app = angular.module('JeopardyApp', []);

app.controller('MainController', function ($scope) {
    let questions = [{
        question: 'What is a Ferrari?',
        answer: 'a car',
        points: 200,
    }, {
            question: 'Is blue a color?',
            answer: 'yes',
            points: 400,
        }, {
            question: 'Is green a color?',
            answer: 'yes',
            points: 600,
        }, {
            question: 'Is red a color?',
            answer: 'yes',
            points: 800,
        }, {
            question: 'Is the sun a color?',
            answer: 'no',
            points: 1000,
        }];
    let current = 0;
    $scope.score = 0;
    $scope.guess = '';
    $scope.currentQ = questions[current].question;
    $scope.currentP = questions[current].points;
    $scope.currentA = questions[current].answer;

    current++;

    $scope.submitGuess = function () {


        // $scope.currentS = questions[current].points;
        if ($scope.guess === $scope.currentA) {
            $scope.score = $scope.score + $scope.currentP;
        } else {
            $scope.score = $scope.score - $scope.currentP;
        }

        $scope.currentQ = questions[current].question;
        $scope.currentP = questions[current].points;
        $scope.currentA = questions[current].answer;
        current++;
    }








});