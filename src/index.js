#!/usr/bin/env node

const args = process.argv;
const fs = require("fs");
const path = require('path')

const postMethods = require("./posts");
const config = require("./config");
const addHomePage = require("./homepage");

const posts = fs
      .readdirSync(config.dev.postsdir)
      .map(post => post.slice(0, -4))
      .map(post => postMethods.createPost(post))

args.forEach(arg => {
  if(arg === '--help' || arg === '-h') {
    console.log('\x1b[33m%s\x1b[0m' ,'Write simple-ssg1 and add flag -i with txt file as an argument\nWrite simple-ssg1 -v to see the name and version of the tool');
    return 0;
  }

  else if(arg === '--version' || arg === '-v') {
    console.log('\x1b[36m%s\x1b[0m', 'simple-ssg1\nVersion 1.0');
    return 0;
  }

  else if(arg.toLowerCase() === './content'){
    
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    
    postMethods.createPosts(posts);
    addHomePage(posts);
    return 0;
  }

  else if(arg.toLowerCase() === 'naval-treaty' ) {
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    postMethods.createSingle(posts[0]);
    return 0;
  }

  else if(arg.toLowerCase() === 'red-headed-league' ) {
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    postMethods.createSingle(posts[1]);
    return 0;
  }

  else if(arg.toLowerCase() === 'silver-blaze' ) {
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    postMethods.createSingle(posts[2]);
    return 0;
  }

  else if(arg.toLowerCase() === 'six-napoleans' ) {
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    postMethods.createSingle(posts[3]);
    return 0;
  }

  else if(arg.toLowerCase() === 'speckled-band' ) {
   
    if (!fs.existsSync(config.dev.outdir)) fs.mkdirSync(config.dev.outdir);
    postMethods.createSingle(posts[4]);
    return 0;
  }

})

if (args.length === 2){
  console.log('You didn\'t specify any flag\n\nUse simple-ssg1 -h for help');
  return -1;
}
