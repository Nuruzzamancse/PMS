var Medicine = require('../model/medicine');

var createMedicine = (req, res, next)=>{

    var name = req.body.name,
        generic = req.body.generic,
        type = req.body.type,
        company = req.body.company,
        price = req.body.price,
        quantity = req.body.quantity;

    var myMedicine = new Medicine({
        name: name,
        generic: generic,
        type: type,
        company: company,
        price: price,
        quantity: quantity
    });

    myMedicine.save((err, medicine)=>{
        if(err)
            return res.status(401).json({
                message: err,
                success: false
            });
        else
            return res.status(200).json({
                success: true,
                data: medicine
            })

    })
}

var getAllMedicine = (req, res, next)=>{
    Medicine.find((err, medicine)=>{
        if(err)
        {
            return res.status(400).json({
                success: false,
                message: err
            })
        }
        else
        {
            return res.status(200).json({
                success: true,
                data: medicine
            })
        }
    })
}

var getMedicine = (req, res, next) =>{
    Medicine.findById( req.params.id, (err, medicine)=>{
        if(err)
            return res.status(400).json({
                success: false,
                message: err
            })
        else{
            return res.status(200).json({
                success: true,
                data: medicine
            })
        }
    })
}

var deleteMedicine = (req, res, next) =>{
    Medicine.findByIdAndRemove(req.params.id, (err)=>{
        if(err)
            return res.status(400).json({
                success: false,
                message: err
            })
        else
            return res.status(200).json({
                success: true,
                message: "Medcine delete"
            })
    })
}

var updateMedicine = (req, res, next)=>{


    Medicine.findById( req.params.id, (err, medicine)=>{
        if(err)
            return res.status(400).json({
                success: false,
                message: err
            })
        else{

            var name = req.body.name,
                generic = req.body.generic,
                type = req.body.type,
                company = req.body.company,
                price = req.body.price,
                quantity = req.body.quantity;

            medicine.name = name || medicine.name;
            medicine.generic = generic || medicine.generic;
            medicine.type = type || medicine.type;
            medicine.company = company || medicine.company;
            medicine.price = price || medicine.price;
            medicine.quantity =  quantity || medicine.quantity;

            medicine.save((err, medicine)=>{
                if(err)
                    return res.status(400).json({
                        success: false,
                        message: err
                    })
                else
                    return res.status(200).json({
                        success: true,
                        message: medicine
                    })
            })
        }
    })


}


module.exports = {
    createMedicine,
    getAllMedicine,
    getMedicine,
    deleteMedicine,
    updateMedicine
}