[] The code is written in ES6 as much as possible
[x] create-react-app was used to create your React app
[] There are 2 container components
[] There are 5 stateless components
[] There are 3 routes
[] react-router is being used with proper RESTful routing
[] Redux and redux-thunk middleware are being used to modify state change and make use of async actions to send data and receive data from the server
[x] Use of Rails API backend to persist data for the application 	
[] Good understanding of the react/redux state flow
[] Good understanding of state and props in React
[] Knowledge of async JS with Promises
[] There should be 2 container components - class components
[] There should be 5 stateless components - functional components

###############################
Containers:
1. NewGifContainer
2. EditGifContainer
###############################

###############################
Components:
1. Home
2. NavBar
3. GifForm
4. GifCard
5. HumorCard
###############################

###############################
Routes:
1. /gifs
2. /gifs/new
3. /trips/:id
###############################






# NOTES:
App Component:
<Route exact path='/gifs'  component = {Gifs}/>
<Route exact path='/gifs/new' render={(routerProps) => {...routerProps}/>} />// send additional props in additional to routerProps
<Route exact path='/gifs/:id' />

// because of of async actions need thunk
