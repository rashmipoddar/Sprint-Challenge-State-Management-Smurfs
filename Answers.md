1. What problem does the context API help solve?
  
  Context Api solves the problem of having state in various components and not having a centralized state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is the central point where all the app data ie the state lives. The action creator is the function which returns and action object which is passed to the reducer which updates the state and passes it back to the UI.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the main state needed by multiple components. Component state is state which lives in the Component and is only needed by that component. Eg. form state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware which allows us to make Http requests to a server. It changes our action creators because the action is passed to the middleware first which passes the action to reducer if needed. The action passed may or may not be modified.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favourite state management system. It keeps the state separate from the Components. Hence, all the logic is stored elsewhere instead of Component.
