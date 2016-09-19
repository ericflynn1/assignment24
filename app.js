let app = angular.module('JeopardyApp', []);

app.controller('MainController', function ($scope) {
    $scope.questions = [{ 
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
        question: 'Is yo a color?',
        answer: 'no',
        points: 1000,
    }]
});