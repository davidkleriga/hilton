# hilton

This project has been setup using React-Scripts
For simple evaluation, assessment one and two have been placed into their own independent projects.
Each may be run by entering the corresponding folder and running the following two commands
The project will startup on http://localhost:3000 (please ensure the port is available, or pass in an optinal PORT variable at runtime)


```
npm install 
npm start
```

Example

```
git clone git@github.com:davidkleriga/hilton.git
cd hilton
cd hilton-assessment-one
npm install
npm start
```



## Notes

There is a Models folder that contains the basic properties required for the UI.
These don't do much, but it provides a very quick stepping stone into an independent API or GraphQL query.

The State for the Room Widget is managed via simple JS instance mutations. This is not in-line with the React philosophy.
Objects should be replaced not changed. For brevity sake, I abstracted the modifications to a instance member. 
This could be swiftly replaced with a redux action creator.

The RoomSelectionWidget component contains a few instance methods that generate chunks of JSX independently.
These could be broken out into Pure functions to increase Readability and allow for component variation.

The dropdowns in my browser, on the room selection page, are styled differently that the screenshot. 
As I understand selects, vanilla HTML does not allow them to be significantly modified for security reasons. 
Typically, in this case, a library is used to generate HTML to appear like a dropdown, but ends up being custom stylable markup.

I have chosen to use CSS independently of the views render mechanism
I prefer to do this because it allows non-JSX devs to easily manage well-known CSS.
However, this may be upgraded to using npm modules such as styled-components or POCO's to embed into corresponding components.
This change would require minimal effort and is a personal preference.





Thank you for your time and consideration,
David Kleriga
