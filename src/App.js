import logo from './logo.svg';
import React from 'react';
import { PageHeader, Button, Descriptions, Layout } from 'antd';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import {Space} from 'antd'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Analytics from './Pages/Analytics';
// import Routing from './Pages/Routing';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Title style={{ color: 'white', float: 'left' }} level={3}>Welcome</Title>
          <div className='navbar' style={{ float: 'right', marginLeft: '50px', paddingRight: '50px' }} >
            <Space>
            <Button>
              <Link to="/">Home</Link>
            </Button>

            <Button>
              <Link to="/about">About</Link>
            </Button>

            <Button>
              <Link to="/contact">Contact</Link>
            </Button>

            <Button>
              <Link to="/analytics">Analytics</Link>
            </Button>
            </Space>
          </div>
        </Header>
      </Layout>
      {/* <span style={{ color: 'white', fontSize: '1.6rem' }}>React Routeing</span>
      <PageHeader
           ghost={false}
           onBack={() => window.history.back()}
           title="Title"
           subTitle="This is a subtitle"
           extra={[
             <>
            <Button><Link to="/">Home</Link></Button> 
            <Button><Link to="/about">About</Link></Button>
            <Button><Link to="/contact">Contact</Link></Button>
            <Button><Link to="/analytics">Analytics</Link></Button>
            </>
           ]} 
      > */}

      {/* </PageHeader> */}


      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/analytics" component={Analytics} />


    </div>
  );
}

export default App;
