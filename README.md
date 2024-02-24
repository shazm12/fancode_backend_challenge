# Fancode Hiring Challenge
The repo contains the solution implemented by me for all the problem statements given in the `problem-statement.txt`.

# Problem Statement 1 Approach
Now after looking at the controller and model files for the **tours** entity I understood that it was just a simple function that executes the given query and returns the data as results to controller to send as response. So i figured out that the only optimization i can do is with the db query that we have. So my approach was to create indexes for the columns in the tours table which were highly used by the db query. So i created indexes for tour id because it is a foreign key and is used for JOIN queries and also the tour name because we always query by name so having indexes for both made sense to me.

# Problem Statement 2 Approach
For second one I just added more the required columns that needs to be fetched from the matches table in the given query in function `getAllSportsToursAndMatches` present `/models/sports.js`.

# Problem Statment 3 Approach
For this i have written the query for creating a new table  `news` with the required columns in `base.sql` and then created all the controller modules and model modules for serveral endpoints to fetch for the following :-
1. News By match ID.
2. News By Tour ID.
3. News By Sport ID.

# Testing
I have written the test cases for the new News API functionality in the `newsAPI.test.js` in `test/integration` folder. I am testing if  i get the correct status code and just checking if it returns the correct data back as response for the specified id.

# Feedback and Contact
I will like to say the codebase provided was really well structured and well written following all the conventions and design patterns for a MVC based Backend Application. I also really liked how Docker Compose was leveraged by the team to get me easily started with testing and developing this app with the ease of just running one command.

For further communication, please contact me via mail: [berashamik115@gmail.com](mailto:berashamik115@gmail.com).