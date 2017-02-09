import angular from 'angular'
import rootApp from './src/rootApp/rootApp'
import userCards from './src/userCards/userCards'

var app = angular.module('app', []);
app.component('userCards', userCards)
app.component('rootApp', rootApp)
