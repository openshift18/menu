var sqlite3 = require('sqlite3').verbose();
var dbNearest = new sqlite3.Database('./database/nearest.db');
var dbSet1Raw = new sqlite3.Database('./database/set1raw.db');
var dbSet2Raw = new sqlite3.Database('./database/set2raw.db');
var dbSet3Raw = new sqlite3.Database('./database/set3raw.db');
var dbSet4Raw = new sqlite3.Database('./database/set4raw.db');
var dbSet5Raw = new sqlite3.Database('./database/set5raw.db');
var dbSet6Raw = new sqlite3.Database('./database/set6raw.db');

var insertSet1Raw = function (raw, time, callback) {
    dbSet1Raw.serialize(() => {
        var stmt = dbSet1Raw.prepare("INSERT INTO set1raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}

var insertSet3Raw = function (raw, time, callback) {
    dbSet3Raw.serialize(() => {
        var stmt = dbSet3Raw.prepare("INSERT INTO set3raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}


var insertSet2Raw = function (raw, time, callback) {
    dbSet2Raw.serialize(() => {
        var stmt = dbSet2Raw.prepare("INSERT INTO set2raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}

var insertSet4Raw = function (raw, time, callback) {
    dbSet4Raw.serialize(() => {
        var stmt = dbSet4Raw.prepare("INSERT INTO set4raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}

var insertSet5Raw = function (raw, time, callback) {
    dbSet5Raw.serialize(() => {
        var stmt = dbSet5Raw.prepare("INSERT INTO set5raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}

var insertSet6Raw = function (raw, time, callback) {
    dbSet6Raw.serialize(() => {
        var stmt = dbSet6Raw.prepare("INSERT INTO set6raw ( raw, time  ) VALUES ( ?, ? )");
    stmt.run(raw, time);
    stmt.finalize();
})
    callback();
}


var selectSet1Raw = function (callback) {
    var data = []
    var time = []
    dbSet1Raw.serialize(() => {
        var sql = 'SELECT * FROM set1raw';
    dbSet1Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}

var selectSet2Raw = function (callback) {
    var data = []
    var time = []
    dbSet2Raw.serialize(() => {
        var sql = 'SELECT * FROM set2raw';
    dbSet2Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}

var selectSet3Raw = function (callback) {
    var data = []
    var time = []
    dbSet3Raw.serialize(() => {
        var sql = 'SELECT * FROM set3raw';
    dbSet3Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}

var selectSet4Raw = function (callback) {
    var data = []
    var time = []
    dbSet4Raw.serialize(() => {
        var sql = 'SELECT * FROM set4raw';
    dbSet4Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}

var selectSet5Raw = function (callback) {
    var data = []
    var time = []
    dbSet5Raw.serialize(() => {
        var sql = 'SELECT * FROM set5raw';
    dbSet5Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}

var selectSet6Raw = function (callback) {
    var data = []
    var time = []
    dbSet6Raw.serialize(() => {
        var sql = 'SELECT * FROM set6raw';
    dbSet6Raw.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push(row.raw)
    time.push(row.time)
})
    ;
    callback(data, time)
})
    ;
})
}


var insertNearest = function (strecke, moveSpeed, inputSpeed, tab, mouse, time, callback) {
    dbNearest.serialize(() => {
        var stmt = dbNearest.prepare("INSERT INTO nearest ( strecke, moveSpeed, inputSpeed, tab, mouse, time  ) VALUES ( ?, ?, ?, ?, ?, ? )");
    stmt.run(strecke, moveSpeed, inputSpeed, tab, mouse, time);
    stmt.finalize();
})
    callback();
}

var selectNearest = function (callback) {
    var data = []
    dbNearest.serialize(() => {
        var sql = 'SELECT * FROM nearest';
    dbNearest.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
        data.push([row.strecke, row.moveSpeed, row.inputSpeed, row.tab, row.mouse, row.time])
})
    ;
    callback(data)
})
    ;
})
}

module.exports = {
    createSet1: function (callback) {
        dbSet1Raw.run("CREATE TABLE IF NOT EXISTS set1raw( raw TEXT, time FLOAT )")
        callback();
    },
    insertSet1Raw: function (raw, time, callback) {
        insertSet1Raw(raw.toString(), time, function () {
            callback()
        })
    },
    selectSet1Raw: function (callback) {
        selectSet1Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    selectSet2Raw: function (callback) {
        selectSet2Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    insertSet2Raw: function (raw, time, callback) {
        insertSet2Raw(raw.toString(), time, function () {
            callback()
        })
    },
    createSet2: function (callback) {
        dbSet2Raw.run("CREATE TABLE IF NOT EXISTS set2raw( raw TEXT, time FLOAT )")
        callback();
    },
    selectSet3Raw: function (callback) {
        selectSet3Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    insertSet3Raw: function (raw, time, callback) {
        insertSet3Raw(raw.toString(), time, function () {
            callback()
        })
    },
    createSet3: function (callback) {
        dbSet3Raw.run("CREATE TABLE IF NOT EXISTS set3raw( raw TEXT, time FLOAT )")
        callback();
    },
    selectSet4Raw: function (callback) {
        selectSet4Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    insertSet4Raw: function (raw, time, callback) {
        insertSet4Raw(raw.toString(), time, function () {
            callback()
        })
    },
    createSet4: function (callback) {
        dbSet4Raw.run("CREATE TABLE IF NOT EXISTS set4raw( raw TEXT, time FLOAT )")
        callback();
    },
    selectSet5Raw: function (callback) {
        selectSet5Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    insertSet5Raw: function (raw, time, callback) {
        insertSet5Raw(raw.toString(), time, function () {
            callback()
        })
    },
    createSet5: function (callback) {
        dbSet5Raw.run("CREATE TABLE IF NOT EXISTS set5raw( raw TEXT, time FLOAT )")
        callback();
    },
    selectSet6Raw: function (callback) {
        selectSet6Raw(function (raw, time) {
            callback(raw, time)
        })
    },
    insertSet6Raw: function (raw, time, callback) {
        insertSet6Raw(raw.toString(), time, function () {
            callback()
        })
    },
    createSet6: function (callback) {
        dbSet6Raw.run("CREATE TABLE IF NOT EXISTS set6raw( raw TEXT, time FLOAT )")
        callback();
    },

    insertNearest: function (strecke, moveSpeed, inputSpeed, tab, mouse, time, callback) {
        insertNearest(strecke, moveSpeed, inputSpeed, tab, mouse, time, function () {
            callback()
        })
    },
    selectNearest: function (callback) {
        selectNearest(function (data) {
            callback(data)
        })
    },

}