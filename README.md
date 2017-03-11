# reduxstagram
An online tutorial for learning React, Redux, and React Router.

A Wes Bos [course](https://learnredux.com/account/access/58c06f62a811657a91a60dde)

### Goals
* Learn Redux
* Practice with Jest & Redux
  - [Testing your app with Jest](http://academy.plot.ly/react/6-testing/)
* Practice with Flow & Redux
  - [Redux and Flowtype](https://medium.com/@cdebotton/redux-and-flowtype-69ff1dd09036#.evfqvps8d)
  - [Flow: Type Checking wiht Flow in React + Redux](https://www.robinwieruch.de/the-soundcloud-client-in-react-redux-flow/)

## Notes
* Using my [meteor-react-bp](https://github.com/stevenjmarsh/meteor-react-bp) to begin the project (instead of the course's webpack setup)
* Starting at 4pm on Wednesday 3/8/17
  - Let's see how long this takes me
  - Course stated 2.5 hours (I am slow however)
* Flowtype, for the Main component, children should be a required prop, but flow throws an error when not seeing 'children' as an explicit 'prop'
    - the work around is to make children an optional prop
    - this may be an issue with [Flow](https://github.com/facebook/flow/issues/1964)
* Flowtype, can a function signature be a defined type? so a function being passed in to props, could be of that type, which would declare its parameter types and return types
### Redux Steps
* add initial actions
* add initial reducers
* add provider (state access via router)
* connect store (react-redux)
* 

### Progress
* took about 45 minutes to get through all project setup
    - that included alot though, git repos, readme notes, flow, jest, storybook setup, adding any other npm packages to the meteor project, and viewing the first course
* doing tests and flow adds a bit of time
* punting on storybook (needed stylus webpack configuring. not.) 
