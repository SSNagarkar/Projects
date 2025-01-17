import { useState } from 'react';
import React from 'react'

export const NavigationMenu = () => {
  return (
    <div className="Navigation">
         <div className="navmenu">Home</div>
         <div className="navmenu">About</div>
         <div className="navmenu">Menu</div>
         <div className="navmenu">Gallery</div>
    </div>
  )
}

export default NavigationMenu;