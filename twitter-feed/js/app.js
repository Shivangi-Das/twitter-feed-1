/*
*Author : Shivangi Das
*Date : 22/11/2016
*
*
*Data store and script for some click events
*/


/*Angular JS code*/
(function(){
	var app= angular.module('twitterFeed',[]);

	/*this controller is used for navigation*/
	app.controller('Navigation', function(){
		this.tab=tab;
	});
	var tab=[
	{
		name: 'Tweets',
		count: 200,
		
	},
	{
		name: 'Photos/Videos',
		count: 200,
		
	},
	{
		name: 'Following',
		count: 100,
		
	},
	{
		name: 'followers',
		count: "1M",
		
	}
	];

	/*This controller is for selecting panels- not used*/
	/*app.controller("PanelController",function(){
		this.tab=1;

		this.selectTab=function(setTab){
			this.tab=setTab;
		};

		this.isSelected=function (checkTab) {
			return this.tab===checkTab;
		};
	});*/
	/*This controller is for the tweets */
	app.controller('TweetController', function(){
		this.tweet=tweet;
	});

	var tweet=[
		{
			name:"Shivangi",
			image:"images/image1.png",
			username:"@iShivangi",
			time:"2m",
			tweet:"I can add a video without any plugin in HTML5!",
			video:"video/video1.mp4",
			showVideo:true,
			image1:"",
			retweetCount:"",
			showRetweet:true
		},
		{
			name:"John Doe",
			image:"images/image2.png",
			username:"@iJohn",
			time:"20m",
			tweet:"AngularJS is cool. It allows me to follow DRY",
			video:"",
			image1:"",
			retweetCount:"",
			showRetweet:true
		},
		{
			name:"Shivi",
			image:"images/image3.png",
			username:"@iShivi",
			time:"11h",
			tweet:"One book, two book, red book, blue book.",
			video:"",
			image1:"images/image5.png",
			showImage:true,
			retweetCount:30,
			showRetweet:true
		},
		{
			name:"Jane Doe",
			image:"images/image4.png",
			username:"@iJane",
			time:"Nov19",
			tweet:"...and now we know Basscss",
			video:"",
			image1:"images/image2.png",
			showImage:false,
			retweetCount:"",
			showRetweet:true
		},
		{
			name:"Shivangi",
			image:"images/image1.png",
			username:"@iShivangi",
			time:"Nov11",
			tweet:"First tweet!",
			video:"",
			image1:"",
			retweetCount:29,
			showRetweet:true
		}

	];

})();
/*Angular JS code-end*/

$(document).ready(function(){
	"use strict";
	/*check for mobile phones*/
	var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	if (ismobile){
 	/*for mobile screens*/
 	$('.searchDiv, .navDiv, .sideSpaceDiv').addClass('hideDiv');
 	$('.tweetBird').css('float','right');
 	$('.burgerMenu, .searchDivforPhone,.toggleMenu').removeClass('hideDiv');
 	$('.burgerMenu').css('float','left');

 	/*toggle effect*/
 	var Disclosure = function(el, options) {
	el.isActive = false;
	el.details = $('.toggleMenu');

	/*widgets for hide, show and toggle effect*/
	el.hide = function() {
	     for (var i = 0; i < el.details.length; i++) {
	        el.details[i].style.display = 'none';
	     }
	};
	el.show = function() {
	    for (var i = 0; i < el.details.length; i++) {
	        el.details[i].style.display = 'block';
	     }
	};
	el.toggle = function(e) {
	     e.stopPropagation();
	     el.isActive = !el.isActive;
	     if (el.isActive) {
	        el.show();
	      } else {
		     el.hide();
		    }
	}
	/*toggle menu*/
	 el.addEventListener('click', function(e) {
	 el.toggle(e);
	 });
	 el.hide();
	  return el;
 	};

 	/*in case of more than one dropdown menus*/
 	var disclosures = document.querySelectorAll('[data-disclosure]');
  	for (var i = 0; i < disclosures.length; i++) {
	    disclosures[i] = new Disclosure(disclosures[i]);
  	};
  	/*temporary effect till we add more pages*/
	$('.toggleMenu a').click(function () {
	  	$('.toggleMenu').hide();
	  });

	}	
	else{
	/*for big screens*/
		$('.searchDiv, .navDiv ,.sideSpaceDiv').removeClass('hideDiv');
	}
	/*Effect on pressing star icon*/
	$('.icon.fa-star').click(function () {
			$(this).toggleClass('selectedStar');	
	});	
	/*Effect on pressing reply icon*/
	$('.icon.fa-share').click(function () {
		$(this).addClass('selectedRetweet');
		$(this).siblings('.commentArea').removeClass('hideDiv');
	});	
	$('.submitButton').click(function(){
		$(this).parent('.commentArea').addClass('hideDiv');
		$(this).siblings('.replyBox').val("");
		$(this).parent().siblings('.fa-share').removeClass('selectedRetweet');
	});
	/*Effect on pressing retweet icon*/
	$('.icon.fa-refresh').click(function () {
		$(this).addClass('selectedRetweet');
		
		if($(this).siblings('.retweetCount').text().trim()!="")
				$(this).siblings('.retweetCount').text(parseInt($(this).siblings('.retweetCount').text().trim())+1);
			else{
				$(this).siblings('.retweetCount').text("1");
			}
		
	});

	//initiallisation
	$('.navDivision:eq(0)').addClass('activeNav');	

	$('.navDivision').click(function () {
		$('.navDivision').removeClass('activeNav');
		$(this).addClass('activeNav');
	});	


});	