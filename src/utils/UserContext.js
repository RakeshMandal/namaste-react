const { createContext } = require("react");

const UserContext = createContext(
    loginedUser = "Default User"
);

export default UserContext;