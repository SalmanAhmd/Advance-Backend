# Webpack

## To use import export in html script file use type="module"

## Module/Package Bundler
Merge(bundle) all js file into single js file

### Steps:
1. ```npm init -y```
2. ```npm i -D webpack webpack-cli```
3. Edit json file:
```
"start":"webpack --mode developement --watch",
```
4. Create webpack.config.js file
```
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}
```
4. * Loader : To bundle up a individual extension files
   * Plugins: bundle up all files
5. ```npm i @babel/core babel-loader @babel/preset-env```
6. Edit webpack config file
```
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
    ]
  }
 ```
7. To import css file install ```npm i -D css-loader style-loader```
and add below code in rules array
```
      {
        test: /\.css$/,
        use: [style-loader, 'css-loader']
      },
```
8. index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>


  <script src='./dist/bundle.js'></script>
  
</body>
</html>
```
9. index.js 
```
import './app.css'
let greet = (name) => {
  console.log(`Hello ${name}`);
}


greet('Salman');
let square = [1, 2, 3, 4, 5]

let value = square.map(num => num * num);
let v1 = document.createElement("span");
v1.textContent = JSON.stringify(value);
v1.classList.add("hello");
console.log(v1)
document.getElementById("root").appendChild(v1);
```
10. app.css
```
.hello {
  background-color: rgb(61, 224, 110);
}
```
============================================================
