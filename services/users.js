const userRepository = require("../repositories/users")

const getUsers = () => {
    return userRepository.getUsers();

}
const getUserById = (idUser) => {
   return userRepository.getUserById(idUser);

}
const creatUser = (body) => {
  return userRepository.creatUser(body);

}
const deleteUser = (idUser) => {
    return userRepository.deleteUser(idUser);

}
const updateUser = (idUser, body) => {
    return userRepository.updateUser(idUser, body);
}

module.exports = {
    getUsers,
    getUserById,
    creatUser,
    deleteUser,
    updateUser

}