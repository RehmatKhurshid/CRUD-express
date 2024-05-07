import User from "../../models/user/user.js";


// export const getTestRoute = (req, res) => {
//     res.status(200).json({ message: "this is test route" })
// }
export const getTestRoute = async (req, res) => {
    try {
        const data = await User.find();
        console.log(data);
        res.status(200).json(data)

    } catch (error) {
        console.log(error)

    }
}

    export const postTestRoute = async (req, res) => {
        try {
            const { firstName, lastName, email, mobile } = req.body;
            console.log(firstName, lastName, email, mobile);
            const user = new User({
                firstName,
                lastName,
                email,
                mobile
            })

            await user.save(); 

            res.status(201).json({ message: "inserted success" })
        } catch (error) {
            console.log(error)
        }
    }
    
    export const getUser = async (req, res) => {
        try {
            console.log(req.params.id);
            const data = await User.findById({ _id: req.params.id });

            console.log(data);

            res.status(200).json(data)
        } catch (error) {
            console.log('error', error)
        }
    }
    export const deleteUser = async(req,res) =>{
        try {
            await User.findByIdAndDelete({_id:req.params.id});
            res.status(200).json({"message" : "user deleted sucesssfully"})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    
export const updateUserbyPut = async(req,res) =>{
    try {
        console.log(req.body)

        const data = await User.findByIdAndUpdate({_id:req.params.id} , req.body, {new:true})
        console.log(data);

        res.status(201).json({"message" : "user updated sucesssfully"})


    } catch (error) {
        console.log(error)
        
    }
}

export const updateUserbyPatch = async(req,res) =>{
    try {
        console.log(req.body)

        const data = await User.findByIdAndUpdate({_id:req.params.id} , req.body, {new:true})
        console.log(data);

        res.status(201).json({"message" : "user updated sucesssfully"})

    } catch (error) {
        console.log(error)
        
    }
}
