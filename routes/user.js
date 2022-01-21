const auth = require('../Authentication')
const { getAllUser, createUser, getUserById, updateUserById, deleteUserById, login,sendUserEmail,optVerify,getUserByName } = require('../controller/user')

const router = require('express').Router()

router.get('/',auth,getAllUser)

router.get('/:id',getUserById)
router.get('/getByName/:name',getUserByName)
router.post('/register',createUser)
router.post('/email',sendUserEmail)
router.post('/verify',optVerify)
router.post('/login',login)
router.put('/:id',updateUserById)
router.delete('/:id',deleteUserById)


module.exports = router