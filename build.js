#!/usr/local/bin/node

var fs = require('fs'),
    path = require('path'),
    //https://github.com/mishoo/UglifyJS2
    U2 = require("uglify-js"),
    //http://learnboost.github.io/stylus/
    stylus = require('stylus');

var pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json')),
    NS = pkg.name,
    COPYRIGHT = '/*! '+ pkg.title +' '+ pkg.version +'\n'
              + '* (c) 2012-2013 '+ pkg.author +', MIT Licensed\n'
              + '* '+ pkg.homepage +'\n'
              + '*/',
    SRC  = __dirname + '/src/',
    OUT  = __dirname + '/';
    
console.log('building and minifying...');
buildJS(NS);
buildStyl(NS);
console.log('done');


function buildJS(name) {
    var filename = name + '.js',
        content = fs.readFileSync(SRC+ filename).toString(),
        ast = U2.parse(content),
        compressor,
        code = '';
    
    compressor = U2.Compressor({
        unsafe: true
    });

    ast.figure_out_scope();
    ast = ast.transform(compressor);

    ast.figure_out_scope();
    ast.compute_char_frequency();
    ast.mangle_names();

    code = ast.print_to_string();
    console.log('compiled: ' + filename);
    fs.writeFile(OUT + filename, COPYRIGHT+code);
}

function buildStyl(name) {
    var filename = name + '.styl',
        content = fs.readFileSync(SRC + filename).toString();

        stylus(content)
            .set('filename', filename)
            .set('paths', [__dirname + '/src'])
            .set('compress', true)
            .render(function(err, css){
                if (err) throw err;
                console.log('compiled: ' + filename);
                fs.writeFile(OUT + name + '.css', COPYRIGHT+css);
            });
}