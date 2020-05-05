const express = require('express')
//const app = express()
var router = express.Router();
const Module = require('../models/modules');
const Login = require('../models/login');
const UserType =require('../models/userType');

router.get('/add',(req,res)=>{
Module.findOne({master_name:req.query.module,child_name:req.query.child},function(err,result){
    if(err) throw err;
    if(result){

    }else{
        const newmodule = new Module({
            master_name:req.query.module,
            child_name:req.query.child,
            display_order:0
        });
        newmodule.save(function(err,result){
            if(err) throw err;
            res.json({result})
        });
    }
})
})
router.post('/list',async(req,res)=>{
    const list = await Module.find({});
    const typelist = await UserType.find();
    var role = typelist.reduce(function(r, e) {
        r[e._id] = e.type;
        return r;
    }, {})
    const user = await Login.findOne({_id:req.query.id});
    console.log(user);
    if(user!==null){
        console.log('1st if')
        if(role[user.user_type] === 'admin'){

        }else{

        }
    }else{
        console.log('else')
        var mainmenu =[];
        var prevModule ='';
         list.forEach(function(e,i) {
             if(prevModule === ''){
                 prevModule = e.master_name;
                 mainmenu.push({name:e.master_name,url:e.url,icon:e.icon})
               //  mainmenu.push(e.moduleType);
             }else{
                 if(prevModule !== e.master_name)
                 mainmenu.push({name:e.master_name,url:e.url,icon:e.icon})
             } 
         });
         var itemlist =[]
         mainmenu.forEach((main,i)=>{
             var items = [];
             list.forEach(e=>{
                 if(main.name == e.master_name && e.child_name!==""){
                     items.push({name:e.child_name,url:e.url});
                 }
             });
             if(items.length!==0)
             itemlist[i]={name:main.name,url:main.url,icon:main.icon,children:items};
             else{
                itemlist[i]={name:main.name,url:main.url,icon:main.icon};
             }
         })
         res.json({items:itemlist});
    }
    
})
module.exports = router;