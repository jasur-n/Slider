import PropTypes from 'prop-types';
import React from 'react';

import SlideNavigationItem from '../slide-navigation-item';

import capacityActive from './images/capacity-active.svg';
import capacity from './images/capacity.svg';
import communicationActive from './images/communication-active.svg';
import communication from './images/communication.svg';
import managementActive from './images/management-active.svg';
import management from './images/management.svg';
import scheduleActive from './images/schedule-active.svg';
import schedule from './images/schedule.svg';
import * as styles from './slide-navigation-item-list.module.scss';

const SlideNavigationItemList = ({ active, setActive }) => {
  const navigationItemsArray = [
    {
      title: 'Capacity planning',
      icon: capacity,
      iconActive: capacityActive,
      style: {},
    },
    {
      title: 'Staggered schedules',
      icon: schedule,
      iconActive: scheduleActive,
      style: {},
    },
    {
      title: 'PPE management',
      icon: management,
      iconActive: managementActive,
      style: { width: '25px' },
    },
    {
      title: 'Employee communication',
      icon: communication,
      iconActive: communicationActive,
      style: { height: '25px' },
    },
  ];

  const navigationItems = navigationItemsArray.map((item) => (
    <SlideNavigationItem
      key={item.title}
      params={{
        title: item.title,
        icon: item.icon,
        iconActive: item.iconActive,
        style: item.style,
        isActive: active === item.title,
        setActive,
      }}
    />
  ));

  return <div className={styles.sliderNavigationItemList}>{navigationItems}</div>;
};
SlideNavigationItemList.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};
export default SlideNavigationItemList;
