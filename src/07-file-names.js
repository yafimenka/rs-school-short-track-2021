/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const list = {};
  const result = [];
  names.forEach((name) => {
    let newName = name;
    let setNewName = false;
    while (list[newName] !== undefined) {
      const oldName = newName;
      const count = list[name] + 1;
      newName = newName.concat('(', count, ')');
      if (list[newName] === undefined) {
        list[oldName]++;
        list[newName] = 0;
        result.push(newName);
        setNewName = true;
        break;
      }
    }
    if (!setNewName) {
      list[newName] = 0;
      result.push(newName);
    }
  });
  return result;
}

module.exports = renameFiles;
