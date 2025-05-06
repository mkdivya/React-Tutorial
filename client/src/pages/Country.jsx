import React, { useState, useEffect, useTransition } from 'react';
import { getCountry } from '../api/postApi';
import Loader from '../components/UI/Loading';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountry();
      console.log(res);
      setCountry(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <div>
      <h1>Country</h1>
      <ul>
        {country.map((item) => (
          <li key={item.id}>
            {item.country} - {item.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
