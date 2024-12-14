'use client';
import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';
import HeaderOlga from './designByOlga/HeaderOlga';
import HeaderSvitlana from './designBySvitlana/HeaderSvitlana';

const Header = () => {
  const { designType } = useDesignContext();
  if (designType === 'designByOlga') return <HeaderOlga />;
  if (designType === 'designBySvitlana') return <HeaderSvitlana />;
};

export default Header;
