
const convertAvatarToObject = (userData) => {
    return {
        ...userData,
        avatar: [userData.avatar] 
    };
};

export default convertAvatarToObject;