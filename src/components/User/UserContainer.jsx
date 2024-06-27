import React, { useEffect } from "react";
import { connect } from "react-redux";
import User from "./User";
import { getUserInfo } from "../../redux/usersReducer";

const UserContainer = ({ users, getUserInfo }) => {
    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    return (
        <User users={users} />
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
});

export default connect(mapStateToProps, { getUserInfo })(UserContainer);
