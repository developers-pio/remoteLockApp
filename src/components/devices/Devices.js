import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDevices } from "~/store/actions/deviceActions";
import { DeviceCard } from "~/components";

const Devices = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.devicesInfo);

  useEffect(() => {
    dispatch(fetchDevices());
  }, [dispatch]);

  return (
    <div className="card-deck row">
      {data &&
        data.map(d => (
          <div key={d.id} className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <DeviceCard info={d} />
          </div>
        ))}
    </div>
  );
};

export default Devices;
