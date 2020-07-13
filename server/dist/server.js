"use strict";

var _client = require("@prisma/client");

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * yarn tsc = compila
 * yarn dev = roda nodemon (pre configurado no package.json)
 */
const prisma = new _client.PrismaClient();

_graphql.default.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});

prisma.user.count().then(console.log);