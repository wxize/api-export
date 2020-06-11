const Syncwe = require('../lib/app')

const sync = new Syncwe(
    'http://yapi.campus.com',
    'cn.coder@tom.com',
    'api2020'
)

sync.saveAs('./out_files')