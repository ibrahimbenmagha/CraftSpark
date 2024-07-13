import React, { useState } from 'react';
import { Button, Popover } from 'antd';
import CreateArtisanAdmin from "./CreateArtisanAdmin/CreateArtisanAdmin.js";

const App = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={<CreateArtisanAdmin onClose={hide} />}
      title="Create Artisan"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      overlayStyle={{ width: '500px' , height: '100px'}}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
};

export default App;
