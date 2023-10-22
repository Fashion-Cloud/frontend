import { Button, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';

interface AvatarModalProps {
  open: boolean;
  onClose: () => void;
}

function AvatarModal({ open, onClose }: AvatarModalProps) {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleLogoutOpen = () => {
    setLogoutOpen(true);
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ elevation: 1 }}
      BackdropProps={{ style: { backgroundColor: 'transparent' } }}
    >
      <DialogContent>
        <div>
          <Button
            size="small"
            variant="text"
            color="inherit"
            onClick={handleLogoutOpen}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="https://i.ibb.co/t30sNxF/logout.png"
                alt="Logout"
                style={{
                  width: '20px',
                  height: '20px',
                  marginRight: '5px',
                  marginBottom: '2px',
                }}
              />
              Logout
            </span>
          </Button>
        </div>
        <div>
          <Button
            size="small"
            variant="text"
            color="inherit"
            onClick={handleSettingsOpen}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="https://i.ibb.co/FsPtsc3/setting.png"
                alt="Settings"
                style={{ width: '20px', height: '20px', marginRight: '5px' }}
              />
              Settings
            </span>
          </Button>
        </div>
      </DialogContent>

      {/* Logout Modal */}
      <Dialog open={logoutOpen} onClose={handleLogoutClose}>
        우냐냐.
      </Dialog>

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        우땨땨.
      </Dialog>
    </Dialog>
  );
}

export default AvatarModal;
