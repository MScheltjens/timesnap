## Time Snap

This is a demo-project for a friend/photographer. 
In this project I am exploring the new nextjs 13 app router functionality, together with tailwind css, framer-motion and he use of supabase in server and client components.

Basically all the images could be put in the public folder. However the the photographer would like to upadate his portfolio from time to time. So an admin page is created

- notes:
    - framer motion exit effects are not (yet) possible on page transitions within nextjs 13 (appDir)
    - within server components, the supabase connection does not cache. Therefore the calls to supabase have been converted to fetch. Nextjs has cache options built in into the fetch. This way we can use caching
    - Tailwind classes will need to be optimized in the theme
    - still in developing fase, upload functionality not built yet
