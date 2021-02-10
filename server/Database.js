'use strict';

const mySql = require('mysql');

module.exports = class Database {
    constructor(options) {
        this.options = options;
    }

    doQuery(sql, parameters, connection) {
        return new Promise(async (resolve, reject) => {
            let newConnection = false;
            try {
                if (!connection) {
                    connection = await mySql.createConnection(this.options);
                    newConnection = true;
                }
                let queryResult = await connection.query(sql, parameters)
                if (typeof queryResult === 'undefined') {
                    reject('QueryError!')
                } else if (typeof queryResult.affectedRows === 'undefined') {
                    delete queryResult.meta;
                    resolve({queryResult, resultSet:true})
                } else {
                    resolve({
                        queryResult: {
                            rowsChanged: queryResult.affectedRows,
                            insertId: queryResult.insertId,
                            status: queryResult.warningStatus
                        },
                        resultSet:false
                    })
                }
            } catch (error) {
                reject('sql-error:'+ error.message)
            } finally {
                if(connection && newConnection) connection.end()
            }
        })
    };
}
