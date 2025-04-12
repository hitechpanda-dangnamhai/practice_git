const express = require('express')

const app = express()

const app.get('/health', (req, res) => {

    console.log("ssssss")
})

const app.post('/', (req, res) =>{

    console.log('posttttttttttttttttttttttt')
})

const app.post('/feature/cool_feature', (req, res)) =>{

    console.log("ddddddddddddddddd")
}