let id = 1;
const DB = [{ name: "Aldo Capezzali", age: 39, id: 1 }];

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

  remove(idToFind) {
    // Método remove para uso en array, recibiendo por parámetro el id a eliminar
    const userIndex = DB.findIndex((item) => item.id === idToFind);

    if (userIndex > -1) {
      DB.splice(userIndex, 1);
      return 1;
    } else {
      return 0;
    }
  },
};
