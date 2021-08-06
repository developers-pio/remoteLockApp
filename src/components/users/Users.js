import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "~/store/actions";
import { UserCard } from "~/components";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.usersInfo);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="card-deck row">
      {users &&
        users.map((user, i) => (
          <div key={i} className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <UserCard info={user} />
          </div>
        ))}
    </div>
  );
};

export default Users;
