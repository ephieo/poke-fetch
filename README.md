# poke-fetch
A CLI app detailing a basic fetch request to the pokemon API

<img width="355" alt="Screenshot 2022-11-29 at 00 31 15" src="https://user-images.githubusercontent.com/60614102/204409158-2c487d4c-a8e4-45f8-8ef0-c826d9d81444.png">

## Step #1

- Create a repo with github 
- When you have navigated into the working repo type `npm init` into your terminal 
- This will take you through some steps to initialize the app and create a `package.json file` this will also generate a `package.lock.json` file and a `node_modules` directory/folder.



## Step #2

- Once your npm dependency setup in finished install `node-fetch` by typing  `npm i node-fetch` into your terminal. 
- Create a `index.js` file at the root of the project.
- In this file in your IDE import `node-fetch` at the top of your file :

```
import fetch from 'node-fetch';
```

## Step #3
- Write a function that calls to the poke API and returns a list of pokemon using the following endpoint:

`https://pokeapi.co/api/v2/pokemon/${PokemonID or Name}`

## Step #4
- Further refactor your function to make a nested call using the pokemon id to call a pokemon characteristic from the follwoing endpoint :

`https://pokeapi.co/api/v2/characteristic/${PokemonID or Name}`

## Step #5

-You should be able to run your file with a fied argument to call to the pokemon api to return a nice little fact about your chosen pokemon

#### Ephrathah Oyedoh
