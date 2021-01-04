import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import ParentComp from './components/ParentComp'
import RefDemo from './components/RefDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
// 위 ErrorBoundary로 인해 브라우져 창의 에러에서 X를 누르면 "Something went wrong" 돌아 옴
//  ErrorBoundary를 각각 한개씩 wrap하면, 에러난 것을 제외하고 나머지는 보여줌
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoveredCounterTwo from './components/HoveredCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
import PostList from './components/PostList'
import PostForm from './components/PostForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <PostList />
        <UserProvider value="Yang">
          <ComponentC />
        </UserProvider>

        <CounterTwo>
           {(count, incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount= {incrementCount} />
            )} 
        </CounterTwo>
        <CounterTwo>
            {(count, incrementCount)=>(
              <HoveredCounterTwo count={count} incrementCount= {incrementCount} />
            )}
        </CounterTwo>
       

        {/* <User render={(isLoggedIn)=> isLoggedIn ? ("Wook"): "Guest"}/>
        <HoveredCounterTwo />
        <ClickCounterTwo /> */}

        <HoverCounter />
        <ClickCounter name={"Wook"}/>
        <ErrorBoundary>
          <Hero heroName="Batman" />
          <Hero heroName="Superman" />
          {/* 밑의 것이 에러 발생처 */}
          {/* <Hero heroName="Joker" /> */}
        </ErrorBoundary>
        <PortalDemo />
        <FRParentInput />
        {/* 윗 것과 충돌 */}
        {/* <FocusInput />  */}
        {/* 위 것과 충돌 */}
        {/* <RefDemo /> */}
        <ParentComp />
        <LifecycleA />
        <Form />
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline />
        <Stylesheet primary={true}/>
        <NameList />
        <UserGreeting />
        <ParentComponent />
        <EventBind />
        <ClassClick />
        <FunctionClick />
        <Counter />
        {/* <Message /> */}
        <Greet name="Bruce" heroName="Bat Man">Bruce's child</Greet>
        <Greet name="Clack" heroName="Super Man"><button>Click me</button></Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name= "Bruce" heroName="Bat Man"></Welcome>
        <Welcome name="Clack" heroName="Super Man"></Welcome>
        <Welcome name="Diana" heroName="Wonder Woman" />
      </div>
    )
  }
}
export default App;