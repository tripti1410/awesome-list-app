# Awesome list app 
  ## About
  1. This site is build using [React static](https://github.com/react-static/react-static) as base template. 
  2. Markdown data taken from [Awesome](https://github.com/sindresorhus/awesome). 
  3. Converting markdown to json data structure. Example below -
 
  ```json = {
  "title": "content",
  "children": [
    {
      "title": "Platforms",
      "link": "platforms",
      "children": [
        {
          "title": "iOS",
          "link": "ios",
          "githubLink": "https://github.com/vsouza/awesome-ios#readme",
          "description": "- Mobile operating system for Apple phones and tablets.",
          "children": []
        }
      ]
    },
    {
      "title": "Programming Languages",
      "link": "programming-languages",
      "children": [
        {
          "title": "JavaScript",
          "link": "javascript",
          "githubLink": "https://github.com/sorrycc/awesome-javascript#readme",
          "description": "",
          "children": [
            {
              "title": "Promises",
              "githubLink": "https://github.com/wbinnssmith/awesome-promises#readme",
              "description": ""
            },
            {
              "title": "Standard Style",
              "githubLink": "https://github.com/standard/awesome-standard#readme",
              "description": "- Style guide and linter."
            }
          ]
        }
      ]
    }]
}
```

## Installations
  - yarn install
  - Dev server 
    - yarn start
  - Production server locally 
    - yarn serve
    - On osx after running above command If you see Error(Input file has corrupt header: glib: SVG has no elements ), do `brew install vips` .
 
## Assumptions
- There will be three levels only; topics/list/item 

## Feature Pending
- Search

## Improvements
- Writing tests

## Libraries used
  #### [React static](https://github.com/react-static/react-static)
  #### [Local forage](https://localforage.github.io/localForage/)
  #### [Material UI](https://material-ui.com/)
  #### [Markdown to html](https://www.npmjs.com/package/markdown-to-html)
  
## Lighthouse score
  
