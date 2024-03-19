"use client";
import { useEffect, useState } from "react";
import styles from "./distance.module.css";
import { distanceBetweenLatLon } from "./haversine";

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 5 * 1000, // only evaluate every 5 seconds
};

export const Distance = ({
  target,
}: {
  target: { lat: number; lon: number };
}) => {
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    const onSuccess = (pos: {
      coords: { latitude: number; longitude: number; accuracy: number };
    }) => {
      console.log("pos", pos);

      const d = distanceBetweenLatLon({
        lat1: target.lat,
        lat2: pos.coords.latitude,
        lon1: pos.coords.longitude,
        lon2: target.lon,
      });

      console.log("distance", d);
      setDistance(d);
    };

    const onError = (err: { code: number; message: string }) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    const watcher = navigator.geolocation.watchPosition(
      onSuccess,
      onError,
      GEOLOCATION_OPTIONS
    );
    return () => navigator.geolocation.clearWatch(watcher);
  }, [target]);

  return (
    <div className={styles.main}>
      {distance < 100
        ? "GG!"
        : `You are less than ${Math.ceil(distance / 1e3)} km away`}
    </div>
  );
};
