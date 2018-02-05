import path from 'path';

import express from 'express';
import session from 'express-session';

import bodyParser from 'body-parser';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import { SessionAPI } from './route'

const app = express();
const expressPort = 8080;
const webpackPort = 4000;

// Setting
app.use(bodyParser.json());
app.use(function(error, req, res, next){
  console.error('[throw-error]', error.stack);
  return res.status(500).json({
    error: error,
    next: next,
    code: 500,
    msg: "Something broken!!!"
  });
});
app.use(session({
  secret: "dolf@@c(*@_ASD",
  resave: false,
  saveUninitialized: true
}));

// Router Controll
app.use('/auth', SessionAPI );
app.use('/', express.static(path.join(__dirname, './../public')));
app.get('*', (req, res, next)=>{
  if( req.path.split('/')[1] === 'static') return next();
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});
// PRODUCTION
app.listen(expressPort, ()=>{
  console.log('[express] Server is running on port:', expressPort);
});

// DEVELOPMENT
if(process.env.NODE_ENV === 'development'){
  const config = require('./../webpack.config.js');
  config.entry.push('webpack-dev-server/client?http://localhost:4000');
  config.entry.push('webpack/hot/only-dev-server');
  config.devtool = 'inline-source-map';

  const options = {
      hot: true,
      host: "localhost",
      contentBase: './public',
      publicPath: '/'
  };
  WebpackDevServer.addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, options);
  devServer.listen(webpackPort, "localhost", ()=>{
    console.log('[webpack-dev] Server is running on port:', webpackPort);
  });
}