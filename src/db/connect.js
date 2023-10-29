const mongoose=require("mongoose");
mongoose.set('strictQuery',true);
mongoose.connect('mongodb+srv://<username>:<password>@portscan.rsqmdjd.mongodb.net/?retryWrites=true&w=majority',{
}).then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("not connected");
})

// mongodb+srv://bharatrn:veda@portscan.rsqmdjd.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://bharatnaikmanki2003:mycluster@leavemanage.mls6ew2.mongodb.net/?retryWrites=true&w=majority
