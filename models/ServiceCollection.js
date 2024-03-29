const { Schema, SchemaTypes, model, SchemaType } = require('mongoose');

const serviceCollectionSchema = new Schema ({
    serviceConcern: {
        type: String
    },
    serviceTitle: {
        type: String,
        unique: true
    },
    optionChoices1: {
        type: [String]
    },
    optionChoices2: {
        type: [String]
    },
    services: {
        type: [SchemaTypes.ObjectId],
        ref: "Service"
    },
    specialServices: {
        type: [SchemaTypes.ObjectId],
        ref: "SpecialService"
    }
})

const ServiceCollection = model("ServiceCollection", serviceCollectionSchema, "serviceCollections");
module.exports = ServiceCollection;