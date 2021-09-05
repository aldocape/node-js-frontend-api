let id = 1;
const DB = [{ name: "Juan", age: 30, id: 1 }];

module.exports = {
  DB,

  add(user) {
    id++;
    user.id = id++;
    DB.push(user);
  },

  put(user) {
    const userId = user.id;
    const userIndex = DB.findIndex((item) => item.id === userId);

    DB[userIndex].age = user.age;
    DB[userIndex].name = user.name;
  },
};
