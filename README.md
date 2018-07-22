# React Basic with Minimal Setup

This repo provide an example to start writing React single page website without using `create-react-app`

# Depedencies

This basic setup is using `webpack-dev-server` as dev sever during development process.

To ensure that we can use ES6 we using `babel-preset-es2015` and `babel-preset-react` to process JSX as React features along ES6.

Some optimization using `shouldComponentUpdate` also implemented on codes sample. As alternative of extends class to `React.PureComponent`