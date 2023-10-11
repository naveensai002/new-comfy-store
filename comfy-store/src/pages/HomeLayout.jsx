import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Navbar } from '../components';
import { useNavigation } from 'react-router-dom';
import { Loading } from '../components';
const HomeLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className='align-element py-20'>
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayout;
