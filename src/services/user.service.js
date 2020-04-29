const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService{
    constructor({ UserRepository }) {
        super(UserRepository)
        _userRepository = _userRepository;
    }

    async getUserByName(username) {
        return await this.repository.getUserByUserName(username); 
    }
}

module.exports = UserService;