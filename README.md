Udacity Full Stack Nanodgree Assignment
Part 4: The Frontend: JavaScript & AJAX
Lesson 3: Changing Expectations

Count the number of clicks on the cute cat photo.
How hard it can be when changing the requirements of an app with and without organizational code.
It's just a trial app for testing how changing the requirements of an app could be difficult without organizational code.

Description:-

* On master branch:
First, it was an app to count the number of clicks for a single cat photo,
then for 2 cat photos,
then to count the number of clicks for each cat in a list

* Then on apply_MVO branch
To make my code professional and organized use:
MVO (Model View Octopus)

The Final Changed Requirements:

Add Admin mode
By it, you can add new cats

Terms:-
MVO (Model View Octopus)

The View: this is all the stuff for the user sees and interact with that includes the Dom elements, input elements, bottoms, and images. Basically this is the user interface to your application, both for giving your app data and for reading data.

The Model: this is where all of the data is it stored that includes data from the server and from the user.

Now, the model and the view are connected, specifically by our Octopus.
Octopos: is what provides the separation of concerns that we so desperately need when we’re building applications. Now you can think of the Octopus as the thing that holds things together but also keeps them separate enough to allow changes in individual pieces without upsetting the rest. In other words, I can change my view without disturbing my model or I can change the way I am sorting my data without disturbing my view.


