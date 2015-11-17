import { Util } from './util'
import fs from 'fs'
import path from 'path'
import $ from 'cheerio'

class NodeUtil extends Util {

    load(filepath, handler) {
        fs.readFile(path.resolve(filepath), function(err, bytes) {
            if(err) throw new Error("Can't load file from " + filepath);
            handler(bytes.toString)
        })
    }

}

var util = new NodeUtil();

export { $, util }