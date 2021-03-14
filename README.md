# Landing Page Project

### Table of Contents

* [Instructions](#instructions)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Description](#description)
* [Development](#development)
* [Features](#features)
* [Runtime-Environment](#runtime-environment)

### Instructions

* The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project  to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

* To get started, open `js/app.js` and start building out the app's functionality

* For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

### Prerequisites

* You will only need a browser to run this project. Any browser can run this project.

### Installation

* There no more steps to install the project just go and click at `index.html` and your browser will BOOM!! open my project.

## Description

* This is a project of multi-section page that have dynamically created nav-bar based on sections in the DOM.

## Development

* Adding `js/app.js` to my html page.

* Creating nav-bar dynamically using:
    > `for-of` to loop over the section in the DOM. 
      `querySelector()` to get the first elemnt with id `navbar__list`.
      `querySelectorAll()` to get all the titles of the sections.
      `createElement` to create the `li` and `a` elements of nav-bar dynamically.
      `classList` for adding class `menu__link` to created anchors tags.
      `DocumentFragments` to store the created `li` and `a` elements.
      `appednChild` to append the created `a` element/s to the created `li` element/s then appending it to the fragment and then to the nav-list.

* Move to section on click using:
    > `eventDelegation` to get the target, test if clicked element is an anchor element and prevent default actions of clicked anchor element using `preventDefault()`.
      `scrollIntoView` to scroll smoothly to desired section.

* Set the section in view to active using:
    > `getBoundingClientRect()` to get the postions of section and then test it.
      `classList` for adding and removing active class.
      `cssText` for adding some colors to the nav link that is active.

## Features

* Clicking on any nav-link will take you to desired section.

## Runtime Environment

* Unzip the provided `project-1.zip` file (and you already did. That's a great work!!) 
  > Open `index.html` in the browser you desire.
