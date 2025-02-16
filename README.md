# React App 🚀

# Parcel does these things ([parcel](https://parceljs.org/))

- Dev build
- local server
- HMR (hot module replacement)
- It uses a file watching algorithms
- Caching - faster build
- Image optimization
- minification
- Bundling
- Compress the file
- Content hashing
- Code Splitting
- Differential Bundling (Support older browser)
- Diagnostic
- Error handling
- Https server can also be used

# Food ordering App Design

Header

- Logo
- Nav Items
  Talk is Cheap, Show me the Code! (Namaste-React) 3
  Body
- Search
- Restaurant Container
- Restaurant Card
- Dish Name
- Image
- Restaurant Name
- Rating
- Cuisines
- Time to Deliver

Footer

- Copyright
- Links
- Address
- Contact

# React hooks

- Normal js utils functions written by react developers
- ex- useState() - used to create a state varible in react. Whenever a state variable changes, react re render the component.
- React uses reconciliation algorithms also called React fiber.
  There is actual DOM present for every tag in the html like our res-cotainer div
  React creates a virtual DOM(representation of a actual DOM) for our container (its basically a normal js object)
  so Diff algorithms finds the diff b/w old and new virtual DOMs and then update the DOM with the new data with eveny render.
  so basically its not toching the actual DOM, also these algo work on js objects so reacts is very fast.
  It can do efficient DOM manupulation
  Further reading https://github.com/acdlite/react-fiber-architecture

- useEffect()
