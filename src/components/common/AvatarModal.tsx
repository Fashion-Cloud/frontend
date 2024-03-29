import { Button, Dialog, DialogContent, Divider } from '@mui/material';
import React, { useState } from 'react';
import { useLogout } from 'src/api/hook/UserHook';

interface AvatarModalProps {
  open: boolean;
  onClose: () => void;
}

function AvatarModal({ open, onClose }: AvatarModalProps) {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const { mutate: logout } = useLogout();

  const handleLogoutOpen = () => {
    logout();
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

  const dividerStyle: React.CSSProperties = {
    width: '100%',
    margin: '8px 0',
  };

  const modalStyle: React.CSSProperties = {
    position: 'absolute',
    top: '75%',
    left: '-80%',
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={modalStyle}
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
                  marginRight: '7px',
                  marginBottom: '2px',
                }}
              />
              Logout
            </span>
          </Button>
        </div>
        <Divider style={dividerStyle} />
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
                style={{ width: '20px', height: '20px', marginRight: '7px' }}
              />
              Settings
            </span>
          </Button>
        </div>
      </DialogContent>

      {/* Logout Modal */}
      <Dialog open={logoutOpen} onClose={handleLogoutClose}>
        logout
      </Dialog>

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        settings
      </Dialog>
    </Dialog>
  );
}

export default AvatarModal;
