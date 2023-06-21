import * as mongoose from 'mongoose';
import { treeaccountSchema } from './models/daomodels/ticket';
import { seedTree } from './assets/seedTree';

const treeaccountModel = mongoose.model('treeaccount', treeaccountSchema);

export class Seed {

    constructor() {

    }

    
    public createTree() {
    seedTree.forEach((objData) => {
    treeaccountModel.findOneAndUpdate({id: objData['id']}, objData, { new: true }).then((data) => {
    if(data === null || data === undefined) {
    new treeaccountModel(objData).save();
    }
    })
    })
    }
        

}
