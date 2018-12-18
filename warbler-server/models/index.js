const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/warbler", { keepAlive: true, useNewUrlParser: true });
mongoose.connect(process.env.WARBLER_DB_URL, { useNewUrlParser: true });
// mongodb://kyle:kyle123@ds125372.mlab.com:25372/ky-warbler

module.exports.User = require("./user");
module.exports.Message = require("./message");
