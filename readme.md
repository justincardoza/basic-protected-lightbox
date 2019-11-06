# Basic Protected Lightbox

This plugin provides a very lightweight, minimalist, jQuery-based lightbox for displaying full-screen versions of the images from WordPress galleries. It also gives some basic copy protection that should foil relatively unmotivated image thieves by inserting a transparent overlay over the lightbox and all gallery thumbnails. This will prevent people from copying images in your galleries via right-click or drag-and-drop. It's not a true preventative measure, in that someone who really wants to download copies of your images will most likely find a different way, but it is a little more secure than linking directly to the full resolution versions. Image copying is pretty much impossible to fully prevent aside from just not publishing your work in the first place; this plugin's goal is to strike a good middle ground.

## Features

* Minimalist and lightweight: the 3 public-facing files are only about 8KB total
* Mobile-friendly with swipe gesture support
* Prevents some common image download methods with a transparent overlay
* Works immediately and seamlessly with the WordPress default gallery block

## Installation

I recommend installing this plugin in your admin panel from the [WordPress plugin repository](https://wordpress.org/plugins/basic-protected-lightbox/). You _could_ also clone this repository and put the files into a subdirectory of your site's `/wp-content/plugins/` called `basic-protected-lightbox`. That seems like a lot of work though.

Whichever way of putting the files on your server you chose, activate the plugin in your admin dashboard and you're all set! It will activate on any page of your site with at least one WordPress gallery block.

## Compatibility

I have tested this plugin with WordPress's built-in gallery block. I can't guarantee that it's compatible with every gallery plugin out there, but if your plugin generates the same markup structure, this one should work fine. If you do have any issues, feel free to reach out on the support forum for the plugin on WordPress.org and I will do my best to help.
