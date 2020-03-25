# Create a React project from scratch (without create-react-app)

### Steps: 
1. ```npm init -y```
2. ```npm i -D @babel/core @babel/preset-react @babel/preset-env```
3. Create file .bablerc
```
{
 "presets": ["@babel/preset-react", "@babel/preset-env"]
}
```
4. ```npm i -D webpack webpack-cli babel-loader webpack-dev-server html-webpack-plugin```
5. Configure webpack: create file webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
      },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
}
```
6. index.html in root folder
```
<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>React Example</title>
</head>
<body>
  <div id="root"></div>
  <script src="/build/bundle.js"></script>
</body>
</html>
```
7. index.js in root folder (also install react npm pakages```npm i react react-dom```)
```
import React from 'react'
import ReactDOM from 'react-dom'

import App from './src/App'

ReactDOM.render(<App />, document.getElementById("root"))
```
8. App.js in src folder
```
import React from 'react';

const App = () => (
    <div className="container">
        <h1>Hello World, React!</h1>
    </div>
)

export default App;
```
9. To import css ```import 'App.css';``` (also install css npm pakages mentioned in webpack file)
10. Edit 'scripts' in package.json
```
"scripts": {
  "start": "webpack-dev-server --hot --open",
  "build": "webpack --config webpack.config.js --mode production",
}
```
[](https://medium.com/@tim.givois.mendez/create-a-react-project-from-scratch-without-create-react-app-f02fce4e05b)
