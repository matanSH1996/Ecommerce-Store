exports.createOne = (Model) => async (req,res) =>{

    try {
        const document = await Model.create(req.body)
        await document.save()
        res.status(201).json({
            status: "success",
            data: document
        })   
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}


exports.getAll = Model => async(req, res) =>{
    try {
        const document = await Model.find()
        res.status(200).json({
            status: "success",
            data: document
        })   
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}

exports.getCategory = Model => async (req,res) => {
    try {
        const document = await Model.filter(req.params.category)
        if(!document){
            return res.status(400).json({
                success:false,
                data: "no such category exist, please try again"
            })
        }

        res.status(200).json({
            status: "success",
            data: document
        })   
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}

exports.getOne = Model => async(req, res) =>{
    try {
        const document = await Model.findById(req.params.id)

        if(!document){
            return res.status(400).json({
                success:false,
                data: "no such id exist, please try again"
            })
        }

        res.status(200).json({
            status: "success",
            data: document
        })   
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}

exports.updateOne = Model => async(req, res) =>{
    try {
        console.log(123123);
        const document = await Model.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })

        if(!document){
            return res.status(400).json({
                success:false,
                data: "no such id exist, please try again"
            })
        }
        console.log(324234)

        res.status(200).json({
            status: "success",
            message: "the update has successfully done",
            data: document
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}

exports.deleteOne = Model => async(req, res) =>{
    try {
        const document = await Model.findByIdAndDelete(req.params.id)

        if(!document){
            return res.status(400).json({
                success:false,
                data: "no such id exist, please try again"
            })
        }

        res.status(200).json({
            status: "success",
            data: "the deletion has done successfully"
        })   

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            data: error
        })
    }
}
