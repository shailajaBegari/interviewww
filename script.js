data=[{
    name:"anu",
    age:12,
    havecycle:true
},
{name:"shailu",
age:28,
havecycle:true}
]
for(var index=0;index<data.length;index++){
    if(data[index].age>12 && data[index].havecycle===true){
        console.log(data[index].name)
    
    }

}
