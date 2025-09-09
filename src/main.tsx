import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
import UserList from './ UserList.tsx'

render(<UserList/>, document.getElementById('app')!)
