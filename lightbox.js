/*
Basic Protected Lightbox for WordPress: a minimal lightbox designed to work with
WordPress's default gallery block and provide a small measure of protection from
image theft by common means.

Copyright (C) 2019 Justin Cardoza
Full license is in gpl-2.0.txt
Software originally from https://justincardoza.com/

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

jQuery(document).ready(function($)
{
	var galleries = $('.wp-block-gallery'); //Get a list of all the WordPress galleries on the page.
	var currentGalleryImages;               //When the lightbox is open, this is an array of the image URLS in the current gallery.
	var currentImageIndex;                  //When the lightbox is open, this is the index of the current image.
	var touchStart = null, touchEnd = null; //The start and end points of a touch event for gestures on mobile.
	
	//Displays the image specified by 'index' in the lightbox from the current gallery.
	function setCurrentImage(index)
	{
		currentImageIndex = index;
		
		if(currentImageIndex < 0)
			currentImageIndex = currentGalleryImages.length - 1;
		else if(currentImageIndex >= currentGalleryImages.length)
			currentImageIndex = 0;
		
		$('#lightbox-image').attr('src', currentGalleryImages[currentImageIndex]);
	}
	
	//Starts a touch event for swipe gestures on mobile.
	function handleTouchStart(event)
	{
		if(!touchStart && event.originalEvent.touches && event.originalEvent.touches.length > 0)
			touchStart = {x: event.originalEvent.touches[0].clientX, y: event.originalEvent.touches[0].clientY};
	}
	
	//Updates the end point of the active touch event for swipe gestures on mobile.
	function handleTouchMove(event)
	{
		if(touchStart && event.originalEvent.touches && event.originalEvent.touches.length > 0)
			touchEnd = {x: event.originalEvent.touches[0].clientX, y: event.originalEvent.touches[0].clientY};
	}
	
	//Handles a completed touch event for swipe gestures on mobile. First checks to make sure the
	//gesture is at least 3 times more horizontal than vertical and spans more than 25% of the
	//screen width. Then it checks which direction the swipe was and goes back or forward based on that.
	function handleTouchEnd(event)
	{
		if(touchStart && touchEnd)
		{
			var deltaX = touchEnd.x - touchStart.x;
			var deltaY = touchEnd.y - touchStart.y;
			
			if(Math.abs(deltaX) > Math.abs(deltaY) * 3 && Math.abs(deltaX) > $(document).width() * 0.25)
			{
				if(deltaX > 0)
					previousImage();
				else
					nextImage();
			}
		}
		
		touchStart = null;
		touchEnd = null;
	}
	
	//Closes the lightbox and allows the document to scroll again.
	function closeLightbox()
	{
		$('#lightbox').css('display', 'none');
		$('body').removeClass('lightbox-open');
	}
	
	//Displays the next or previous image from the current gallery.
	function nextImage() { setCurrentImage(currentImageIndex + 1); }
	function previousImage() { setCurrentImage(currentImageIndex - 1); }
	
	//Handles page-wide keypresses to control the lightbox using the keyboard.
	function handleKey(e)
	{
		if(e.which == 27) //Escape
			closeLightbox();
		else if(e.which == 37 && $('#lightbox').css('display') != 'none') //Left arrow
			previousImage();
		else if(e.which == 39 && $('#lightbox').css('display') != 'none') //Right arrow
			nextImage();
	}
	
	//If there are galleries on the current page, insert the lightbox elements,
	//bind event listeners, and add transparent overlays on the gallery thumbnails.
	if(galleries.length > 0)
	{
		//Insert the lightbox markup.
		$('body').append(
			'<div id="lightbox">' +
				'<div id="lightbox-close">&times;</div>' +
				'<div id="lightbox-content">' +
					'<div id="lightbox-left">&lsaquo;</div>' +
					'<figure id="lightbox-main"><img id="lightbox-image" /><img src="' + BasicProtectedLightbox.overlay + '" class="lightbox-overlay" /></figure>' +
					'<div id="lightbox-right">&rsaquo;</div>' +
				'</div>' +
			'</div>');
		
		//Bind event listeners to the lightbox controls.
		$('#lightbox-left').click(previousImage);
		$('#lightbox-right').click(nextImage);
		$('#lightbox-close').click(closeLightbox);
		
		//Bind touch listeners for handling swipe gestures.
		$('#lightbox').on('touchstart', handleTouchStart);
		$('#lightbox').on('touchmove', handleTouchMove);
		$('#lightbox').on('touchend', handleTouchEnd);
		
		$(document).keydown(handleKey);
		
		//Add a transparent overlay to each thumbnail and bind an event listener to open
		//the lightbox on that image when it's clicked or tapped.
		$('.blocks-gallery-item figure').append('<img src="' + BasicProtectedLightbox.overlay + '" class="lightbox-overlay" />').click(function()
		{
			var image = $(this).find('img:not(.lightbox-overlay)'); //Find the actual image that was clicked.
			var currentImageUrl = image.attr('src');                //Get the URL of the image.
			var gallery = image.parents('.wp-block-gallery');       //Get the gallery that the image is a part of.
			
			//Set up the array of images in the current gallery and set the current image index to the one that was clicked.
			currentGalleryImages = gallery.find('img:not(.lightbox-overlay)').map(function() { return this.src }).get();
			currentImageIndex = currentGalleryImages.indexOf(currentImageUrl);
			
			//If there aren't multiple images in the gallery, hide the navigation buttons.
			//This is useful if you want to display a single image but also enable the
			//lightbox and copy protection.
			if(currentGalleryImages.length < 2)
				$('#lightbox-left, #lightbox-right').addClass('lightbox-button-hidden');
			else
				$('#lightbox-left, #lightbox-right').removeClass('lightbox-button-hidden');
			
			//Set the lightbox to display the correct image, then show the lightbox
			//and prevent the document from scrolling behind it.
			$('#lightbox-image').attr('src', currentImageUrl);
			$('#lightbox').css('display', 'block');
			$('body').addClass('lightbox-open');
		});
	}
});
