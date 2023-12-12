import './App.css';
import { Button, Space, DatePicker, version, ColorPicker } from 'antd';

const App = () => (
  <div style={{ padding: '0 24px' }}>
      <h1>First Firebase/React Web App{version}</h1>
    <Space>
      <DatePicker />
      <Button type="primary">Click</Button>
      <ColorPicker/>
    </Space>
  </div>
);

export default App;