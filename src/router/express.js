const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// 增加express start
const express = require('express');
const app = express();
const appData = require('../../public/api/user.json');
const code = appData;
const data = appData.data;
const apiRoutes = express.Router();

apiRoute.post('/login',function(req, res){
    res.json({
        code:code,//错误码
        data: data//具体数据
    })
})


app.use('/api',apiRoutes);
// 增加express end

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

