#link
https://stackoverflow.com/questions/68404723/how-to-move-styles-folder-to-src-folder-in-nextjs-typescript-with-tailwindcss

Delete the .next folder, then run the dev server again (with npm run dev).

This worked in my case. I'm guessing it's some kind of caching issue. Obviously you'll need to change your tailwind.config.js where the content should check ./src/**/\*.{js,jsx,ts,tsx} rather than ./pages/**/\*.{js,jsx,ts,tsx}.

# "content: ["./src/**/*.{js,jsx,ts,tsx}"]," to tailwind.config
