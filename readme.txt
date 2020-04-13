=== Basic Protected Lightbox ===
Contributors: justincardoza
Tags: lightbox, gallery, images, photography, copy protection
Requires at least: 3.3
Tested up to: 5.4
Stable tag: trunk
Requires PHP: 5.6
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightweight, simple lightbox with basic image protection capabilities.

== Description ==
This plugin provides a very lightweight, minimalist, jQuery-based lightbox for displaying full-screen versions of the images from WordPress galleries. It also gives some basic copy protection that should foil relatively unmotivated image thieves by inserting a transparent overlay over the lightbox and all gallery thumbnails. This will prevent people from copying images in your galleries via right-click or drag-and-drop. It's not a true preventative measure, in that someone who really wants to download copies of your images will most likely find a different way, but it is a little more secure than linking directly to the full resolution versions. Image copying is pretty much impossible to fully prevent aside from just not publishing your work in the first place; my goal with this plugin is to find a good middle ground.

Want to see it in action? Check out the [photos page](https://justincardoza.com/photos) on my personal website for a live demo.

== Features ==
* Minimalist and lightweight: the 3 public-facing files are only about 8KB total
* Mobile-friendly with swipe gesture support
* Prevents some common image download methods with a transparent overlay
* Works immediately and seamlessly with the WordPress default gallery block

== Installation ==
Install the plugin through the WordPress plugins repository or upload the plugin files to your `/wp-content/plugins/basic-protected-lightbox` directory. Then activate the plugin and you're good to go! It will automatically include the JavaScript and CSS files in your site's header and activate whenever it's on a page with at least one WordPress gallery block.

== Screenshots ==
1. This plugin in action on my personal website.

== Frequently Asked Questions ==
= Why should I use this plugin? =
If you want to display your portfolio of images on your website, but you want a little bit of protection from visitors to your site downloading copies of your images and reusing them, this plugin might be for you!

= Will this work with gallery plugin X? =
This lightbox has been tested with WordPress's built-in gallery block. If you're using a gallery plugin that generates the same markup structure, it should work just fine, but I can't guarantee compatibility with every gallery plugin. It can't hurt to try though! If you run into issues, please do reach out via the support forum for the plugin.

== Changelog ==
= 1.1 =
Added keyboard controls and logic to hide the left/right buttons if they aren't needed.
= 1.0 =
Initial release.

== Upgrade Notice ==
= 1.1 =
New usability improvements.
= 1.0 =
Give it a try! It only costs free fifty!
