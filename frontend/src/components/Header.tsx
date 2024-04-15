'use client'
import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Box, alpha } from '@mui/material';
import { Search, Notifications, AccountCircle } from '@mui/icons-material';

function Header() {
  return (
    <AppBar sx={{ bgcolor: "white" }}>
      <Toolbar sx={{ margin: "0 auto", bgcolor: "white", maxWidth: "1520", width: "90%" }}>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          {/* Left side icons */}
          <Box>
            <IconButton color="secondary">
              <AccountCircle />
            </IconButton>
            <IconButton color="secondary">
              <Badge badgeContent={2} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Box>
          {/* Search bar */}
          <Box sx={{ position: 'relative', borderRadius: 'borderRadius', backgroundColor: alpha('#fff', 0.15), '&:hover': { backgroundColor: alpha('#fff', 0.25) }, marginRight: 2, marginLeft: 2, width: 'auto' }}>
            <Search sx={{ p: '8px', color: '#fff', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }} />
            <InputBase placeholder="Search…" sx={{ color: "secondary", marginLeft: 3, width: '100%' }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;