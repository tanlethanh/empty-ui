# modal

I want a simple logic to manage layout of a modal and its container, no much thing need to override,
just write something by yourself and use Empty logic.

It seems we only access/mutate context state inside a child of provider, but how about out of component. For e.g. a worker run in background, each time having thing change, it will trigger and show a modal, we can wrap it inside a function component, worker is in useEffect with empty dependency.
