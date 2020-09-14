const makeSymlinks = require('make-symlinks');

const patterns = ['../brand/*'];
const path = './';

makeSymlinks(patterns, path).then((symlinks) => {
  symlinks.forEach((symlink) => {
    console.log(symlink.path, '→', symlink.target);
  });
});

const symlinks = makeSymlinks.sync(patterns, path);
symlinks.forEach((symlink) => {
  console.log(symlink.path, '→', symlink.target);
});
