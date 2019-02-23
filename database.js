const mongoose = require('mongoose');

const initDB = ()=> {
    mongoose.connect(
        `mongodb://alexandra:sunnyday4@ds249035.mlab.com:49035/koa-graphql`,
        {useNewUrlParser: true}
    );

    mongoose.connection.once('open', ()=> {
        console.log('connected to database');
    });
}

module.exports = initDB;