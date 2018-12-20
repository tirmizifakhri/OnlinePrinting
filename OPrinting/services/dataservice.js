import { db } from '../config/db';

export const addOrder =  (name, orderNo, matricNo) => {
    db.ref('/order').child(matricNo).set({
        name: name,
        orderNo: orderNo,
        matricNo: matricNo
    });

}