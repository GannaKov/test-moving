'use client';
import React from 'react';
import { useDesignContext } from '@/app/context/DesignContext';
import FooterOlga from './designByOlga/FooterOlga';

import FooterSvitlana from './designBySvitlana/FooterSvitlana';

const Footer = () => {
  const { designType } = useDesignContext();
  if (designType === 'designByOlga') return <FooterOlga />;
  if (designType === 'designBySvitlana') return <FooterSvitlana />;
};

export default Footer;
