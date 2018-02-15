# Pluggy - Hack Tech Valley 2018
Pluggy: The Intelligent Business Location Planner

### Description
Display information pertaining to businesses within Schenectady including their hours of operation, services, traffic/pedestrian flow, and commercial property opportunities. In doing so, we provide entrepreneurs with data which would allow them to determine the most strategic location for their business, which will help business growth in the area.


### Using the Project
You'll need [node](https://www.nodejs.org).  
Run your fav terminal and globally install all these goodies:  
```npm i -g cordova ionic```  
Move into the parent folder of where you'd like to begin & clone our repo:  
```git clone https://github.com/geeksmarter/hack-tech-valley-pluggy pluggy```  
Install project dependandies:  
```npm i```  
Now just run the project!  
```ionic serve -l```  


### APIs 
We pull from the following sources (or wanted to):
* Google places API for retrieving hours of operation, services and reviews for existing businesses.
* Utilize the GE Intelligent Cities API for traffic and pedestrian flow, as well as parking availability around businesses.
* Potentially Zwillo or their competitors for retrieval of zoning information as well as available land or undeveloped property.
* Potentially Yelp or their competitors API for additional user reviews.

[Gyuchan](https://github.com/hwanggc3572) Assisted me in concepting and building the UI, this was both our first experience using ionic.  
[Josh](https://github.com/NerdsvilleCEO) set up an amazing Firebase/Python api but we didn't make to to integration with the UI due to some project difficulties during the time period.
Source code for our API can be found: [here](https://github.com/PluggyApp/api) 

Remote API:

```/poi```

```/profile?email=test@test.com```

```/poi?email=test@test.com```
