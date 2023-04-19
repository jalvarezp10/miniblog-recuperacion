var express = require('express');
var router = express.Router();
const {USERS_BBDD}=require('/home/julianalvarez/Escritorio/miniblog/miniblog/public/javascripts/bbdd.js')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(USERS_BBDD);
});
router.get('/:id', function(req, res,) {
  const{id}=req.params
  const user=USERS_BBDD.find((user) => user.id===id);
  if(!user){
    res.status(404).send('El item no se ha encontrado');
  }else{
    res.status(200).json(user);
  }
}
)


router.post('/',function(req, res) {
  var new_user=req.body;


const user=USERS_BBDD.find((user) => user.id===new_user.id);
if(user){
  res.status(409).send('El item ya existe');
  
}else{
  USERS_BBDD.push(new_user);
  
  res.status(200).send('Usuario '+req.body.name+' ha sido añadido correctamente');
  console.log(new_user);
}  
})

router.put('/:id',function(req, res) {
  var update_user=req.body;
  const {id}=req.params;
  const userIndex=USERS_BBDD.findIndex((user) => user.id===id);
  if(userIndex===-1){
    res.status(404).send('el item no se ha encontrado');

  }else{
    USERS_BBDD[userIndex]=update_user;
    res.status(200).send('El user con id '+id+' ha sido actualizado correctamente');
  }
  
  
})

router.delete('/:id',function(req, res) {
  
  const {id}=req.params;
  const userIndex=USERS_BBDD.findIndex((user) => user.id===id);
  if(userIndex===-1){
    res.status(404).send('el item no se ha encontrado');

  }else{
    USERS_BBDD.splice(userIndex,1);
    res.status(200).send('El user con id '+id+' ha sido eliminado correctamente');
  }
  
  
})



module.exports = router;
