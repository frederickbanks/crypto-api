# project-api


// This project consists a server-side API created to pull current crypotcurency data from an existing api known as coinlore 'api.coinlore.com'. The data included in this API refers to specific cryptocoin prices and information as well as general information regarding different marketplaces and global data. 

Ive included multiple json files which include specific information regarding each coin, as well as general marketplace and global data about blockchain in general. This project utilizes mongoose and express, as well as being deployed via heroku.

To set up this project, I recommend installing both mongoose and express using npm. If you plan to impliment this data within your own API, you must first create seperate models for the specific data you plan to access. Once completed, you can write the data to your own json files using axios and the fs(file-system). These programs must also be installed using npm prior to use.

After completing the writing of your json files, please construct a controllers directory and create controllers for each model. The controllers allow for functionality to be used with your data, such as pulling specific information from your database. You must also create a connection file where you will require mongoose, your promises, as well as your localhost server.

Next, create a routes folder which will house all the paths for your urls. Each route must be linked to its corresponding controller, which is linked to its subsequent model file. This creates a pathway of "data->functions->path" which can then be linked to your index.js file which acts as your home page. 