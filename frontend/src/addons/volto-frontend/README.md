# volto-frontend

Frontend for the ColoradoMesh.org website

## Introduction

This is the volto frontend addon package that houses all the code for the denvermesh.org website.


## Important Info

The Following are addon packages and their version numbers that are needed to successfully get this project up and running using "yarn start" :
"addons": [
    "@eeacms/volto-block-style",
    "@codesyntax/volto-menu-customization",
    "volto-form-block",
    "volto-subblocks",
    "volto-frontend"
  ],

"dependencies": [
"volto-form-block": "3.8.0",
"volto-subblocks": "2.1.0"
"@codesyntax/volto-menu-customization": "*",
],
These version numbers are needed with a volto version of "@plone/volto": "16.26.0".


### Setup the environment
install a new volto project with yo @plone/generator

and then add "volto-frontend" addon along with the rest in the addon's directory, and then:

yarn

yarn start


