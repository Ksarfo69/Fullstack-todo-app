const express = require('express');
const router = express.Router();
const dbConn = require('../config/dbConn')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//get all todos
router.get('/get', async(req,res)=>{
   const query = 'SELECT * FROM users'
    dbConn.query(query, (err, results)=>{
        if(err){
            res.status(201).send(err)
        }
        else{
            res.status(200).send(results)
        }
    })
})


//get todo list of logged in user
router.get('/getusertodolist/:id', async(req,res)=>{
    const query = 'SELECT * FROM todo_list WHERE user_id = ?'
     dbConn.query(query, [req.params.id], (err, results)=>{
         if(err){
             res.status(201).send(err)
         }
         else{
             res.status(200).send(results)
         }
     })
 })


 //register
router.post('/register', async(req,res)=>{
    const query = 'INSERT INTO users(username, email, password) VALUES(?, ?, ?)'
    const hashedpass = await bcrypt.hash(req.body.password, 10)
    const data = [
        req.body.username,
        req.body.email,
        hashedpass
    ]
    dbConn.query(query, data, (err)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})


//login
router.post('/login', (req, res)=>{
    const query = 'SELECT * FROM users WHERE email = ?'
    const data = [
        req.body.email
    ]
    let user = []
   dbConn.query(query, data, (err, results)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            user = results[0]
            if(!user){
                return res.status(400).send('No user by that email')
            }

            bcrypt.compare(req.body.password, user.password, (err, result)=>{
                
                if(result == false){
                    return res.status(400).send('Incorrect password')
                }
                else{
                    const {password, ...others} = user

                    const accesstoken = "Bearer " + jwt.sign(
                        {
                            user_id: user.user_id
                        
                        },
                        process.env.JWT_KEY,
                        {expiresIn: "3d"}
                    )
                    res.status(200).send({...others, accesstoken})
                }
            })
        }
    })

   
})



// add new todo
router.post('/new/todo/:id', (req, res)=>{
    const query = 'INSERT INTO todo_list(user_id, todo, todo_status, entry_date) VALUES (?, ?, ?, ?)'
    const completionStatus = 0
    const date = new Date()
    const dateToString = date.toISOString()
    const slicedDate = dateToString.slice(0, 10)


    const data = [
        req.params.id,
        req.body.todo,
        completionStatus,
        slicedDate
    ]

    dbConn.query(query, data, (err)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send("New Todo added successfully")
        }
    })

})


//edit completion status
router.put('/edit/:id', (req, res)=>{
    const query = 'UPDATE todo_list SET todo_status = ? WHERE todo_id = ?'
    dbConn.query(query, [req.body.todo_status, req.params.id], (err)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send('Todo status updated successfully')
        }
    })
})


//Delete todo
router.delete('/delete/todo/:id', (req, res)=>{
    const query = 'DELETE FROM todo_list WHERE todo_id = ?'
    const data = parseInt(req.params.id)
    dbConn.query(query, [data], (err)=>{
        if(err){
            res.status(400).send(err)
        }
        else{
            res.status(200).send("Todo has been deleted successfully")
        }
    })
})




module.exports = router