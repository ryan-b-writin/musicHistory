# Music History

This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

Now here's your assignment.

## Individual Assignment

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

1. Create five options for the artist select element of any artist that you enjoy.
1. Create at least five options for the album select element. One, or more, album for each artist.
1. The links in the navigation bar don't need to link to anything just yet, you can use `<a href="#">View music</a>` for now
1. Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.

## Completing

Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`.

# Music History Part 3

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

### Vagrant machine

```bash
cd /vagrant/musichistory
git checkout -b version-3
```

### Host machine (students not using Vagrant)

```bash
cd ~/workspace/musichistory
git checkout -b version-3
```

## Instructions

Time to make Music History into a single page application. Before you begin please [review the sample code](https://github.com/nashville-software-school/front-end-curriculum/tree/master/15-javascript-103#simple-spa-using-events-and-css) I provided in JavaScript 103 about building a simple SPA.

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
1. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.
1. Add a `<button>` element at the bottom of the input fields labeled "Add".
1. The input fields and the add button make up the *Add Music View*.
1. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
1. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
1. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
1. When the user clicks on "List Music" in the naviation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
1. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

## Merging

Remember to merge the `version-3` branch back into `master` when you're done.
