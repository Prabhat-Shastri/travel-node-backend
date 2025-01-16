How to make it run?
1. cd into the project
2. do npm install
3. do npm start 
if npm start doesn't work then do npm run dev 

test


I am building a project. Let me give you a vague description of it. What I want to know is what tech stack to use, give me many and give the pros and cons. i want to know how to host it, and how I can make it better. give me ideas and a good workflow plan

Its a travel website like TripAdvisor, but we are making it with more features and better. Basically, the user enters preferences on what they like - nightlife, wildlife, adventure, beach, watersports, etc. Our app collects data on this. Then, the user gives their preferred destination. For example, punta cana. Using machine learning and the preferences of the user, we generate an itenenary for them. Problems - where do we get data on the activities from? Like, I want to suggest activities to someone, where do I get those activities to choose from (which API) and how do I use ML to match it to user preferences, what attributes do I use? Second problem - We want to integrate this into a calendar app, so we can scrape flights, hotels, check in check out times, and book the whole trip for the client. The purpose of this is to basically eliminate the role of a travel agent to make it cheaper for people.
This is the basic idea. some other features - a celndar app which users can go into and edit according to their convenience. A chatbot, so they can ask the AI to change their plans according to their new preferences - say, they don't like one of the plans or think its too hectic, it can be changed. Also, we want to integrate flight bookings from within. We also want to suggest users based on our ML model how compatible they arewith this trip, and suggest more compatible locations - for example this punta cana trip is a 75% match for you - this Paris trip is a 25% match for you. Also integrate a budget feature

Final plan -

okay so we need a final plan then we can get started. you are going to assist me through this whole project
We have decided to use mongo, express, node, react for the most part. for the ML part we will use python and integrate it in what way you think best. for authentication, suggest us the best possible way to do it (Maybe JWT, or just use firebase or smth)
For the ML model, we will use collaborative filtering (like a recommendation system, and see if one user liked this trip, and another user liked another trip, how likely would they like each others). we will use clustering and classification as well. we will figure this out as we go.
However, to intiablly train our model we will need your help. where do we get the data from and how do we start training it. we need to figure out all the atributes/variables we need for this as well
We are moving ahead with the calendar feature
were moving ahead with flight booking integration
We are m,moving ahead with chatbot integration. We will need a way of changing the itinerary based on what the user says and how the chatbot changes it
We want to host on AWS/GCP/Azure
We want to move ahead with a social feature and connect users to other similar users to find group trips by sending friend requests
Or, people an post travel groups and others can join. we can have a separate tab for this
User generated content is also an interesting feature, we will see as it goes. i.e. people can post their own trips and other users can see them and comment on them and then we can use this to train our ML model and suggest more trips to them
We want to include dynamic pricing policies. after all, this is a way to replace the role of travel agents
