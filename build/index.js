'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var expressPort = 8080;
var webpackPort = 4000;

// Setting
app.use(_bodyParser2.default.json());
app.use(function (error, req, res, next) {
  console.error('[throw-error]', error.stack);
  return res.status(500).json({
    error: error,
    next: next,
    code: 500,
    msg: "Something broken!!!"
  });
});
app.use((0, _expressSession2.default)({
  secret: "dolf@@c(*@_ASD",
  resave: false,
  saveUninitialized: true
}));

// Router Controll
app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));
app.get('*', function (req, res) {
  return res.status(200).sendFile(_path2.default.join(__dirname, './../public'));
});

// PRODUCTION
app.listen(expressPort, function () {
  console.log('[express] Server is running on port:', expressPort);
});

// DEVELOPMENT
if (process.env.NODE_ENV === 'development') {
  var config = require('./../webpack.config.js');
  config.entry.push('webpack-dev-server/client?http://localhost:4000');
  config.entry.push('webpack/hot/only-dev-server');
  config.devtool = 'inline-source-map';

  var options = {
    hot: true,
    host: "localhost",
    contentBase: './public',
    publicPath: '/'
  };
  _webpackDevServer2.default.addDevServerEntrypoints(config, options);
  var compiler = (0, _webpack2.default)(config);
  var devServer = new _webpackDevServer2.default(compiler, options);
  devServer.listen(webpackPort, "localhost", function () {
    console.log('[webpack-dev] Server is running on port:', webpackPort);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'server/index.js');

  __REACT_HOT_LOADER__.register(expressPort, 'expressPort', 'server/index.js');

  __REACT_HOT_LOADER__.register(webpackPort, 'webpackPort', 'server/index.js');
}();

;