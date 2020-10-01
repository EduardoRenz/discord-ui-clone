"use strict";

var _client = _interopRequireDefault(require("prisma/client"));

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * yarn tsc = compila
 * yarn dev = roda nodemon (pre configurado no package.json)
 */
_graphql.default.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});

_client.default.user.count().then(console.log);