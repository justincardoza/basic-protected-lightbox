<?php
/**
 * Plugin Name: Basic Protected lightbox
 * Plugin URI: https://justincardoza.com/software/basic-protected-lightbox
 * Description: A minimal lightbox with basic image protection capabilities.
 * Version: 1.0
 * Author: Justin Cardoza
 * Author URI: https://justincardoza.com/
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/
/*
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

function basic_protected_lightbox_enqueue_scripts() {
	wp_enqueue_style(  'basic-protected-lightbox-style',  plugins_url( 'lightbox-style.css', __FILE__ ) );
	wp_enqueue_script( 'basic-protected-lightbox-script', plugins_url( 'lightbox.js', __FILE__ ), array( 'jquery' ), null, false );
	
	//Pass the overlay image URL as a parameter to the script. We don't want to hardcode the location of the plugin directory.
	wp_localize_script( 'basic-protected-lightbox-script', 'BasicProtectedLightbox', array( 'overlay' => plugins_url( 'overlay.png', __FILE__ ) ) );
}

add_action( 'wp_enqueue_scripts', 'basic_protected_lightbox_enqueue_scripts' );
